import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import AuthHandler from "../../handlers/AuthHandler";

function LoginModal({ isOpen }) {
  const { handleLoginSubmit } = AuthHandler();
  const { handleRegisterClick, closeActiveModal } = useContext(ModalContext);

  const {} = useContext(ModalContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isOpen) {
      setData({ email: "", password: "" });
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoginSubmit(data);
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      redirectText="or Sign Up"
      clickHandler={handleRegisterClick}
    >
      <label htmlFor="login-email" className="modal__label">
        Email
        <input
          id="login-email"
          type="email"
          value={data.email}
          className="modal__input"
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
      </label>

      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          id="login-password"
          type="password"
          value={data.password}
          className="modal__input"
          placeholder="Password"
          onChange={handleChange}
          name="password"
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
