import api from "./api.js";
import { CONFIG } from "./config.js";

class Auth {
  async login(email, password) {
    const response = await api.post("/auth/login", {
      email,

      password,
    });

    if (!response.success) {
      throw new Error(response.message);
    }

    localStorage.setItem(
      CONFIG.TOKEN_KEY,

      response.token,
    );

    localStorage.setItem(
      CONFIG.USER_KEY,

      JSON.stringify(response.user),
    );

    return response;
  }

  logout() {
    localStorage.removeItem(CONFIG.TOKEN_KEY);

    localStorage.removeItem(CONFIG.USER_KEY);

    window.location.href = "../login.html";
  }

  isAuthenticated() {
    return localStorage.getItem(CONFIG.TOKEN_KEY) !== null;
  }

  getUser() {
    return JSON.parse(localStorage.getItem(CONFIG.USER_KEY));
  }
}

export default new Auth();
