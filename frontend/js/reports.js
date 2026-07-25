// Reports

const API_URL = "http://127.0.0.1:5000/api/reports";

const token = localStorage.getItem("token");

let reports = [];

if (!token) {
    window.location.href = "login.html";
}

// Page Load

document.addEventListener("DOMContentLoaded", () => {

    loadUser();

    loadReports();

});

// Load Logged User

function loadUser() {

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        document.getElementById("username").innerText = user.full_name;
    }

}

// Generate Report

async function generateReport() {

    try {

        const response = await fetch(API_URL + "/", {

            method: "POST",

            headers: {
                "Authorization": "Bearer " + token
            }

        });

        const result = await response.json();

        if (result.success) {

            showMessage(result.message, "success");

            loadReports();

        } else {

            showMessage(result.message, "danger");

        }

    }

    catch (error) {

        console.error(error);

        showMessage("Server connection failed.", "danger");

    }

}

// Load Reports

async function loadReports() {

    try {

        const response = await fetch(API_URL + "/", {

            headers: {
                "Authorization": "Bearer " + token
            }

        });

        const result = await response.json();

        if (!result.success) {
            return;
        }

        reports = result.data;

        let html = "";

        result.data.forEach(report => {

            html += `

            <tr>
                <td>${report.title}</td>
                <td>${report.type}</td>
                <td>${new Date(report.generated_at).toLocaleString()}</td>
                <td><span class="badge bg-success">Generated</span></td>

                <td>
                    <button class="btn btn-primary btn-sm" onclick="viewReport(${report.id})">
                        <i class="fa-solid fa-eye"></i>
                    </button>

                    <button class="btn btn-warning btn-sm" onclick="downloadReport(${report.id})">
                        <i class="fa-solid fa-download"></i>
                    </button>

                    <button class="btn btn-danger btn-sm" onclick="deleteReport(${report.id})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
            `;

        });

        document.getElementById("reportTable").innerHTML = html;

    }

    catch (error) {

        console.error(error);

    }

}


// View Report

function viewReport(id) {

    id = Number(id);

    const report = reports.find(r => Number(r.id) === id);

    if (!report) {

        alert("Report not found");

        console.log(reports);

        return;

    }

    document.getElementById("reportTitle").innerText = report.title;

    document.getElementById("reportContent").textContent = report.content;

    const modal = new bootstrap.Modal(
        document.getElementById("reportModal")
    );

    modal.show();

}


// Download Report

async function downloadReport(id) {

    try {

        const response = await fetch(API_URL + "/download/" + id, 
            {

                headers: {

                    Authorization: "Bearer " + token
                }

            });

        if (!response.ok) {

            showMessage("Failed to download report.", "danger");

            return;

        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");

        a.href = url;
        a.download = "Sustainability_Report.pdf";
        a.click();
        window.URL.revokeObjectURL(url);

    }

    catch (error) {

        console.error(error);

    }
}

// Delete Report

async function deleteReport(id) {

    if (!confirm("Are you sure you want to delete this report?")) {
        return;
    }

    try {

        const response = await fetch(API_URL + "/" + id, {

            method: "DELETE",
            headers: {
                Authorization: "Bearer " + token
            }

        });

        const result = await response.json();

        if (result.success) {

            showMessage(result.message, "success");

            loadReports();
        } 
        
        else {

            showMessage(result.message, "danger");

        }

    }

    catch (error) {

        console.error(error);

    }

}

// Message

function showMessage(message, type) {

    document.getElementById("message").innerHTML =

        `<div class="alert alert-${type} alert-dismissible fade show">
            ${message}

            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>`;

}