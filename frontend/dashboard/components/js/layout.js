async function loadComponent(id, file) {
  const response = await fetch(file);

  document.getElementById(id).innerHTML = await response.text();
}

async function loadLayout(page, title) {
  await loadComponent("sidebar", "../components/sidebar.html");

  await loadComponent("header", "../components/header.html");

  document.getElementById("pageTitle").textContent = title;

  document.getElementById("pageBreadcrumb").textContent =
    "Dashboard / " + title;

  highlightMenu(page);

  loadUser();

  initializeLogout();
}

function highlightMenu(page) {
  document.querySelectorAll(".menu-item").forEach((item) => {
    if (item.dataset.page === page) {
      item.classList.add("bg-emerald-600", "text-white");
    }
  });
}

function loadUser() {
  const company = localStorage.getItem("company_name");

  const user = localStorage.getItem("full_name");

  if (company) {
    document.getElementById("companyHeader").textContent = company;
  }

  if (user) {
    document.getElementById("userHeader").textContent = user;

    document.getElementById("avatar").textContent = user
      .charAt(0)
      .toUpperCase();
  }
}

function initializeLogout() {
  const btn = document.getElementById("logoutBtn");

  if (!btn) return;

  btn.onclick = () => {
    localStorage.clear();

    window.location = "../../login.html";
  };
}
