// Company Management

const API_URL = "/api/company";

const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

// Page Load
document.addEventListener("DOMContentLoaded", () => {

    checkLogin();

    loadUser();

    loadCompany();

});

// Load Logged User

function loadUser() {

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {

        document.getElementById("username").innerText = user.full_name;

    }

}

// Load Company

async function loadCompany() {

    try {

        const response = await fetch(API_URL + "/", {

            method: "GET",

            headers: {

                "Authorization": "Bearer " + token

            }

        });

        const result = await response.json();

        if (!result.success) {

            return;

        }

        const company = result.company;

        document.getElementById("company_name").value = company.company_name || "";
        document.getElementById("business_sector").value = company.business_sector || "";
        document.getElementById("registration_no").value = company.registration_no || "";
        document.getElementById("address").value = company.address || "";
        document.getElementById("district").value = company.district || "";
        document.getElementById("province").value = company.province || "";
        document.getElementById("contact_no").value = company.contact_no || "";
        document.getElementById("website").value = company.website || "";

        // Update button text
        document.getElementById("saveBtn").innerHTML =
        '<i class="fa-solid fa-pen-to-square"></i> Update Company';

    }

    catch (error) {

        console.error(error);

    }

}

// Save / Update Company

async function saveCompany() {

    const companyData = {

        company_name: document.getElementById("company_name").value.trim(),
        business_sector: document.getElementById("business_sector").value.trim(),
        registration_no: document.getElementById("registration_no").value.trim(),
        address: document.getElementById("address").value.trim(),
        district: document.getElementById("district").value.trim(),
        province: document.getElementById("province").value.trim(),
        contact_no: document.getElementById("contact_no").value.trim(),
        website: document.getElementById("website").value.trim()

    };

    if (companyData.company_name === "") {

        showMessage("Company name is required.", "danger");

        return;

    }

    try {

        // Check whether company already exists
        const checkResponse = await fetch(API_URL + "/", {

            method: "GET",

            headers: {

                "Authorization": "Bearer " + token

            }

        });

        let method = "POST";

        if (checkResponse.ok) {

            method = "PUT";

        }

        const response = await fetch(API_URL + "/", {

            method: method,

            headers: {

                "Content-Type": "application/json",

                "Authorization": "Bearer " + token

            },

            body: JSON.stringify(companyData)

        });

        const result = await response.json();

        if (result.success) {

            showMessage(result.message, "success");

            loadCompany();

        } else {

            showMessage(result.message, "danger");

        }

    }

    catch (error) {

        console.error(error);

        showMessage("Server connection failed.", "danger");

    }

}


// Message

function showMessage(message, type) {

    const msg = document.getElementById("message");

    msg.className = "";

    if (type === "success") {

        msg.classList.add("text-success");

    } else {

        msg.classList.add("text-danger");

    }

    msg.innerHTML = message;

}