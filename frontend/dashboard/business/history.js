import api from "../../assets/js/api.js";
import { initLayout } from "../../assets/js/layout.js";

await initLayout({
  title: "Business History",

  basePath: "../../",
});

loadHistory();

async function loadHistory() {
  try {
    const response = await api.get("/business/");

    if (!response.success) {
      throw new Error("Unable to load records.");
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

                ${record.reporting_year}

            </td>

            <td class="p-3">

                ${monthName(record.reporting_month)}

            </td>

            <td class="text-right p-3">

                ${record.grid_electricity_kwh}

            </td>

            <td class="text-right p-3">

                ${record.diesel_liters}

            </td>

            <td class="text-right p-3 font-semibold">

                ${record.total_carbon.toFixed(2)}

            </td>

            <td class="text-center p-3">

                <button
                    class="text-blue-600 hover:underline"
                    onclick="viewRecord(${record.id})">

                    View

                </button>

            </td>

        </tr>

        `;
  });
}

function monthName(month) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[month - 1];
}

window.viewRecord = function (id) {
  alert("Record ID : " + id);
};
