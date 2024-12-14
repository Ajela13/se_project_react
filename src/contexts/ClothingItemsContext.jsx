// src/contexts/ClothingItemProvider.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { getItems, addItems, deleteItems } from "../utils/api";
import { ModalContext } from "./ModalContext";

export const ClothingItemsContext = createContext();

export const ClothingItemsProvider = ({ children }) => {
  const { closeActiveModal } = useContext(ModalContext);
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    getItems().then(setClothingItems).catch(console.error);
  }, []);

  const handleAddItem = async ({ name, weather, imageUrl }) => {
    try {
      const token = localStorage.getItem("jwt");
      const newItem = await addItems(name, imageUrl, weather, token);
      setClothingItems([newItem, ...clothingItems]);
      closeActiveModal();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteItem = async (item) => {
    try {
      const token = localStorage.getItem("jwt");
      await deleteItems(item._id, token);
      setClothingItems(clothingItems.filter((card) => card._id !== item._id));
      closeActiveModal();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ClothingItemsContext.Provider
      value={{
        clothingItems,
        setClothingItems,
        handleAddItem,
        handleDeleteItem,
      }}
    >
      {children}
    </ClothingItemsContext.Provider>
  );
};
