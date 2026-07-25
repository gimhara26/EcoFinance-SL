export const API_URL = "http://127.0.0.1:5000/api";

export function getToken() {
  return localStorage.getItem("token");
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export async function apiFetch(url, options = {}) {
  const token = getToken();

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  return fetch(API_URL + url, {
    ...options,
    headers,
  });
}
