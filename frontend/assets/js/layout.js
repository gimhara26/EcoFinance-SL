import auth from "./auth.js";

const MENU = [
  {
    title: "Dashboard",
    icon: "📊",
    page: "dashboard",
    url: "dashboard/dashboard.html",
  },
  {
    title: "Company",
    icon: "🏢",
    page: "company",
    url: "dashboard/company/company.html",
  },
  {
    title: "Business Data",
    icon: "📥",
    page: "business",
    url: "dashboard/business/new.html",
  },
  {
    title: "ESG Data",
    icon: "🌱",
    page: "esg",
    url: "dashboard/esg/new.html",
  },
  {
    title: "Reports",
    icon: "📄",
    page: "reports",
    url: "dashboard/reports/history.html",
  },
  {
    title: "AI Reports",
    icon: "🤖",
    page: "ai",
    url: "dashboard/ai/history.html",
  },
  // {
  //   title: "Profile",
  //   icon: "👤",
  //   page: "profile",
  //   url: "dashboard/profile/profile.html",
  // },
];

export function initLayout({ title, basePath }) {
  renderSidebar(basePath);

  renderHeader(title);

  renderFooter();
}

function renderSidebar(basePath) {
  const sidebar = document.getElementById("sidebar");

  if (!sidebar) return;

  let html = `

    <aside class="
        w-64
        h-screen
        bg-slate-900
        text-white
        fixed
        left-0
        top-0
    ">

        <div class="p-6 border-b border-slate-700">

            <h1 class="text-2xl font-bold">

                EcoFinance SL

            </h1>

            <p class="text-slate-400">

                Sustainability Platform

            </p>

        </div>

        <nav class="mt-6 space-y-2 px-3">

    `;

  MENU.forEach((item) => {
    const active = window.location.pathname.includes(item.page)
      ? "bg-emerald-600"
      : "";

    html += `

            <a

                href="${basePath}${item.url}"

                class="block px-4 py-3 rounded-lg hover:bg-slate-700 ${active}"

            >

                ${item.icon} ${item.title}

            </a>

        `;
  });

  html += `

        </nav>

    </aside>

    `;

  sidebar.innerHTML = html;
}

function renderHeader(title) {
  const user = auth.getUser();

  document.getElementById("header").innerHTML = `

    <header class="bg-white shadow px-8 py-5 flex justify-between">

        <div>

            <h2 class="text-2xl font-bold">

                ${title}

            </h2>

            <p class="text-gray-500">

                Sustainability Reporting

            </p>

        </div>

        <div class="flex items-center gap-4">

            <div>

                <h4 class="font-semibold">

                    ${user.full_name}

                </h4>

                <small>

                    ${user.email}

                </small>

            </div>

            <button

                id="logoutBtn"

                class="bg-red-500 text-white px-4 py-2 rounded">

                Logout

            </button>

        </div>

    </header>

    `;

  document.getElementById("logoutBtn").onclick = () => auth.logout();
}

function renderFooter() {
  const footer = document.getElementById("footer");

  if (!footer) return;

  footer.innerHTML = `

    <footer
    class="text-center p-5 text-gray-500">

        © 2026 EcoFinance SL

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
