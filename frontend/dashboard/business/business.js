import api from "../../assets/js/api.js";
import { initLayout } from "../../assets/js/layout.js";

await initLayout({
  title: "Business Data",
  basePath: "../../",
});

const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", saveBusinessData);

setDefaultValues();

function setDefaultValues() {
  const today = new Date();

  document.getElementById("reporting_year").value = today.getFullYear();

  document.getElementById("reporting_month").value = today.getMonth() + 1;
}

function getFormData() {
  return {
    reporting_year: Number(document.getElementById("reporting_year").value),

    reporting_month: Number(document.getElementById("reporting_month").value),

    grid_electricity_kwh: Number(
      document.getElementById("grid_electricity_kwh").value || 0,
    ),

    renewable_electricity_kwh: Number(
      document.getElementById("renewable_electricity_kwh").value || 0,
    ),

    diesel_liters: Number(document.getElementById("diesel_liters").value || 0),

    petrol_liters: Number(document.getElementById("petrol_liters").value || 0),

    lpg_kg: Number(document.getElementById("lpg_kg").value || 0),

    natural_gas_m3: Number(
      document.getElementById("natural_gas_m3").value || 0,
    ),

    business_travel_km: Number(
      document.getElementById("business_travel_km").value || 0,
    ),

    employee_travel_km: Number(
      document.getElementById("employee_travel_km").value || 0,
    ),

    freight_transport_km: Number(
      document.getElementById("freight_transport_km").value || 0,
    ),

    general_waste_kg: Number(
      document.getElementById("general_waste_kg").value || 0,
    ),

    recycled_waste_kg: Number(
      document.getElementById("recycled_waste_kg").value || 0,
    ),

    hazardous_waste_kg: Number(
      document.getElementById("hazardous_waste_kg").value || 0,
    ),
  };
}

function validate(data) {
  if (!data.reporting_year) {
    alert("Reporting year is required.");

    return false;
  }

  if (!data.reporting_month) {
    alert("Reporting month is required.");

    return false;
  }

  return true;
}

async function saveBusinessData() {
  const data = getFormData();

  if (!validate(data)) return;

  try {
    saveBtn.disabled = true;

    saveBtn.textContent = "Saving...";

    const response = await api.post("/business/", data);

    if (!response.success) {
      throw new Error(response.message);
    }

    alert("Business data saved successfully.");

    updateSummary(response.data);
  } catch (error) {
    alert(error.message);
  } finally {
    saveBtn.disabled = false;

    saveBtn.textContent = "Save Business Data";
  }
}

function updateSummary(data) {
  document.getElementById("totalCarbon").textContent = Number(
    data.total_carbon,
  ).toFixed(2);
}
