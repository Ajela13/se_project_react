import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { ClothingItemsContext } from "../../contexts/ClothingItemsContext";
import { AuthContext } from "../../contexts/AuthContext";

function ClothesSection() {
  const { currentUser } = useContext(AuthContext);
  const { handleAddClick } = useContext(ModalContext);
  const { clothingItems } = useContext(ClothingItemsContext);

  return (
    <div className="clothesSection">
      <div className="clothesSection__options">
        <p className="clothesSection__title">Your items</p>
        <button className="clothesSection__add-item" onClick={handleAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothesSection__list">
        {clothingItems
          .filter((item) => item.owner === currentUser._id)
          .map((item) => {
            return <ItemCard item={item} />;
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
