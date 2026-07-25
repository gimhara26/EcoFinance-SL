// Logout
function logout() {

    if (confirm("Are you sure you want to logout?")) {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.href = "login.html";

    }

}


// Check Login
function checkLogin() {

    const token = localStorage.getItem("token");

    if (!token) {

        window.location.href = "login.html";

    }

}