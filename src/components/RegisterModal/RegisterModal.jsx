import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setName(e.targer.value);
  const handleAvatarChange = (e) => setAvatar(e.target.value);

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
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
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      //   onSubmit={handleSubmit}
      onClose={onClose}
      redirectText="or Log in"
    >
      <label htmlFor="signUp-email" className="modal__label">
        Email*
        <input
          id="signUp-email"
          type="email"
          value={email}
          className="modal__input"
          placeholder="Email"
          onChange={handleEmailChange}
        />
      </label>

      <label htmlFor="signUp-password" className="modal__label">
        Password*
        <input
          type="password"
          className="modal__input"
          id="signUp-password"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
      </label>

      <label htmlFor="signUp-name" className="modal__label">
        Name*
        <input
          type="text"
          className="modal__input"
          id="signUp-name"
          value={name}
          placeholder="Name"
          onChange={handleNameChange}
        />
      </label>

      <label htmlFor="signUp-avatar" className="modal__label">
        Avatar URL*
        <input
          type="text"
          className="modal__input"
          id="signUp-avatar"
          value={avatar}
          placeholder="Avatar URL"
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
