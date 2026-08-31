async function loadComponent(id, file) {
  const response = await fetch(file, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Failed to load ${file}: HTTP ${response.status}`
    );
  }

  document.getElementById(id).innerHTML =
    await response.text();
}


async function loadLayout(page, title) {

  try {

    await loadComponent(
      "sidebar",
      "/dashboard/components/sidebar.html"
    );

    await loadComponent(
      "header",
      "/dashboard/components/header.html"
    );

    document.getElementById(
      "pageTitle"
    ).textContent = title;

    document.getElementById(
      "pageBreadcrumb"
    ).textContent =
      "Dashboard / " + title;

    highlightMenu(page);

    await loadUser();

    initializeLogout();

  } catch (error) {

    console.error(
      "Layout loading error:",
      error
    );

  }
}


function highlightMenu(page) {

  document
    .querySelectorAll(".menu-item")
    .forEach((item) => {

      item.classList.remove(
        "bg-emerald-600",
        "text-white"
      );

      if (
        item.dataset.page === page
      ) {

        item.classList.add(
          "bg-emerald-600",
          "text-white"
        );

      }

    });
}


async function loadUser() {

  const token =
    localStorage.getItem("token");

  if (!token) {

    window.location.href =
      "/login.html";

    return;
  }

  try {

    const response = await fetch(
      "/api/profile/",
      {
        headers: {
          Authorization:
            "Bearer " + token,
        },
      }
    );

    if (!response.ok) {

      if (response.status === 401) {

        localStorage.clear();

        window.location.href =
          "/login.html";
      }

      return;
    }

    const result =
      await response.json();

    if (!result.success) {
      return;
    }

    const user =
      result.user || {};

    const company =
      result.company || {};

    const companyName =
      company.company_name ||
      "Company Account";

    const fullName =
      user.full_name ||
      user.email ||
      "User";

    document.getElementById(
      "companyHeader"
    ).textContent =
      companyName;

    document.getElementById(
      "userHeader"
    ).textContent =
      fullName;

    document.getElementById(
      "avatar"
    ).textContent =
      fullName
        .charAt(0)
        .toUpperCase();

  } catch (error) {

    console.error(
      "Unable to load user information:",
      error
    );

  }
}


function initializeLogout() {

  const btn =
    document.getElementById(
      "logoutBtn"
    );

  if (!btn) {
    return;
  }

  btn.onclick = () => {

    localStorage.clear();

    window.location.href =
      "/login.html";

  };
}