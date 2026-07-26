import auth from "./auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const protectedPages = ["/dashboard"];

  const current = window.location.pathname;

  if (protectedPages.some((page) => current.includes(page))) {
    if (!auth.isAuthenticated()) {
      window.location = "/login.html";
    }
  }
});
