// Profile

const API_URL = "/api/profile";

const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {

    loadProfile();

});

// Load Profile

async function loadProfile() {

    try {

        const response = await fetch(API_URL + "/", {

            headers: {
                "Authorization": "Bearer " + token
            }

        });

        const result = await response.json();

        if (result.success) {

            const user = result.user;

            document.getElementById("username").innerText = user.full_name;
            document.getElementById("full_name").value = user.full_name;
            document.getElementById("email").value = user.email;

        }

    }

    catch (error) {

        console.error(error);

    }

}

// Update Profile

async function updateProfile() {

    const data = {

        full_name: document.getElementById("full_name").value,
        password: document.getElementById("password").value

    };

    try {

        const response = await fetch(API_URL + "/", {

            method: "PUT",

            headers: {

                "Content-Type": "application/json",
                "Authorization": "Bearer " + token

            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        if (result.success) {

            showMessage(result.message, "success");

            let user = JSON.parse(localStorage.getItem("user"));

            user.full_name = data.full_name;

            localStorage.setItem("user", JSON.stringify(user));

            document.getElementById("username").innerText = data.full_name;

            document.getElementById("password").value = "";

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

    document.getElementById("message").innerHTML =

        `<div class="alert alert-${type}">
            ${message}
        </div>`;

}