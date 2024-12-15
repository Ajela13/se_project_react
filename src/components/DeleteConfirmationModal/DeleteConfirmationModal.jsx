import Modal from "../Modal/Modal";
import "./DeleteConfirmationModal.css";
import { useContext } from "react";
import { ClothingItemsContext } from "../../contexts/ClothingItemsContext";
import { ModalContext } from "../../contexts/ModalContext";

function DeleteConfirmationModal({ isOpen }) {
  const { handleDeleteItem } = useContext(ClothingItemsContext);
  const { closeActiveModal, selectedCard } = useContext(ModalContext);
  return (
    <Modal name="confirmation" onClose={closeActiveModal} isOpen={isOpen}>
      <div className="modal__confirmation-content ">
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close-confirmation"
        ></button>
        <p className="modal__confirmation-title">
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
        <button
          className="modal__confirmation-delete"
          type="button"
          onClick={() => {
            handleDeleteItem(selectedCard);
          }}
        >
          Yes, delete item
        </button>
        <button
          className="modal__confirmation-cancel"
          type="button"
          onClick={closeActiveModal}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}
export default DeleteConfirmationModal;
