const API_URL = "http://127.0.0.1:5000/api";

// Load Dashboard

async function loadDashboard() {

    const token = localStorage.getItem("token");

    // Check login
    if (!token) {
        window.location.href = "../login.html";
        return;
    }

    try {

        console.log("Loading dashboard...");

        const response = await fetch(
            `${API_URL}/dashboard/`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
        );


        // Handle HTTP errors

        if (!response.ok) {

            if (response.status === 401) {

                console.error("Authentication failed.");

                localStorage.removeItem("token");
                localStorage.removeItem("user");

                window.location.href = "../login.html";

                return;
            }

            throw new Error(
                `HTTP Error: ${response.status}`
            );
        }


        const result = await response.json();

        console.log("Dashboard API Response:", result);


        // Check API success

        if (!result.success) {

            throw new Error(
                result.message || "Dashboard request failed"
            );
        }


        const data = result.data;

        console.log("Dashboard Data:", data);


        // Company

        const companyName =
            document.getElementById("companyName");

        if (companyName) {

            companyName.textContent =
                data.company_name || "No Company";

        }


        // ESG Score

        const esgScore =
            document.getElementById("esgScore");

        if (esgScore) {

            esgScore.textContent =
                Number(
                    data.average_esg_score || 0
                ).toFixed(1);

        }


        // Carbon Emission

        const carbonEmission =
            document.getElementById("carbonEmission");

        if (carbonEmission) {

            carbonEmission.textContent =
                Number(
                    data.total_emission || 0
                ).toFixed(2) + " kg";

        }


  
        // Reports


        const reportCount =
            document.getElementById("reportCount");

        if (reportCount) {

            reportCount.textContent =
                data.total_reports || 0;

        }


    
        // Header Company Name

        const headerCompanyName =
            document.getElementById(
                "headerCompanyName"
            );

        if (headerCompanyName) {

            headerCompanyName.textContent =
                data.company_name ||
                "Company Account";

        }


        // User Initial==

        const userInitial =
            document.getElementById(
                "userInitial"
            );

        const storedUser =
            localStorage.getItem("user");


        if (userInitial && storedUser) {

            try {

                const user =
                    JSON.parse(storedUser);


                const name =
                    user.full_name ||
                    user.name ||
                    user.username ||
                    user.email ||
                    "";


                if (name) {

                    userInitial.textContent =
                        name.charAt(0).toUpperCase();

                }

            } catch (error) {

                console.error(
                    "Unable to read stored user:",
                    error
                );

            }

        }


    
        // Charts

        await loadCharts(token);


        // Recent Activity

        await loadRecentActivity(token);


    } catch (error) {

        console.error(
            "Dashboard loading failed:",
            error
        );


        const errorBox =
            document.getElementById(
                "dashboardError"
            );


        if (errorBox) {

            errorBox.textContent =
                "Unable to load dashboard data. Please check that the Flask server is running.";

            errorBox.classList.remove("hidden");

        }


        const companyName =
            document.getElementById("companyName");

        if (companyName) {
            companyName.textContent =
                "Unable to load";
        }


        const esgScore =
            document.getElementById("esgScore");

        if (esgScore) {
            esgScore.textContent = "0";
        }


        const carbonEmission =
            document.getElementById(
                "carbonEmission"
            );

        if (carbonEmission) {
            carbonEmission.textContent = "0 kg";
        }


        const reportCount =
            document.getElementById(
                "reportCount"
            );

        if (reportCount) {
            reportCount.textContent = "0";
        }

    }

}


// Load Charts

async function loadCharts(token) {

    try {

        

        const carbonResponse =
            await fetch(
                `${API_URL}/carbon/`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type":
                            "application/json",
                        "Authorization":
                            `Bearer ${token}`
                    }
                }
            );


        let carbonData = [];

        if (carbonResponse.ok) {

            const carbonResult =
                await carbonResponse.json();

            console.log(
                "Carbon API:",
                carbonResult
            );


            if (carbonResult.success) {

                carbonData =
                    carbonResult.data || [];

            }

        }



        const esgResponse =
            await fetch(
                `${API_URL}/esg/`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type":
                            "application/json",
                        "Authorization":
                            `Bearer ${token}`
                    }
                }
            );


        let esgData = [];

        if (esgResponse.ok) {

            const esgResult =
                await esgResponse.json();

            console.log(
                "ESG API:",
                esgResult
            );


            if (esgResult.success) {

                esgData =
                    esgResult.data || [];

            }

        }


        createCarbonChart(carbonData);

        createESGChart(esgData);


    } catch (error) {

        console.error(
            "Chart loading failed:",
            error
        );

    }

}

