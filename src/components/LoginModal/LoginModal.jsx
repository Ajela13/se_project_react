import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setpassword(e.target.value);

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setpassword("");
    }
  }, [isOpen]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // onAddItem({
  //     //   name,
  //     //   imageUrl,
  //     //   weather,
  //     // });
  //   };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      isOpen={isOpen}
      //   onSubmit={handleSubmit}
      onClose={onClose}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          id="email"
          type="email"
          value={email}
          className="modal__input"
          placeholder="Email"
          onChange={handleEmailChange}
        />
      </label>

      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="password"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
