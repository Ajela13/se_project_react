import Modal from "../Modal/Modal";
import "./DeleteConfirmationModal.css";

function DeleteConfirmationModal({ handleDeleteItem, card, onClose, isOpen }) {
  return (
    <Modal name="confirmation" onClose={onClose} isOpen={isOpen}>
      <div className="modal__confirmation-content ">
        <button
          onClick={onClose}
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
            handleDeleteItem(card);
          }}
        >
          Yes, delete item
        </button>
        <button className="modal__confirmation-cancel" type="button">
          Cancel
        </button>
      </div>
    </Modal>
  );
}
export default DeleteConfirmationModal;
