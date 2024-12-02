import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isLiked = item.likes.includes(currentUser._id);
  const cardLikeButtonName = isLiked
    ? "card__like-btn-active"
    : "card__like-btn";

  const handleCardClick = () => {
    onCardClick(item);
  };
  const handleLike = () => {
    onCardLike({ id: item._id, isLiked });
  };
  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        <button className={cardLikeButtonName} onClick={handleLike}></button>
      </div>

      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
