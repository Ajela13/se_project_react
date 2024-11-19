import Modal from "../Modal/Modal";
import "./ItemModal.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ isOpen, card, onClose, openDeleteConfirmationModal }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  return (
    <Modal name="preview" onClose={onClose} isOpen={isOpen}>
      <div className="modal__preview-content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-preview"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-description">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            className="modal__delete"
            type="button"
            hidden={!isOwn}
            onClick={() => openDeleteConfirmationModal(card)}
          >
            Delete item
          </button>{" "}
        </div>
      </div>
    </Modal>
  );
}

export default ItemModal;
