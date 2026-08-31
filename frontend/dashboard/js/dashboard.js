<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>EcoFinance SL Dashboard</title>

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

  <!-- Font Awesome -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  />

  <style>
    body {
      font-family: "Segoe UI", sans-serif;
    }

    .sidebar-link {
      transition: all 0.2s ease;
    }

    .sidebar-link:hover {
      background-color: #1e293b;
    }

    .sidebar-link.active {
      background-color: #059669;
    }

    .stat-card {
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .stat-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    }

    .loading {
      color: #94a3b8;
    }
  </style>
</head>

<body class="bg-slate-100">

  <div class="flex h-screen">

    <aside
      id="sidebar"
      class="w-64 bg-slate-900 text-white flex flex-col shadow-xl"
    >

      <!-- Logo -->

      <div
        class="h-20 flex items-center justify-center border-b border-slate-700"
      >
        <div class="text-center">

          <i
            class="fa-solid fa-leaf text-4xl text-emerald-400 mb-2"
          ></i>

          <h1 class="font-bold text-xl">
            EcoFinance SL
          </h1>

        </div>
      </div>


      <!-- Navigation -->

      <nav class="flex-1 px-4 py-6 space-y-2">

        <!-- Dashboard -->

        <a
          href="/dashboard/dashboard.html"
          class="sidebar-link active flex items-center gap-3 px-4 py-3 rounded-lg"
        >
          <i class="fa-solid fa-house w-5"></i>
          <span>Dashboard</span>
        </a>


        <!-- Company -->

        <a
          href="/dashboard/company/company.html"
          class="sidebar-link flex items-center gap-3 px-4 py-3 rounded-lg"
        >
          <i class="fa-solid fa-building w-5"></i>
          <span>Company</span>
        </a>


        <!-- Business Input -->

        <a
          href="/dashboard/business/input.html"
          class="sidebar-link flex items-center gap-3 px-4 py-3 rounded-lg"
        >
          <i class="fa-solid fa-industry w-5"></i>
          <span>Business Input</span>
        </a>


        <!-- ESG Input -->

        <a
          href="/dashboard/esg/input.html"
          class="sidebar-link flex items-center gap-3 px-4 py-3 rounded-lg"
        >
          <i class="fa-solid fa-seedling w-5"></i>
          <span>ESG Input</span>
        </a>


        <!-- ESG Dashboard -->

        <a
          href="/dashboard/esg/dashboard.html"
          class="sidebar-link flex items-center gap-3 px-4 py-3 rounded-lg"
        >
          <i class="fa-solid fa-chart-line w-5"></i>
          <span>ESG Dashboard</span>
        </a>


        <!-- Reports -->

        <a
          href="/dashboard/reports/reports.html"
          class="sidebar-link flex items-center gap-3 px-4 py-3 rounded-lg"
        >
          <i class="fa-solid fa-file-lines w-5"></i>
          <span>Reports</span>
        </a>


        <!-- Profile -->

        <a
          href="/dashboard/profile/profile.html"
          class="sidebar-link flex items-center gap-3 px-4 py-3 rounded-lg"
        >
          <i class="fa-solid fa-user w-5"></i>
          <span>Profile</span>
        </a>

      </nav>


      <!-- Logout -->

      <div class="p-4 border-t border-slate-700">

        <button
          id="logoutBtn"
          type="button"
          class="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg transition"
        >

          <i class="fa-solid fa-right-from-bracket mr-2"></i>

          Logout

        </button>

      </div>

    </aside>


    <div class="flex-1 flex flex-col overflow-hidden">

      <header
        class="h-20 bg-white shadow flex items-center justify-between px-8"
      >

        <!-- Header left -->

        <div>

          <h2 class="text-3xl font-bold text-slate-800">
            Dashboard
          </h2>

          <p class="text-gray-500">
            Welcome back
          </p>

        </div>


        <!-- Header right -->

        <div class="flex items-center gap-4">

          <div class="text-right">

            <h3
              id="headerCompanyName"
              class="font-semibold text-slate-800"
            >
              Loading...
            </h3>

            <p class="text-gray-500 text-sm">
              Company Account
            </p>

          </div>


          <div
            id="userInitial"
            class="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-lg font-bold"
          >
            U
          </div>

        </div>

      </header>


      <main class="flex-1 overflow-y-auto p-8">

        <div
          class="bg-gradient-to-r from-emerald-600 to-green-500 rounded-2xl text-white p-8 shadow"
        >

          <h1 class="text-4xl font-bold">
            Welcome to EcoFinance SL
          </h1>

          <p class="mt-3 text-lg">
            Manage your ESG information, carbon emissions,
            sustainability reports and company profile from one place.
          </p>

        </div>



        <div
          class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8"
        >


          <!-- COMPANY CARD -->

          <div
            class="stat-card bg-white rounded-xl shadow p-6"
          >

            <div class="flex justify-between items-center">

              <div>

                <p class="text-gray-500">
                  Company
                </p>

                <h3
                  id="companyName"
                  class="text-xl font-bold mt-2 loading"
                >
                  Loading...
                </h3>

              </div>


              <div class="bg-blue-100 p-4 rounded-full">

                <i
                  class="fa-solid fa-building text-blue-600 text-2xl"
                ></i>

              </div>

            </div>

          </div>


          <!-- ESG CARD -->

          <div
            class="stat-card bg-white rounded-xl shadow p-6"
          >

            <div class="flex justify-between items-center">

              <div>

                <p class="text-gray-500">
                  ESG Score
                </p>

                <h3
                  id="esgScore"
                  class="text-3xl font-bold text-emerald-600 mt-2"
                >
                  0
                </h3>

              </div>


              <div class="bg-emerald-100 p-4 rounded-full">

                <i
                  class="fa-solid fa-seedling text-emerald-600 text-2xl"
                ></i>

              </div>

            </div>

          </div>


          <!-- CARBON CARD -->

          <div
            class="stat-card bg-white rounded-xl shadow p-6"
          >

            <div class="flex justify-between items-center">

              <div>

                <p class="text-gray-500">
                  Carbon Emission
                </p>

                <h3
                  id="carbonEmission"
                  class="text-3xl font-bold text-red-500 mt-2"
                >
                  0 kg
                </h3>

              </div>


              <div class="bg-red-100 p-4 rounded-full">

                <i
                  class="fa-solid fa-cloud text-red-500 text-2xl"
                ></i>

              </div>

            </div>

          </div>


          <!-- REPORT CARD -->

          <div
            class="stat-card bg-white rounded-xl shadow p-6"
          >

            <div class="flex justify-between items-center">

              <div>

                <p class="text-gray-500">
                  Reports
                </p>

                <h3
                  id="reportCount"
                  class="text-3xl font-bold text-indigo-600 mt-2"
                >
                  0
                </h3>

              </div>


              <div class="bg-indigo-100 p-4 rounded-full">

                <i
                  class="fa-solid fa-file-lines text-indigo-600 text-2xl"
                ></i>

              </div>

            </div>

          </div>

        </div>


        <!-- CHARTS -->

        <div
          class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8"
        >


          <!-- CARBON CHART -->


          <div
            class="bg-white rounded-xl shadow p-6"
          >

            <div class="flex justify-between items-center mb-5">

              <h2 class="text-xl font-semibold">
                Carbon Emission Trend
              </h2>

              <span
                class="text-sm text-gray-500"
              >
                Recent Records
              </span>

            </div>

            <div class="relative h-72">

              <canvas id="carbonChart"></canvas>

            </div>

          </div>


          <!-- ESG CHART -->

          <div
            class="bg-white rounded-xl shadow p-6"
          >

            <div class="flex justify-between items-center mb-5">

              <h2 class="text-xl font-semibold">
                ESG Score Trend
              </h2>

              <span
                class="text-sm text-gray-500"
              >
                Recent Scores
              </span>

            </div>

            <div class="relative h-72">

              <canvas id="esgChart"></canvas>

            </div>

          </div>

        </div>


        <!-- QUICK ACTIONS + RECENT ACTIVITY -->

        <div
          class="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8"
        >


          <!-- QUICK ACTIONS -->

          <div
            class="bg-white rounded-xl shadow p-6"
          >

            <h2 class="text-xl font-semibold mb-5">
              Quick Actions
            </h2>


            <div class="grid grid-cols-2 gap-4">


              <!-- Company -->

              <a
                href="/dashboard/company/company.html"
                class="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-4 text-center transition"
              >

                <i class="fa-solid fa-building mb-2 block text-xl"></i>

                Company

              </a>


              <!-- Business -->

              <a
                href="/dashboard/business/input.html"
                class="bg-green-600 hover:bg-green-700 text-white rounded-lg p-4 text-center transition"
              >

                <i class="fa-solid fa-industry mb-2 block text-xl"></i>

                Business Input

              </a>


              <!-- ESG -->

              <a
                href="/dashboard/esg/input.html"
                class="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg p-4 text-center transition"
              >

                <i class="fa-solid fa-seedling mb-2 block text-xl"></i>

                ESG Input

              </a>


              <!-- Reports -->

              <a
                href="/dashboard/reports/reports.html"
                class="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg p-4 text-center transition"
              >

                <i class="fa-solid fa-file-lines mb-2 block text-xl"></i>

                Reports

              </a>

            </div>

          </div>


          <!-- RECENT ACTIVITY -->
       
          <div
            class="xl:col-span-2 bg-white rounded-xl shadow p-6"
          >

            <div class="flex justify-between items-center mb-5">

              <h2 class="text-xl font-semibold">
                Recent Activity
              </h2>

              <span
                id="activityStatus"
                class="text-sm text-gray-500"
              >
                Loading...
              </span>

            </div>


            <div class="overflow-x-auto">

              <table class="w-full">

                <thead>

                  <tr class="border-b">

                    <th class="text-left py-3">
                      Date
                    </th>

                    <th class="text-left">
                      Activity
                    </th>

                    <th class="text-left">
                      Status
                    </th>

                  </tr>

                </thead>


                <tbody id="activityTable">

                  <tr>

                    <td
                      colspan="3"
                      class="text-center py-8 text-gray-400"
                    >

                      Loading activity...

                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>


        
        <!-- ERROR MESSAGE -->
        

        <div
          id="dashboardError"
          class="hidden mt-6 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4"
        >
        </div>


      </main>

    </div>

  </div>

  <!-- DASHBOARD JAVASCRIPT -->

  <script type="module" src="./js/dashboard.js"></script>


  <!-- LOGOUT -->

  <script type="module">

    import { getToken } from "./js/api.js";

    const logoutBtn =
      document.getElementById("logoutBtn");

    logoutBtn.addEventListener("click", function () {

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.href = "../login.html";

    });

  </script>

</body>

</html>
