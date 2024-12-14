// src/handlers/ProfileHandler.js
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"; // Assuming you have an AuthContext for managing user authentication
import { ModalContext } from "../contexts/ModalContext";
import * as api from "../utils/api";

const handleUpdateProfile = () => {
  const { closeActiveModal } = useContext(ModalContext);
  const { setIsLoggedIn, setUser } = useContext(AuthContext);
  const handleUpdateProfile = async ({ name, avatar }) => {
    try {
      const token = localStorage.getItem("jwt");
      await api.updateUser(name, avatar, token);

      setUser((user) => ({
        ...user,
        name,
        avatar,
      }));
      closeActiveModal();
    } catch (err) {
      console.error("Token validation failed:", err);
      setIsLoggedIn(false);
    }
  };

  return { handleUpdateProfile };
};

export default handleUpdateProfile;
