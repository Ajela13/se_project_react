import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, handleRegistration }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(data);
  useEffect(() => {
    if (isOpen) {
      setData({ name: "", email: "", password: "", avatar: "" });
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(data);
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      redirectText="or Log in"
      onSubmit={handleSubmit}
    >
      <label htmlFor="signUp-email" className="modal__label">
        Email*
        <input
          id="signUp-email"
          type="email"
          value={setData.email}
          className="modal__input"
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
      </label>

      <label htmlFor="signUp-password" className="modal__label">
        Password*
        <input
          type="password"
          className="modal__input"
          id="signUp-password"
          value={data.password}
          placeholder="Password"
          onChange={handleChange}
          name="password"
        />
      </label>

      <label htmlFor="signUp-name" className="modal__label">
        Name*
        <input
          type="text"
          className="modal__input"
          id="signUp-name"
          value={data.name}
          placeholder="Name"
          onChange={handleChange}
          name="name"
        />
      </label>

      <label htmlFor="signUp-avatar" className="modal__label">
        Avatar URL*
        <input
          type="text"
          className="modal__input"
          id="signUp-avatar"
          value={data.avatar}
          placeholder="Avatar URL"
          onChange={handleChange}
          name="avatar"
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
