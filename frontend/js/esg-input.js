
const API_URL = "http://127.0.0.1:5000/api/esg";

const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}


// Load User=

document.addEventListener("DOMContentLoaded", () => {

    loadUser();

    document
        .getElementById("esgForm")
        .addEventListener("submit", submitESG);

});

function loadUser() {

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {

        document.getElementById("username").innerText =
            user.full_name;

    }

}


// Submit ESG


async function submitESG(e) {

    e.preventDefault();

    document
        .getElementById("loading")
        .classList.remove("d-none");

    document
        .getElementById("successAlert")
        .classList.add("d-none");

    document
        .getElementById("errorAlert")
        .classList.add("d-none");

    const data = {

        renewable_energy: Number(
            document.getElementById("renewable_energy").value
        ),

        water_consumption: Number(
            document.getElementById("water_consumption").value
        ),

        recycling_rate: Number(
            document.getElementById("recycling_rate").value
        ),

        environmental_policy:
            document.getElementById("environmental_policy").value === "true",

        employee_satisfaction: Number(
            document.getElementById("employee_satisfaction").value
        ),

        training_hours: Number(
            document.getElementById("training_hours").value
        ),

        gender_diversity: Number(
            document.getElementById("gender_diversity").value
        ),

        community_projects:
            document.getElementById("community_projects").value === "true",

        board_meetings: Number(
            document.getElementById("board_meetings").value
        ),

        ethics_policy:
            document.getElementById("ethics_policy").value === "true",

        compliance:
            document.getElementById("compliance").value === "true",

        risk_management:
            document.getElementById("risk_management").value === "true"

    };

    try {

        const response = await fetch(API_URL + "/", {

            method: "POST",

            headers: {

                "Content-Type": "application/json",

                "Authorization": "Bearer " + token

            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        document
            .getElementById("loading")
            .classList.add("d-none");

        if (result.success) {

            document
                .getElementById("successAlert")
                .classList.remove("d-none");

            setTimeout(() => {

                window.location.href = "esg-dashboard.html";

            }, 1500);

        }

        else {

            document
                .getElementById("errorAlert")
                .classList.remove("d-none");

            document
                .getElementById("errorAlert").innerHTML =
                '<i class="fa-solid fa-circle-xmark"></i> ' +
                result.message;

        }

    }

    catch (error) {

        document
            .getElementById("loading")
            .classList.add("d-none");

        document
            .getElementById("errorAlert")
            .classList.remove("d-none");

        document
            .getElementById("errorAlert").innerHTML =
            '<i class="fa-solid fa-circle-xmark"></i> Server connection failed.';

        console.error(error);

    }

}


// Logout

function logout() {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href = "login.html";

}