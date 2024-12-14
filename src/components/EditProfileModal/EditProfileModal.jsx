import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import ProfileHandler from "../../handlers/ProfileHandler";
import { AuthContext } from "../../contexts/AuthContext";

function LoginModal({ isOpen }) {
  const { handleUpdateProfile } = ProfileHandler();

  const { closeActiveModal } = useContext(ModalContext);

  const { currentUser } = useContext(AuthContext);

  const [data, setData] = useState({
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isOpen && currentUser) {
      setData({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser]);

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
      onClose={closeActiveModal}
    >
      <label htmlFor="update-name" className="modal__label">
        Name *
        <input
          id="update-name"
          type="text"
          value={data.name}
          className="modal__input"
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
