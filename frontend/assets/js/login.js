import auth from "./auth.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", login);

async function login(e) {
  e.preventDefault();

  try {
    await auth.login(
      email.value,

      password.value,
    );

    window.location = "./dashboard/dashboard.html";
  } catch (error) {
    alert(error.message);
  }
}
