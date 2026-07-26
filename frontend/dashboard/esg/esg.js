import api from "../../assets/js/api.js";
import { initLayout } from "../../assets/js/layout.js";

await initLayout({
  title: "ESG Assessment",

  basePath: "../../",
});

const btn = document.getElementById("generateBtn");

btn.addEventListener("click", generateESG);

async function generateESG() {
  const payload = {
    renewable_energy: Number(
      document.getElementById("renewable_energy").value || 0,
    ),

    water_consumption: Number(
      document.getElementById("water_consumption").value || 0,
    ),

    recycling_rate: Number(
      document.getElementById("recycling_rate").value || 0,
    ),

    environmental_policy: document.getElementById("environmental_policy")
      .checked,

    employee_satisfaction: Number(
      document.getElementById("employee_satisfaction").value || 0,
    ),

    training_hours: Number(
      document.getElementById("training_hours").value || 0,
    ),

    gender_diversity: Number(
      document.getElementById("gender_diversity").value || 0,
    ),

    community_projects: document.getElementById("community_projects").checked,

    board_meetings: Number(
      document.getElementById("board_meetings").value || 0,
    ),

    ethics_policy: document.getElementById("ethics_policy").checked,

    compliance: document.getElementById("compliance").checked,

    risk_management: document.getElementById("risk_management").checked,
  };

  try {
    btn.disabled = true;

    btn.textContent = "Generating...";

    const response = await api.post("/esg", payload);

    if (!response.success) {
      throw new Error(response.message);
    }

    const result = response.data;

    document.getElementById("overall_score").textContent =
      result.overall_score.toFixed(2);

    document.getElementById("overall_status").textContent =
      result.overall_status;

    document.getElementById("environment_score").textContent =
      `${result.environmental_score} (${result.environmental_status})`;

    document.getElementById("social_score").textContent =
      `${result.social_score} (${result.social_status})`;

    document.getElementById("governance_score").textContent =
      `${result.governance_score} (${result.governance_status})`;

    document.getElementById("recommendation").textContent =
      result.recommendations;
  } catch (error) {
    alert(error.message);
  } finally {
    btn.disabled = false;

    btn.textContent = "Generate ESG Score";
  }
}
