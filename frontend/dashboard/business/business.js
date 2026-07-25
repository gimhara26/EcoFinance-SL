const API = "http://localhost:5000/api/company/business-input";

const token = localStorage.getItem("token");

document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateCarbon);

document.getElementById("saveBtn").addEventListener("click", saveBusinessData);

async function calculateCarbon() {
  const body = getFormData();

  const response = await fetch("http://localhost:5000/api/carbon/calculate", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",

      Authorization: "Bearer " + token,
    },

    body: JSON.stringify(body),
  });

  const result = await response.json();

  document.getElementById("resultCard").classList.remove("hidden");

  document.getElementById("totalEmission").innerHTML =
    result.total_emission + " kg CO₂";
}

async function saveBusinessData() {
  const response = await fetch(API, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",

      Authorization: "Bearer " + token,
    },

    body: JSON.stringify(getFormData()),
  });

  if (response.ok) {
    alert("Business data saved successfully.");
  } else {
    alert("Unable to save business data.");
  }
}

function getFormData() {
  return {
    reporting_year: reportingYear.value,

    reporting_month: reportingMonth.value,

    electricity_kwh: electricity.value,

    fuel_liters: fuel.value,

    transport_distance: transport.value,

    waste_kg: waste.value,
  };
}
