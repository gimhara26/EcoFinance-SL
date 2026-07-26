import api from "../../assets/js/api.js";
import { initLayout } from "../../assets/js/layout.js";

await initLayout({
  title: "Company",

  basePath: "../../",
});

loadCompany();

document.getElementById("companyForm").addEventListener("submit", saveCompany);

async function loadCompany() {
  const response = await api.get("/company/");

  if (!response.success) {
    throw new Error("Unable to load company.");
  }

  const company = response.company;

  company_name.value = company.company_name || "";

  registration_no.value = company.registration_no || "";

  business_sector.value = company.business_sector || "";

  website.value = company.website || "";

  contact_no.value = company.contact_no || "";

  province.value = company.province || "";

  district.value = company.district || "";

  address.value = company.address || "";
}

async function saveCompany(e) {
  e.preventDefault();

  const body = {
    company_name: company_name.value,

    registration_no: registration_no.value,

    business_sector: business_sector.value,

    website: website.value,

    contact_no: contact_no.value,

    province: province.value,

    district: district.value,

    address: address.value,
  };

  const response = await api.put("/company/", body);

  alert(response.message);
}
