import api from "../../assets/js/api.js";
import { initLayout } from "../../assets/js/layout.js";

await initLayout({
  title: "Generate Report",

  basePath: "../../",
});

loadSummary();

document

  .getElementById("generateBtn")

  .addEventListener("click", generateReport);

async function loadSummary() {
  const [company, business, esg] = await Promise.all([
    api.get("/company/"),

    api.get("/business/"),

    api.get("/esg/latest"),
  ]);

  const latestBusiness = business.data[0];

  const score = esg.data;

  document.getElementById("summary").innerHTML = `

        <div class="card">

            <h3 class="font-bold mb-3">

                Company

            </h3>

            <p>${company.company.company_name}</p>

            <p>${company.company.business_sector}</p>

        </div>

        <div class="card">

            <h3 class="font-bold mb-3">

                Reporting Period

            </h3>

            <p>

                ${latestBusiness.reporting_month}/${latestBusiness.reporting_year}

            </p>

            <p>

                Carbon : ${latestBusiness.total_carbon}

            </p>

        </div>

        <div class="card">

            <h3 class="font-bold mb-3">

                ESG Score

            </h3>

            <h1 class="text-4xl font-bold">

                ${score.overall_score}

            </h1>

            <p>

                ${score.overall_status}

            </p>

        </div>

    `;
}

async function generateReport() {
  try {
    const response = await api.post("/reports/", {});

    if (!response.success) {
      throw new Error(response.message);
    }

    alert("Report Generated");

    window.location.href = "history.html";
  } catch (error) {
    alert(error.message);
  }
}
