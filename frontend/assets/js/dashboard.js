import api from "./api.js";
import auth from "./auth.js";
import { initLayout } from "./layout.js";

let carbonChart = null;
let esgChart = null;

initLayout({
  title: "Dashboard",

  basePath: "../",
});

const user = auth.getUser();

document.getElementById("userName").textContent = user.full_name;

loadDashboard();

async function loadDashboard() {
  try {
    const response = await api.get("/dashboard/");

    if (!response.success) {
      throw new Error("Unable to load dashboard");
    }

    const data = response.data;

    console.log(data);

    document.getElementById("companyName").textContent =
      data.company_name ?? "-";

    document.getElementById("esgScore").textContent = data.average_esg_score;

    document.getElementById("carbonEmission").textContent =
      Number(data.total_emission).toFixed(2) + " tCO₂e";

    document.getElementById("reportCount").textContent = data.total_reports;

    loadCharts(data);
  } catch (error) {
    console.error(error);
  }
}

function loadCharts(data) {
  if (carbonChart) {
    carbonChart.destroy();
  }

  if (esgChart) {
    esgChart.destroy();
  }

  carbonChart = new Chart(document.getElementById("carbonChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Carbon Emission (tCO₂e)",
          data: [
            data.total_emission,
            data.total_emission,
            data.total_emission,
            data.total_emission,
            data.total_emission,
            data.total_emission,
          ],
          borderColor: "#ef4444",
          backgroundColor: "rgba(239,68,68,.15)",
          fill: true,
          tension: 0.4,
        },
      ],
    },
  });

  const esg = data.average_esg_score;

  esgChart = new Chart(document.getElementById("esgChart"), {
    type: "doughnut",
    data: {
      labels: ["ESG Score", "Remaining"],
      datasets: [
        {
          data: [esg, 100 - esg],
          backgroundColor: ["#10b981", "#e5e7eb"],
        },
      ],
    },
    options: {
      cutout: "70%",
    },
  });
}
