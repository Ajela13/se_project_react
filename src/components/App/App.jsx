import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext.jsx";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { activeModal } = useContext(ModalContext);

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
      <AddItemModal isOpen={activeModal === "add-clothes"} />
      <ItemModal isOpen={activeModal == "preview"} />
      <DeleteConfirmationModal isOpen={activeModal == "confirmation"} />
      <EditProfileModal isOpen={activeModal == "update profile"} />
      <LoginModal isOpen={activeModal == "Login"} />
      <RegisterModal isOpen={activeModal == "register"} />
    </div>
  );
};

export default App;
