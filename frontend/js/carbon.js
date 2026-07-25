// Carbon Input

const API_URL = "http://127.0.0.1:5000/api/carbon";

const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

// Page Load

document.addEventListener("DOMContentLoaded", () => {

    checkLogin();

    loadUser();

});

// Load Logged User

function loadUser() {

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {

        document.getElementById("username").innerText = user.full_name;

    }

}

// Save Carbon Data

async function saveCarbonData() {

    const electricity_kwh =
        Number(document.getElementById("electricity_kwh").value) || 0;

    const fuel_liters =
        Number(document.getElementById("fuel_liters").value) || 0;

    const transport_distance =
        Number(document.getElementById("transport_distance").value) || 0;

    const waste_kg =
        Number(document.getElementById("waste_kg").value) || 0;

    if (
        electricity_kwh <= 0 &&
        fuel_liters <= 0 &&
        transport_distance <= 0 &&
        waste_kg <= 0
    ) {

        showMessage(
            "Please enter at least one value.",
            "danger"
        );

        return;

    }

    const data = {

        electricity_kwh,
        fuel_liters,
        transport_distance,
        waste_kg

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

        if (result.success) {

            document.getElementById("resultArea").style.display = "block";

            document.getElementById("totalEmission").innerHTML =
                result.data.total_emission.toFixed(2) + " kg CO₂";

            showMessage(result.message, "success");

            clearForm();

        } else {

            showMessage(result.message, "danger");

        }

    }

    catch (error) {

        console.error(error);

        showMessage(
            "Unable to connect to the server.",
            "danger"
        );

    }

}

// Clear Form

function clearForm() {

    document.getElementById("electricity_kwh").value = "";

    document.getElementById("fuel_liters").value = "";

    document.getElementById("transport_distance").value = "";

    document.getElementById("waste_kg").value = "";

}

// Message

function showMessage(message, type) {

    const messageBox = document.getElementById("message");

    messageBox.innerHTML = `

        <div class="alert alert-${type}">

            ${message}

        </div>

    `;

}