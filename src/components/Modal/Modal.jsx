import { useEffect } from "react";
import "./Modal.css";

function Modal({ name, children, onClose, isOpen }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose, isOpen]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal  modal_type-${name}  ${isOpen && "modal_opened"}`}
      onClick={handleOverlay}
    >
      <div className="modal__container">{children}</div>
    </div>
  );
}

export default Modal;
