import api from "../../assets/js/api.js";
import { initLayout } from "../../assets/js/layout.js";
import { CONFIG } from "../../assets/js/config.js";

await initLayout({
  title: "Report History",

  basePath: "../../",
});

const table = document.getElementById("reportTable");

const modal = document.getElementById("reportModal");

const reportContent = document.getElementById("reportContent");

document.getElementById("closeModal").addEventListener("click", closeModal);

loadReports();

async function loadReports() {
  try {
    const response = await api.get("/reports/");

    if (!response.success) {
      throw new Error("Unable to load reports.");
    }

    renderTable(response.data);
  } catch (error) {
    alert(error.message);
  }
}

function renderTable(reports) {
  table.innerHTML = "";

  reports.forEach((report) => {
    table.innerHTML += `

        <tr>

            <td>

                ${formatDate(report.generated_at)}

            </td>

            <td>

                ${report.title}

            </td>

            <td>

                ${report.type}

            </td>

            <td>

                <span class="status status-generated">

                    ${report.status}

                </span>

            </td>

            <td class="text-center">

                <button
                    class="action-btn"
                    onclick="viewReport(${report.id})">

                    View

                </button>

                <button
                    class="action-btn"
                    onclick="downloadReport(${report.id})">

                    Download

                </button>

            </td>

        </tr>

        `;
  });
}

function formatDate(date) {
  return new Date(date).toLocaleString();
}

window.viewReport = async function (id) {
  try {
    const response = await api.get(`/reports/${id}`);

    if (!response.success) {
      throw new Error("Unable to load report.");
    }

    reportContent.textContent = response.data.content;

    modal.classList.remove("hidden");

    modal.classList.add("flex");
  } catch (error) {
    alert(error.message);
  }
};

window.downloadReport = async function (id) {
  try {
    const response = await fetch(`${CONFIG.API_URL}/reports/download/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(CONFIG.TOKEN_KEY)}`,
      },
    });

    if (!response.ok) {
      throw new Error("Download failed");
    }

    const blob = await response.blob();

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = `report-${id}.pdf`;

    document.body.appendChild(a);

    a.click();

    a.remove();

    URL.revokeObjectURL(url);
  } catch (err) {
    alert(err.message);
  }
};

function closeModal() {
  modal.classList.remove("flex");

  modal.classList.add("hidden");
}
