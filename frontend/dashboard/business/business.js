const API =
  `${window.location.origin}/api/carbon/`;

const token =
  localStorage.getItem("token");


document.addEventListener(
  "DOMContentLoaded",
  () => {

    if (!token) {

      window.location.href =
        "/login.html";

      return;
    }

    document
      .getElementById("calculateBtn")
      ?.addEventListener(
        "click",
        calculateCarbon
      );

    document
      .getElementById("saveBtn")
      ?.addEventListener(
        "click",
        saveBusinessData
      );

  }
);


function numberValue(id) {

  const value =
    Number(
      document
        .getElementById(id)
        ?.value || 0
    );

  return Number.isFinite(value) &&
    value >= 0
    ? value
    : 0;
}


function getFormData() {

  return {

    reporting_year:
      Number(
        document
          .getElementById("reportingYear")
          ?.value ||
        new Date().getFullYear()
      ),

    reporting_month:
      Number(
        document
          .getElementById("reportingMonth")
          ?.value ||
        new Date().getMonth() + 1
      ),

    electricity_kwh:
      numberValue("electricity"),

    fuel_liters:
      numberValue("fuel"),

    transport_distance:
      numberValue("transport"),

    waste_kg:
      numberValue("waste"),

  };
}


async function calculateCarbon() {

  try {

    const response =
      await fetch(
        `${window.location.origin}/api/carbon/calculate`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              "Bearer " + token,
          },

          body:
            JSON.stringify(
              getFormData()
            ),
        }
      );


    const result =
      await response.json();


    if (
      !response.ok ||
      !result.success
    ) {

      throw new Error(
        result.message ||
        "Unable to calculate carbon."
      );

    }


    document
      .getElementById(
        "resultCard"
      )
      ?.classList
      .remove("hidden");


    document
      .getElementById(
        "totalEmission"
      )
      .textContent =
      Number(
        result.data.total_emission || 0
      ).toFixed(2)
      + " kg CO₂";


  } catch (error) {

    console.error(
      "Carbon calculation error:",
      error
    );

    alert(
      error.message ||
      "Server connection failed."
    );

  }

}


async function saveBusinessData() {

  try {

    const response =
      await fetch(
        API,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              "Bearer " + token,
          },

          body:
            JSON.stringify(
              getFormData()
            ),
        }
      );


    const result =
      await response.json();


    if (
      !response.ok ||
      !result.success
    ) {

      throw new Error(
        result.message ||
        "Unable to save business data."
      );

    }


    document
      .getElementById(
        "resultCard"
      )
      ?.classList
      .remove("hidden");


    document
      .getElementById(
        "totalEmission"
      )
      .textContent =
      Number(
        result.data.total_emission || 0
      ).toFixed(2)
      + " kg CO₂";


    alert(
      result.message ||
      "Business data saved successfully."
    );


  } catch (error) {

    console.error(
      "Business data error:",
      error
    );

    alert(
      error.message ||
      "Server connection failed."
    );

  }

}