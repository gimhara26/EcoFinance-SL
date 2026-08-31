// ESG Dashboard

const API_URL = "/api/esg/latest";

const token = localStorage.getItem("token");

let esgChartInstance = null;

if (!token) {
    window.location.href = "login.html";
}


//INIT

document.addEventListener("DOMContentLoaded", () => {

    checkLogin();
    loadUser();
    loadESG();

});

//Login Check

function checkLogin() {

    if (!token) {
        window.location.href = "login.html";
    }
}

// Load User

function loadUser() {

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        document.getElementById("username").innerText = user.full_name;
    }

}

// Load ESG Data

async function loadESG() {

    try {

        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        const result = await response.json();

        if (!result.success) {
            return;
        }

        const data = result.data;
        console.log(data);

        //Last Updated

        document.getElementById("lastUpdated").innerText = new Date().toLocaleString();

        //Score Cards (Animated)

        animateValue("envScore", 0, data.environmental_score || 0, 1200);
        animateValue("socialScore", 0, data.social_score || 0, 1200);
        animateValue("govScore", 0, data.governance_score || 0, 1200);
        animateValue("overallScore", 0, data.overall_score || 0, 1200);

        //Progress Bars (Animated)

        animateProgressBar("envBar", data.environmental_score);
        animateProgressBar("socialBar", data.social_score);
        animateProgressBar("govBar", data.governance_score);


        //Status Badges 

        document.getElementById("envStatus").innerHTML =
            `<span class="badge bg-success">${data.environmental_status}</span>`;

        document.getElementById("socialStatus").innerHTML =
            `<span class="badge bg-primary">${data.social_status}</span>`;

        document.getElementById("govStatus").innerHTML =
            `<span class="badge bg-warning text-dark">${data.governance_status}</span>`;

        document.getElementById("overallStatus").innerHTML =
            `<span class="badge bg-dark">
                ${data.overall_score} (${data.overall_status})
            </span>`;


        //Chart

        drawESGChart(data);

            document.getElementById("envRemark").innerText = data.environmental_remark;
            document.getElementById("socialRemark").innerText = data.social_remark;
            document.getElementById("govRemark").innerText = data.governance_remark;
            document.getElementById("overallRemark").innerText = data.overall_remark;
            document.getElementById("recommendations").innerText = data.recommendations;
    
    }

    catch (error) {
        console.error(error);
    
    }
}


//Animation Counter

function animateValue(id, start, end, duration) {

    const el = document.getElementById(id);

    let range = end - start;
    let current = start;
    let increment = range / (duration / 16);

    const step = () => {
        current += increment;

        if (current >= end) {
            current = end;
        }

        el.innerText = Math.floor(current);

        if (current < end) {
            requestAnimationFrame(step);
        }
    };

    step();

}


//Progress Bar Animation

function animateProgressBar(id, value) {

    const bar = document.getElementById(id);

    setTimeout(() => {
        bar.style.width = (value || 0) + "%";
    }, 100);

}




//Chart

function drawESGChart(data) {

    if (esgChartInstance) {
        esgChartInstance.destroy();
    }

    const ctx = document.getElementById("esgChart").getContext("2d");

    esgChartInstance = new Chart(ctx, {

        type: "doughnut",

        data: {

            labels: ["Environmental", "Social", "Governance"],

            datasets: [{

                data: [
                    data.environmental_score || 0,
                    data.social_score || 0,
                    data.governance_score || 0
                ],

                backgroundColor: [
                    "#198754",
                    "#0d6efd",
                    "#fd7e14"
                ],

                borderWidth: 2

            }]

        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    position: "bottom"
                }
            }
        }

    });

}

//Logout

function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "login.html";
}