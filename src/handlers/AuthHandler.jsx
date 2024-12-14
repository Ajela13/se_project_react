// src/handlers/AuthHandler.js
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import * as auth from "../utils/auth";

const AuthHandler = () => {
  const { handleLogin, handleSignOut } = useContext(AuthContext);

  const handleRegistration = async ({ email, password, name, avatar }) => {
    try {
      await auth.register(email, password, name, avatar);
      await handleLogin({ email, password });
    } catch (err) {
      console.error("Registration or Login failed:", err);
    }
  };

  const handleLoginSubmit = async ({ email, password }) => {
    await handleLogin({ email, password });
  };

  const handleSignOutSubmit = () => {
    handleSignOut();
  };

  return { handleRegistration, handleLoginSubmit, handleSignOutSubmit };
};

export default AuthHandler;
