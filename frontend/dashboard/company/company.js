const API_BASE_URL =
window.location.hostname === "localhost" ||
window.location.hostname === "127.0.0.1"
? "http://127.0.0.1:5000/api"
: "https://www.ecofinancesl.online/api";

const API = `${API_BASE_URL}/company/`;

const provinces = {
"Western Province": [
"Colombo",
"Gampaha",
"Kalutara"
],
"Central Province": [
"Kandy",
"Matale",
"Nuwara Eliya"
],
"Southern Province": [
"Galle",
"Matara",
"Hambantota"
],
"Northern Province": [
"Jaffna",
"Kilinochchi",
"Mannar",
"Mullaitivu",
"Vavuniya"
],
"Eastern Province": [
"Batticaloa",
"Ampara",
"Trincomalee"
],
"North Western Province": [
"Kurunegala",
"Puttalam"
],
"North Central Province": [
"Anuradhapura",
"Polonnaruwa"
],
"Uva Province": [
"Badulla",
"Monaragala"
],
"Sabaragamuwa Province": [
"Ratnapura",
"Kegalle"
]
};

document.addEventListener("DOMContentLoaded", function () {

loadProvinces();

document
    .getElementById("province")
    .addEventListener("change", loadDistricts);

document
    .getElementById("saveBtn")
    .addEventListener("click", updateCompany);

document
    .getElementById("cancelBtn")
    .addEventListener("click", loadCompany);

loadCompany();


});

function loadProvinces() {

const select =
    document.getElementById("province");

select.innerHTML =
    '<option value="">Select Province</option>';

Object.keys(provinces).forEach(function (province) {

    const option =
        document.createElement("option");

    option.value =
        province;

    option.textContent =
        province;

    select.appendChild(option);

});


}

function loadDistricts() {


const province =
    document.getElementById("province").value;

const districtSelect =
    document.getElementById("district");

districtSelect.innerHTML =
    '<option value="">Select District</option>';

if (!province) {
    return;
}

const districts =
    provinces[province];

if (!districts) {
    return;
}

districts.forEach(function (district) {

    const option =
        document.createElement("option");

    option.value =
        district;

    option.textContent =
        district;

    districtSelect.appendChild(option);

});


}

async function loadCompany() {


const token =
    localStorage.getItem("token");

if (!token) {

    window.location.href =
        "/login.html";

    return;

}

console.log("Company API:", API);

try {

    const response =
        await fetch(API, {

            method: "GET",

            headers: {
                "Authorization":
                    "Bearer " + token,

                "Accept":
                    "application/json"
            },

            cache: "no-store"

        });

    console.log(
        "Company status:",
        response.status
    );

    const text =
        await response.text();

    console.log(
        "Company response:",
        text
    );

    let data;

    try {

        data =
            JSON.parse(text);

    } catch (error) {

        throw new Error(
            "Server returned invalid JSON"
        );

    }

    if (!response.ok) {

        if (response.status === 401) {

            localStorage.clear();

            window.location.href =
                "/login.html";

            return;

        }

        throw new Error(
            data.message ||
            data.detail ||
            data.error ||
            "Unable to load company information"
        );

    }

    const company =
        data.company ||
        data.data ||
        data;

    console.log(
        "Company:",
        company
    );

    document.getElementById(
        "company_name"
    ).value =
        company.company_name ||
        "";

    document.getElementById(
        "registration_no"
    ).value =
        company.registration_no ||
        "";

    document.getElementById(
        "business_sector"
    ).value =
        company.business_sector ||
        "";

    document.getElementById(
        "website"
    ).value =
        company.website ||
        "";

    document.getElementById(
        "address"
    ).value =
        company.address ||
        "";

    document.getElementById(
        "contact_no"
    ).value =
        company.contact_no ||
        "";

    document.getElementById(
        "email"
    ).value =
        company.email ||
        "";

    if (company.province) {

        setProvince(
            company.province
        );

    }

    if (company.district) {

        setDistrict(
            company.district
        );

    }

} catch (error) {

    console.error(
        "Load company error:",
        error
    );

    showError(
        error.message
    );

}


}

function setProvince(value) {


const select =
    document.getElementById("province");

const normalized =
    String(value)
        .trim()
        .toLowerCase();

const option =
    Array.from(select.options)
        .find(function (option) {

            return option.value
                .trim()
                .toLowerCase() ===
                normalized;

        });

if (!option) {

    console.error(
        "Province not found:",
        value
    );

    return;

}

select.value =
    option.value;

loadDistricts();


}

function setDistrict(value) {


const select =
    document.getElementById("district");

const normalized =
    String(value)
        .trim()
        .toLowerCase();

const option =
    Array.from(select.options)
        .find(function (option) {

            return option.value
                .trim()
                .toLowerCase() ===
                normalized;

        });

if (!option) {

    console.error(
        "District not found:",
        value
    );

    return;

}

select.value =
    option.value;


}

async function updateCompany() {


const token =
    localStorage.getItem("token");

if (!token) {

    window.location.href =
        "/login.html";

    return;

}

const body = {

    company_name:
        document.getElementById(
            "company_name"
        ).value.trim(),

    registration_no:
        document.getElementById(
            "registration_no"
        ).value.trim(),

    business_sector:
        document.getElementById(
            "business_sector"
        ).value.trim(),

    website:
        document.getElementById(
            "website"
        ).value.trim(),

    address:
        document.getElementById(
            "address"
        ).value.trim(),

    province:
        document.getElementById(
            "province"
        ).value,

    district:
        document.getElementById(
            "district"
        ).value,

    contact_no:
        document.getElementById(
            "contact_no"
        ).value.trim(),

    email:
        document.getElementById(
            "email"
        ).value.trim()

};

console.log(
    "Sending company:",
    body
);

try {

    const response =
        await fetch(API, {

            method: "PUT",

            headers: {

                "Authorization":
                    "Bearer " + token,

                "Content-Type":
                    "application/json",

                "Accept":
                    "application/json"

            },

            body:
                JSON.stringify(body)

        });

    const text =
        await response.text();

    console.log(
        "Update status:",
        response.status
    );

    console.log(
        "Update response:",
        text
    );

    let data;

    try {

        data =
            JSON.parse(text);

    } catch (error) {

        throw new Error(
            "Server returned invalid JSON"
        );

    }

    if (!response.ok) {

        throw new Error(
            data.message ||
            data.detail ||
            data.error ||
            "Unable to update company"
        );

    }

    alert(
        "Company information updated successfully."
    );

    await loadCompany();

} catch (error) {

    console.error(
        "Update error:",
        error
    );

    alert(
        error.message
    );

}


}

function showError(message) {


const errorBox =
    document.getElementById(
        "companyError"
    );

errorBox.textContent =
    message;

errorBox.classList.remove(
    "hidden"
);


}
