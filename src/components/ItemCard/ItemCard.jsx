import "./ItemCard.css";
import { useContext } from "react";
import ItemHandler from "../../handlers/ItemHandler";
import { ModalContext } from "../../contexts/ModalContext";
import { AuthContext } from "../../contexts/AuthContext";

function ItemCard({ item }) {
  const { currentUser, isLoggedIn } = useContext(AuthContext);

  const { handleCardClick } = useContext(ModalContext);
  const { handleItemLike } = ItemHandler();

  const isLiked = item.likes.includes(currentUser._id);
  const cardLikeButtonName = isLiked
    ? "card__like-btn-active"
    : "card__like-btn";

  const onCardClick = () => {
    handleCardClick(item);
  };
  const OnCardLike = () => {
    handleItemLike({ id: item._id, isLiked });
  };
  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        <button
          className={cardLikeButtonName}
          onClick={OnCardLike}
          hidden={!isLoggedIn}
        ></button>
      </div>

      <img
        onClick={onCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
