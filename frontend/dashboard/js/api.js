export const API_URL = "/api";

export function getToken() {
  return localStorage.getItem("token");
}

export function getUser() {
  const user = localStorage.getItem("user");

  try {
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Invalid stored user:", error);
    return null;
  }
}

export async function apiFetch(url, options = {}) {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return fetch(`${API_URL}${url}`, {
    ...options,
    headers,
  });
}