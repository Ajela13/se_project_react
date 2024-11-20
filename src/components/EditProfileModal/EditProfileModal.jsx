import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, handleUpdateProfile }) {
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
  console.log(data);

  useEffect(() => {
    if (isOpen) {
      setData({ name: "", avatar: "" });
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateProfile(data);
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <label htmlFor="update-name" className="modal__label">
        Name *
        <input
          id="update-name"
          type="text"
          value={data.name}
          className="modal__input"
          placeholder="name"
          onChange={handleChange}
          name="name"
        />
      </label>

      <label htmlFor="update-avatar" className="modal__label">
        Avatar *
        <input
          type="url"
          className="modal__input"
          id="update-avatar"
          value={data.avatar}
          placeholder="Avatar"
          onChange={handleChange}
          name="avatar"
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
