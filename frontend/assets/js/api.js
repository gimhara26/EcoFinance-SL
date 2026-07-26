import { CONFIG } from "./config.js";

class Api {
  getHeaders() {
    const token = localStorage.getItem(CONFIG.TOKEN_KEY);

    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return headers;
  }

  async request(endpoint, options = {}) {
    try {
      const response = await fetch(CONFIG.API_URL + endpoint, {
        ...options,
        headers: {
          ...this.getHeaders(),
          ...(options.headers || {}),
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Request Failed");
      }

      return data;
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  get(endpoint) {
    return this.request(endpoint);
  }

  post(endpoint, body) {
    return this.request(endpoint, {
      method: "POST",

      body: JSON.stringify(body),
    });
  }

  put(endpoint, body) {
    return this.request(endpoint, {
      method: "PUT",

      body: JSON.stringify(body),
    });
  }

  delete(endpoint) {
    return this.request(endpoint, {
      method: "DELETE",
    });
  }
}

export default new Api();
