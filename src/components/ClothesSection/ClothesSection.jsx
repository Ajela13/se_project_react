import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ handleCardClick, clothingItems, handleAddClick }) {
  return (
    <div className="clothesSection">
      <div className="clothesSection__options">
        <p className="clothesSection__title">Your items</p>
        <button className="clothesSection__add-item" onClick={handleAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothesSection__list">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