// Carbon Chart


function createCarbonChart(records) {

    const canvas =
        document.getElementById(
            "carbonChart"
        );


    if (!canvas) {
        return;
    }


    const labels = records.map(
        item => {

            const date =
                item.created_at ||
                item.date ||
                item.recorded_at;

            if (!date) {
                return "";
            }

            return new Date(date)
                .toLocaleDateString();

        }
    );


    const values = records.map(
        item =>
            Number(
                item.total_emission ||
                item.emission ||
                item.carbon_emission ||
                0
            )
    );


    new Chart(
        canvas,
        {
            type: "line",

            data: {
                labels: labels,

                datasets: [
                    {
                        label:
                            "Carbon Emission (kg)",

                        data: values,

                        borderWidth: 2,

                        tension: 0.3,

                        fill: false
                    }
                ]
            },

            options: {
                responsive: true,

                maintainAspectRatio: false,

                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    );

}



// ESG Chart

function createESGChart(records) {

    const canvas =
        document.getElementById(
            "esgChart"
        );


    if (!canvas) {
        return;
    }


    const labels = records.map(
        item => {

            const date =
                item.created_at ||
                item.date ||
                item.recorded_at;

            if (!date) {
                return "";
            }

            return new Date(date)
                .toLocaleDateString();

        }
    );


    const values = records.map(
        item =>
            Number(
                item.score ||
                item.esg_score ||
                item.average_score ||
                0
            )
    );


    new Chart(
        canvas,
        {
            type: "line",

            data: {
                labels: labels,

                datasets: [
                    {
                        label:
                            "ESG Score",

                        data: values,

                        borderWidth: 2,

                        tension: 0.3,

                        fill: false
                    }
                ]
            },

            options: {
                responsive: true,

                maintainAspectRatio: false,

                scales: {
                    y: {
                        beginAtZero: true,

                        max: 100
                    }
                }
            }
        }
    );

}


// Recent Activity

async function loadRecentActivity(token) {

    const table =
        document.getElementById(
            "activityTable"
        );


    if (!table) {
        return;
    }


    try {

   

        const response =
            await fetch(
                `${API_URL}/carbon/`,
                {
                    method: "GET",

                    headers: {
                        "Content-Type":
                            "application/json",

                        "Authorization":
                            `Bearer ${token}`
                    }
                }
            );


        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );

        }


        const result =
            await response.json();


        const records =
            result.data || [];


        if (!records.length) {

            table.innerHTML = `
                <tr>
                    <td
                        colspan="3"
                        class="text-center py-8 text-gray-400"
                    >
                        No recent activity
                    </td>
                </tr>
            `;

            return;
        }



        const latest =
            records.slice(0, 5);


        table.innerHTML =
            latest.map(
                item => {

                    const dateValue =
                        item.created_at ||
                        item.date ||
                        item.recorded_at;


                    const date =
                        dateValue
                            ? new Date(
                                dateValue
                              ).toLocaleDateString(
                                "en-GB",
                                {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric"
                                }
                              )
                            : "-";


                    return `
                        <tr class="border-b">

                            <td class="py-3">
                                ${date}
                            </td>

                            <td>
                                Business Data Submitted
                            </td>

                            <td>

                                <span
                                    class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                                >
                                    Completed
                                </span>

                            </td>

                        </tr>
                    `;

                }
            ).join("");


        const activityStatus =
            document.getElementById(
                "activityStatus"
            );


        if (activityStatus) {

            activityStatus.textContent =
                `${latest.length} recent record(s)`;

        }


    } catch (error) {

        console.error(
            "Activity loading failed:",
            error
        );


        table.innerHTML = `
            <tr>
                <td
                    colspan="3"
                    class="text-center py-8 text-gray-400"
                >
                    Unable to load activity
                </td>
            </tr>
        `;

    }

}


// Start Dashboard

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadDashboard();

    }
);
