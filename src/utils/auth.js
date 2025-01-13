import { checkResponse } from "./api";
export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.casepractice.com"
    : "http://localhost:3001";

export const register = (email, password, name, avatar) => {
  console.log(JSON.stringify({ email, password, name, avatar }));

  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(checkResponse);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`, // Pass the token in the Authorization header
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    if (res.status === 401) {
      console.error("Token expired or invalid. Redirecting to login...");
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      window.location.href = "/login";
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};
