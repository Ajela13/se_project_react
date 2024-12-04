import "./ModalWithForm.css";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  redirectText,
  redirectPath,
  clickHandler,
}) {
  return (
    <Modal name="form" onClose={onClose} isOpen={isOpen}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close" />
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__submit-buttons">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
            <Link to={redirectPath} className="modal__buttonredirect">
              <button
                hidden={!redirectText}
                className="modal__redirect"
                onClick={clickHandler}
              >
                {redirectText}
              </button>
            </Link>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ModalWithForm;
