export const BASE_URL = "http://localhost:3001";

export const register = (email, password, name, avatar) => {
  console.log(JSON.stringify({ email, password, name, avatar }));

  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`, // Pass the token in the Authorization header
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json(); // Return user data if the token is valid
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.error("Token validation failed:", err);
    });
};
