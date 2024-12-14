import "./ModalWithForm.css";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onSubmit,
  redirectText,
  clickHandler,
}) {
  const { closeActiveModal } = useContext(ModalContext);
  return (
    <Modal name="form" onClose={closeActiveModal} isOpen={isOpen}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        />
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__submit-buttons">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>

            <button
              hidden={!redirectText}
              className="modal__redirect"
              onClick={clickHandler}
            >
              {redirectText}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ModalWithForm;
