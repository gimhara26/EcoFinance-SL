import api from "../../assets/js/api.js";
import { initLayout } from "../../assets/js/layout.js";

await initLayout({
  title: "ESG History",

  basePath: "../../",
});

loadHistory();

async function loadHistory() {
  try {
    const response = await api.get("/esg/history");

    if (!response.success) {
      throw new Error("Unable to load ESG history.");
    }

    renderTable(response.data);
  } catch (error) {
    alert(error.message);
  }
}

function renderTable(records) {
  const table = document.getElementById("historyTable");

  table.innerHTML = "";

  records.forEach((record) => {
    table.innerHTML += `

        <tr class="border-b hover:bg-gray-50">

            <td class="p-3">

                ${formatDate(record.created_at)}

            </td>

            <td class="text-center p-3">

                ${record.environmental_score.toFixed(1)}

            </td>

            <td class="text-center p-3">

                ${record.social_score.toFixed(1)}

            </td>

            <td class="text-center p-3">

                ${record.governance_score.toFixed(1)}

            </td>

            <td class="text-center font-semibold p-3">

                ${record.overall_score.toFixed(2)}

            </td>

            <td class="text-center p-3">

                ${badge(record.overall_status)}

            </td>

            <td class="text-center p-3">

                <button
                    class="text-blue-600 hover:underline"
                    onclick="viewAssessment(${record.id})">

                    View

                </button>

            </td>

        </tr>

        `;
  });
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function badge(status) {
  if (status === "Excellent") {
    return `<span class="bg-green-100 text-green-700 px-2 py-1 rounded">${status}</span>`;
  }

  if (status === "Good") {
    return `<span class="bg-blue-100 text-blue-700 px-2 py-1 rounded">${status}</span>`;
  }

  return `<span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">${status}</span>`;
}

function showModal(data) {
  document.getElementById("modalBody").innerHTML = `

        <div class="grid grid-cols-2 gap-5">

            <div>

                <h3 class="font-semibold">Environmental</h3>

                <p>Score : ${data.environmental_score}</p>
                <p>Status : ${data.environmental_status}</p>

            </div>

            <div>

                <h3 class="font-semibold">Social</h3>

                <p>Score : ${data.social_score}</p>
                <p>Status : ${data.social_status}</p>

            </div>

            <div>

                <h3 class="font-semibold">Governance</h3>

                <p>Score : ${data.governance_score}</p>
                <p>Status : ${data.governance_status}</p>

            </div>

            <div>

                <h3 class="font-semibold">Overall</h3>

                <p>Score : ${data.overall_score}</p>
                <p>Status : ${data.overall_status}</p>

            </div>

        </div>

        <hr class="my-5">

        <h3 class="font-semibold mb-2">

            Recommendation

        </h3>

        <p>${data.recommendations}</p>

    `;

  document.getElementById("detailModal").classList.remove("hidden");

  document.getElementById("detailModal").classList.add("flex");
}

window.closeModal = function () {
  document.getElementById("detailModal").classList.remove("flex");

  document.getElementById("detailModal").classList.add("hidden");
};

window.viewAssessment = async function (id) {
  try {
    const response = await api.get(`/esg/${id}`);

    if (!response.success) {
      throw new Error("Unable to load assessment.");
    }

    showModal(response.data);
  } catch (error) {
    alert(error.message);
  }
};
