const API = `${window.location.origin}/api/company/`;

document.addEventListener("DOMContentLoaded", () => {
  loadCompany();
});

async function loadCompany() {
  try {
    const response = await fetch(API, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const company = await response.json();

    company_name.value = company.company_name || "";
    registration_no.value = company.registration_no || "";
    business_sector.value = company.business_sector || "";
    website.value = company.website || "";
    address.value = company.address || "";
    province.value = company.province || "";
    district.value = company.district || "";
    contact_no.value = company.contact_no || "";
    email.value = company.email || "";
  } catch (e) {
    console.log(e);
  }
}

saveBtn.addEventListener("click", updateCompany);

async function updateCompany() {
  const body = {
    company_name: company_name.value,
    registration_no: registration_no.value,
    business_sector: business_sector.value,
    website: website.value,
    address: address.value,
    province: province.value,
    district: district.value,
    contact_no: contact_no.value,
  };

  const response = await fetch(API, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",

      Authorization: "Bearer " + localStorage.getItem("token"),
    },

    body: JSON.stringify(body),
  });

  if (response.ok) {
    alert("Company information updated successfully.");
  } else {
    alert("Unable to update company information.");
  }
}
