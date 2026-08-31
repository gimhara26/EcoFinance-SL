console.log("NEW BUSINESS JS LOADED");

const API_BASE_URL =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
        ? "http://127.0.0.1:5000/api"
        : "https://www.ecofinancesl.online/api";

const API = `${API_BASE_URL}/carbon/`;

console.log("Frontend:", window.location.origin);
console.log("API:", API);


document.addEventListener("DOMContentLoaded", () => {

    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "/login.html";
        return;
    }

    const calculateBtn =
        document.getElementById("calculateBtn");

    const saveBtn =
        document.getElementById("saveBtn");

    if (calculateBtn) {
        calculateBtn.addEventListener(
            "click",
            calculateCarbon
        );
    }

    if (saveBtn) {
        saveBtn.addEventListener(
            "click",
            saveBusinessData
        );
    }

});


function numberValue(id) {

    const element =
        document.getElementById(id);

    const value =
        Number(element?.value || 0);

    if (
        Number.isFinite(value) &&
        value >= 0
    ) {
        return value;
    }

    return 0;

}


function getFormData() {

    return {

        reporting_year:
            Number(
                document.getElementById(
                    "reportingYear"
                )?.value ||
                new Date().getFullYear()
            ),

        reporting_month:
            Number(
                document.getElementById(
                    "reportingMonth"
                )?.value ||
                new Date().getMonth() + 1
            ),

        electricity_kwh:
            numberValue("electricity"),

        fuel_liters:
            numberValue("fuel"),

        transport_distance:
            numberValue("transport"),

        waste_kg:
            numberValue("waste")

    };

}


async function getResponseData(response) {

    const text =
        await response.text();

    console.log(
        "Server response:",
        text
    );

    try {

        return JSON.parse(text);

    } catch (error) {

        throw new Error(
            `Server returned non-JSON response. HTTP ${response.status}`
        );

    }

}


async function calculateCarbon() {

    const token =
        localStorage.getItem("token");

    if (!token) {

        window.location.href =
            "/login.html";

        return;

    }


    const url =
        `${API_BASE_URL}/carbon/calculate`;


    console.log(
        "CALCULATE REQUEST:",
        url
    );


    try {

        const response =
            await fetch(
                url,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",

                        "Authorization":
                            `Bearer ${token}`
                    },

                    body:
                        JSON.stringify(
                            getFormData()
                        )
                }
            );


        console.log(
            "CALCULATE STATUS:",
            response.status
        );


        const result =
            await getResponseData(
                response
            );


        console.log(
            "CALCULATE RESULT:",
            result
        );


        if (
            !response.ok ||
            !result.success
        ) {

            throw new Error(
                result.message ||
                result.detail ||
                "Unable to calculate carbon."
            );

        }


        const totalEmission =
            Number(
                result.data?.total_emission ||
                0
            );


        document
            .getElementById(
                "resultCard"
            )
            ?.classList
            .remove("hidden");


        document.getElementById(
            "totalEmission"
        ).textContent =
            totalEmission.toFixed(2) +
            " kg CO₂";


    } catch (error) {

        console.error(
            "CALCULATE ERROR:",
            error
        );

        alert(
            error.message ||
            "Server connection failed."
        );

    }

}


async function saveBusinessData() {

    const token =
        localStorage.getItem("token");

    if (!token) {

        window.location.href =
            "/login.html";

        return;

    }


    console.log(
        "SAVE REQUEST:",
        API
    );


    try {

        const response =
            await fetch(
                API,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",

                        "Authorization":
                            `Bearer ${token}`
                    },

                    body:
                        JSON.stringify(
                            getFormData()
                        )
                }
            );


        console.log(
            "SAVE STATUS:",
            response.status
        );


        const result =
            await getResponseData(
                response
            );


        console.log(
            "SAVE RESULT:",
            result
        );


        if (
            !response.ok ||
            !result.success
        ) {

            throw new Error(
                result.message ||
                result.detail ||
                "Unable to save business data."
            );

        }


        const totalEmission =
            Number(
                result.data?.total_emission ||
                0
            );


        document
            .getElementById(
                "resultCard"
            )
            ?.classList
            .remove("hidden");


        document.getElementById(
            "totalEmission"
        ).textContent =
            totalEmission.toFixed(2) +
            " kg CO₂";


        alert(
            result.message ||
            "Business data saved successfully."
        );


    } catch (error) {

        console.error(
            "SAVE ERROR:",
            error
        );

        alert(
            error.message ||
            "Server connection failed."
        );

    }

}
