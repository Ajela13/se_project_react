import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState({});
  const [activeModal, setActiveModal] = useState("");

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddClick = () => setActiveModal("add-clothes");
  const handleLoginClick = () => setActiveModal("Login");
  const handleRegisterClick = () => setActiveModal("register");
  const handleUpdateProfileClick = () => setActiveModal("update profile");
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleConfirmationDeleteClick = (card) => {
    setActiveModal("confirmation");
    setSelectedCard(card);
  };

  return (
    <ModalContext.Provider
      value={{
        activeModal,
        closeActiveModal,
        handleAddClick,
        handleLoginClick,
        handleRegisterClick,
        handleUpdateProfileClick,
        handleCardClick,
        handleConfirmationDeleteClick,
        selectedCard,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
