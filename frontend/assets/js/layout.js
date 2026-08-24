import auth from "./auth.js";

const MENU = [
  {
    title: "Dashboard",
    icon: "fa-solid fa-gauge-high",
    page: "dashboard",
    url: "dashboard/dashboard.html",
  },
  {
    title: "Company",
    icon: "fa-solid fa-building",
    page: "company",
    url: "dashboard/company/company.html",
  },
  {
    title: "Business Data",
    icon: "fa-solid fa-database",
    page: "business",
    url: "dashboard/business/new.html",
  },
  {
    title: "ESG Data",
    icon: "fa-solid fa-leaf",
    page: "esg",
    url: "dashboard/esg/new.html",
  },
  {
    title: "Reports",
    icon: "fa-solid fa-file-lines",
    page: "reports",
    url: "dashboard/reports/history.html",
  },
  {
    title: "AI Reports",
    icon: "fa-solid fa-robot",
    page: "ai",
    url: "dashboard/ai/history.html",
  },
];

export function initLayout({ title }) {
  renderSidebar();
  renderHeader(title);
  renderFooter();
}

function getProjectRoot() {
  const path = window.location.pathname;
  const marker = "/dashboard/";

  const index = path.indexOf(marker);

  if (index === -1) {
    return "";
  }

  return path.substring(0, index);
}

function renderSidebar() {
  const sidebar = document.getElementById("sidebar");

  if (!sidebar) {
    console.error("Sidebar element not found");
    return;
  }

  const root = getProjectRoot();

  let html = `
    <aside
      class="
        w-64
        h-screen
        bg-slate-900
        text-white
        fixed
        left-0
        top-0
        shadow-xl
        z-50
      "
    >

      <div class="p-6 border-b border-slate-700">

        <div class="flex items-center gap-3">

          <div
            class="
              w-10
              h-10
              rounded-lg
              border
              border-emerald-500
              flex
              items-center
              justify-center
            "
          >
            <i class="fa-solid fa-seedling text-emerald-400"></i>
          </div>

          <div>
            <h1 class="text-xl font-semibold">
              EcoFinance SL
            </h1>

            <p class="text-xs text-slate-400">
              Sustainability Platform
            </p>
          </div>

        </div>

      </div>

      <nav class="mt-6 space-y-1 px-3">
  `;

  MENU.forEach((item) => {
    const currentPath = window.location.pathname.toLowerCase();

    let active = "";

    if (
      item.page === "dashboard" &&
      currentPath.endsWith("/dashboard/dashboard.html")
    ) {
      active = "bg-emerald-600 text-white";
    }

    if (
      item.page !== "dashboard" &&
      currentPath.includes(`/dashboard/${item.page}/`)
    ) {
      active = "bg-emerald-600 text-white";
    }

    html += `
      <a
        href="${root}/${item.url}"
        class="
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-lg
          text-slate-300
          hover:bg-slate-700
          hover:text-white
          transition
          ${active}
        "
      >

        <i class="${item.icon} w-5 text-center"></i>

        <span>
          ${item.title}
        </span>

      </a>
    `;
  });

  html += `
      </nav>

      <div
        class="
          absolute
          bottom-0
          left-0
          right-0
          p-4
          border-t
          border-slate-700
        "
      >

        <div
          class="
            flex
            items-center
            gap-2
            text-slate-400
          "
        >

          <i class="fa-solid fa-shield-halved text-sm"></i>

          <span class="text-xs">
            ESG & Sustainability
          </span>

        </div>

      </div>

    </aside>
  `;

  sidebar.innerHTML = html;
}

function renderHeader(title) {
  const header = document.getElementById("header");

  if (!header) {
    console.error("Header element not found");
    return;
  }

  const user = auth.getUser();

  header.innerHTML = `
    <header
      class="
        bg-white
        shadow-sm
        px-8
        py-5
        flex
        justify-between
        items-center
      "
    >

      <div>

        <div class="flex items-center gap-2">

          <i class="fa-solid fa-leaf text-emerald-600"></i>

          <h2 class="text-2xl font-bold text-gray-800">
            ${title}
          </h2>

        </div>

        <p class="text-gray-500 mt-1">
          Sustainability Reporting
        </p>

      </div>

      <div class="flex items-center gap-4">

        <div
          class="
            w-10
            h-10
            rounded-full
            border
            border-emerald-200
            bg-emerald-50
            flex
            items-center
            justify-center
          "
        >

          <i class="fa-solid fa-user text-emerald-600"></i>

        </div>

        <div>

          <h4 class="font-semibold text-gray-800">
            ${user?.full_name || "User"}
          </h4>

          <small class="text-gray-500">
            ${user?.email || ""}
          </small>

        </div>

        <button
          id="logoutBtn"
          type="button"
          class="
            flex
            items-center
            gap-2
            bg-red-500
            hover:bg-red-600
            text-white
            px-4
            py-2
            rounded-lg
            transition
            duration-200
          "
        >

          <i class="fa-solid fa-right-from-bracket"></i>

          <span>
            Logout
          </span>

        </button>

      </div>

    </header>
  `;

  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      auth.logout();
    });
  }
}

function renderFooter() {
  const footer = document.getElementById("footer");

  if (!footer) {
    return;
  }

  footer.innerHTML = `
    <footer
      class="
        text-center
        p-5
        text-gray-500
        text-sm
      "
    >

      <div
        class="
          flex
          items-center
          justify-center
          gap-2
        "
      >

        <i class="fa-solid fa-leaf text-emerald-600"></i>

        <span>
          © 2026 EcoFinance SL
        </span>

      </div>

    </footer>
  `;
}


// import auth from "./auth.js";

// async function loadComponent(id, path) {
//   const container = document.getElementById(id);

//   if (!container) return;

//   const response = await fetch(path);

//   if (!response.ok) {
//     console.error("Unable to load", path);

//     return;
//   }

//   container.innerHTML = await response.text();
// }

// function activateMenu() {
//   const current = window.location.pathname;

//   document.querySelectorAll(".menu-item").forEach((item) => {
//     item.classList.remove("bg-emerald-600", "text-white");

//     if (current.includes(item.dataset.page)) {
//       item.classList.add("bg-emerald-600", "text-white");
//     }
//   });
// }

// export async function initLayout(options) {
//   const {
//     title = "Dashboard",

//     basePath = "../",
//   } = options;

//   await loadComponent(
//     "sidebar",

//     `${basePath}components/sidebar.html`,
//   );

//   await loadComponent(
//     "header",

//     `${basePath}components/header.html`,
//   );

//   const user = auth.getUser();

//   document.getElementById("pageTitle").textContent = title;

//   document.getElementById("headerUserName").textContent = user.full_name;

//   document.getElementById("headerEmail").textContent = user.email;

//   document.getElementById("logoutBtn").addEventListener("click", () => {
//     auth.logout();
//   });

//   activateMenu();
// }
