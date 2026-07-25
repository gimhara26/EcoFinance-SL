async function loadDashboard() {
  try {
    const data = await apiGet("/dashboard");

    document.getElementById("companyName").textContent =
      data.company.company_name;

    document.getElementById("esgScore").textContent = data.statistics.esg;

    document.getElementById("carbonEmission").textContent =
      data.statistics.carbon + " kg";

    document.getElementById("reportCount").textContent =
      data.statistics.reports;
  } catch (error) {
    console.error(error);
  }
}

loadDashboard();
