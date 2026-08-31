const API = "/api/reports";

const token = localStorage.getItem("token");

document.addEventListener("DOMContentLoaded", () => {
  loadReports();

  document
    .getElementById("generateBtn")
    .addEventListener("click", generateReport);
});

async function loadReports() {
  const response = await fetch(API, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) return;

  const reports = await response.json();

  const table = document.getElementById("reportTable");

  table.innerHTML = "";

  reports.forEach((report) => {
    table.innerHTML += `
            <tr class="border-b hover:bg-gray-50">

                <td class="p-3">${report.report_name}</td>

                <td class="p-3">${report.report_type}</td>

                <td class="p-3">
                    ${report.reporting_month}/${report.reporting_year}
                </td>

                <td class="p-3">
                    ${report.generated_at}
                </td>

                <td class="text-center p-3">

                    <button
                        onclick="viewReport(${report.id})"
                        class="text-blue-600">

                        View

                    </button>

                    |

                    <button
                        onclick="downloadReport(${report.id})"
                        class="text-emerald-600">

                        Download

                    </button>

                </td>

            </tr>
        `;
  });
}

async function generateReport() {
  const response = await fetch(API + "/generate", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",

      Authorization: "Bearer " + token,
    },

    body: JSON.stringify({
      reporting_year: reportYear.value,

      reporting_month: reportMonth.value,

      report_type: reportType.value,
    }),
  });

  if (response.ok) {
    alert("Report generated successfully.");

    loadReports();
  }
}

function viewReport(id) {
  window.location = `report-view.html?id=${id}`;
}

function downloadReport(id) {
  window.open(API + "/download/" + id, "_blank");
}
