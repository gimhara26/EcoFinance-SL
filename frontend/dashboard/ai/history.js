import api from "../../assets/js/api.js";
import { initLayout } from "../../assets/js/layout.js";

initLayout({
  title: "AI Reports",
  basePath: "../../",
});

const table = document.getElementById("historyTable");
const btn = document.getElementById("generateBtn");

const totalReports = document.getElementById("totalReports");
const totalTokens = document.getElementById("totalTokens");
const totalCost = document.getElementById("totalCost");
const lastModel = document.getElementById("lastModel");
const emptyState = document.getElementById("emptyState");

async function loadHistory() {
  try {
    const response = await api.get("/ai/history");

    console.log("AI History Response:", response.data); // Log the entire response for debugging

    const reports = response.data;

    table.innerHTML = "";

    if (!reports.length) {
      emptyState.classList.remove("hidden");

      totalReports.textContent = 0;
      totalTokens.textContent = 0;
      totalCost.textContent = "$0.00";
      lastModel.textContent = "-";

      return;
    }

    emptyState.classList.add("hidden");

    let tokenCount = 0;
    let cost = 0;

    reports.forEach((report) => {
      tokenCount += report.total_tokens || 0;
      cost += Number(report.cost || 0);

      table.innerHTML += `

            <tr class="hover:bg-gray-50 transition">

                <td class="px-6 py-4 font-medium">
                    ${report.id}
                </td>

                <td class="px-6 py-4">
                    ${report.model}
                </td>

                <td class="px-6 py-4">

                    <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        ${report.status}
                    </span>

                </td>

                <td class="px-6 py-4">
                    ${report.total_tokens}
                </td>

                <td class="px-6 py-4">
                    $${Number(report.cost).toFixed(4)}
                </td>

                <td class="px-6 py-4">
                    ${new Date(report.created_at).toLocaleString()}
                </td>

                <td class="px-6 py-4 text-center">

                    <button
                        class="view-btn bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                        data-id="${report.id}">

                        View

                    </button>

                </td>

            </tr>

            `;
    });

    totalReports.textContent = reports.length;
    totalTokens.textContent = tokenCount.toLocaleString();
    totalCost.textContent = `$${cost.toFixed(4)}`;
    lastModel.textContent = reports[0].model;
  } catch (error) {
    console.error(error);

    alert(error.response?.data?.message || "Failed to load AI history.");
  }
}

btn.addEventListener("click", async () => {
  btn.disabled = true;

  btn.innerHTML = `
        <svg class="animate-spin h-5 w-5 inline mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">

            <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4">
            </circle>

            <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z">
            </path>

        </svg>

        Generating...
    `;

  try {
    await api.post("/ai/generate");

    await loadHistory();

    alert("AI report generated successfully.");
  } catch (error) {
    alert(error.response?.data?.message || "Failed to generate AI report.");
  }

  btn.disabled = false;
  btn.innerHTML = "Generate AI Report";
});

loadHistory();

const modal = document.getElementById("reportModal");
const reportContent = document.getElementById("reportContent");
const closeModal = document.getElementById("closeModal");

document.addEventListener("click", async (e) => {
  if (!e.target.classList.contains("view-btn")) {
    return;
  }

  const id = e.target.dataset.id;

  try {
    const result = await api.get(`/ai/${id}`);

    reportContent.innerHTML = marked.parse(result.data.report);

    modal.classList.remove("hidden");
    modal.classList.add("flex");
  } catch (error) {
    alert(error.message);
  }
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
});
