// Dashboard

const API_URL = "http://127.0.0.1:5000/api";

const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

// Load Dashboard

document.addEventListener("DOMContentLoaded", () => {

    loadUser();
    loadDashboard();
    loadCarbonHistory();

});

// Load Logged User

function loadUser() {

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {

        document.getElementById("username").innerText = user.full_name;

    }

}

// Dashboard Summary

async function loadDashboard() {

    try {

        const response = await fetch(API_URL + "/dashboard/", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        const result = await response.json();

        if (!result.success) {

            alert(result.message);

            return;

        }

        const data = result.data;

        document.getElementById("totalCarbon").innerHTML =
            data.total_emission.toFixed(2) + " kg";

        document.getElementById("esgScore").innerHTML =
            data.average_esg_score.toFixed(2);

        document.getElementById("companyName").innerHTML =
            data.company_name || "Company";

        document.getElementById("reportCount").innerHTML =
            data.total_reports || 0;

        drawESGChart(data.latest_esg);

    }

    catch (error) {

        console.log(error);

    }

}

// Carbon History

async function loadCarbonHistory() {

    try {

        const response = await fetch(API_URL + "/carbon/", {

            headers: {

                Authorization: "Bearer " + token

            }

        });

        const result = await response.json();

        if (!result.success) {

            return;

        }

        let labels = [];

        let values = [];

        let table = "";

        result.data.forEach(item => {

            labels.unshift(
                new Date(item.created_at).toLocaleDateString()
            );

            values.unshift(item.total_emission);

            table += `

            <tr>

                <td>${new Date(item.created_at).toLocaleDateString()}</td>

                <td>${item.electricity_kwh}</td>

                <td>${item.fuel_liters}</td>

                <td>${item.transport_distance}</td>

                <td>${item.waste_kg}</td>

                <td>${item.total_emission}</td>

            </tr>

            `;

        });

        document.getElementById("carbonTable").innerHTML = table;

        drawCarbonChart(labels, values);

    }

    catch (error) {

        console.log(error);

    }

}

// Carbon Line Chart

function drawCarbonChart(labels, values) {

    new Chart(document.getElementById("carbonChart"), {

        type: "line",

        data: {

            labels: labels,

            datasets: [{

                label: "Carbon Emission",

                data: values,

                borderColor: "#198754",

                backgroundColor: "rgba(25,135,84,.2)",

                borderWidth: 3,

                fill: true,

                tension: .4

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    });

}

// ESG Chart

function drawESGChart(esg) {

    if (!esg) {

        return;

    }

    new Chart(document.getElementById("esgChart"), {

        type: "doughnut",

        data: {

            labels: [

                "Environmental",
                "Social",
                "Governance"

            ],

            datasets: [{

                data: [

                    esg.environmental_score,
                    esg.social_score,
                    esg.governance_score

                ],

                backgroundColor: [

                    "#198754",

                    "#0d6efd",

                    "#fd7e14"

                ]

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    });

}