import Modal from "../Modal/Modal";
import "./ItemModal.css";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { ClothingItemsContext } from "../../contexts/ClothingItemsContext";
import { AuthContext } from "../../contexts/AuthContext";

function ItemModal({ isOpen }) {
  const { currentUser } = useContext(AuthContext);
  const { closeActiveModal, handleConfirmationDeleteClick, selectedCard } =
    useContext(ModalContext);
  const card = selectedCard;
  const isOwn = card.owner === currentUser._id;
  return (
    <Modal name="preview" onClose={closeActiveModal} isOpen={isOpen}>
      <div className="modal__preview-content modal__content_type_image">
        <button
          onClick={closeActiveModal}
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
            onClick={() => handleConfirmationDeleteClick(card)}
          >
            Delete item
          </button>{" "}
        </div>
      </div>
    </Modal>
  );
}

export default ItemModal;
