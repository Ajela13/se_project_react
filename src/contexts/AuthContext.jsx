// src/contexts/AuthProvider.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as auth from "../utils/auth";
import * as api from "../utils/api";
import { ModalContext } from "./ModalContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { closeActiveModal } = useContext(ModalContext);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setUser] = useState({});

  const handleLogin = async ({ email, password }) => {
    try {
      const res = await auth.authorize(email, password);
      if (res.token) {
        localStorage.setItem("jwt", res.token);
        const userData = await auth.checkToken(res.token);
        setUser(userData);
        setIsLoggedIn(true);
        closeActiveModal();
        navigate("/profile");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setUser({});
  };

  useEffect(() => {
    const checkUserToken = async () => {
      const token = localStorage.getItem("jwt");

      if (!token) {
        setIsLoggedIn(false);
        return;
      }

      try {
        // Validate the token
        const userData = await auth.checkToken(token);
        setIsLoggedIn(true);
        setUser(userData);

        // Optionally, fetch additional user data
        const userDataFromApi = await api.getUserData(token);
        console.log("User data:", userDataFromApi);
      } catch (err) {
        console.error("Token validation failed:", err);
        setIsLoggedIn(false);
      }
    };

    checkUserToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        currentUser,
        setUser,
        handleLogin,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
