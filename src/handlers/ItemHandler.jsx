// src/handlers/ItemHandler.js
import { useContext } from "react";
import { ClothingItemsContext } from "../contexts/ClothingItemsContext";
import * as api from "../utils/api";

const ItemHandler = () => {
  const { handleAddItem, handleDeleteItem, setClothingItems } =
    useContext(ClothingItemsContext);

  const handleAddItemSubmit = async ({ name, weather, imageUrl }) => {
    await handleAddItem({ name, weather, imageUrl });
  };

  const handleDeleteItemSubmit = async (item) => {
    await handleDeleteItem(item);
  };

  const handleItemLike = async ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    try {
      const updatedCard = isLiked
        ? await api.removeCardLike(id, token)
        : await api.addCardLike(id, token);

      setClothingItems((items) =>
        items.map((item) => (item._id === id ? updatedCard : item))
      );
    } catch (err) {
      console.error("Error updating like status:", err);
    }
  };

  return { handleAddItemSubmit, handleDeleteItemSubmit, handleItemLike };
};

export default ItemHandler;
