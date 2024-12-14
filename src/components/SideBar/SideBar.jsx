import "./SideBar.css";
import { useContext, useState, useEffect } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { AuthContext } from "../../contexts/AuthContext";
function SideBar() {
  const { handleUpdateProfileClick } = useContext(ModalContext);
  const { handleSignOut, currentUser } = useContext(AuthContext);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageError(false);
  };

  useEffect(() => {
    setImageError(false);
  }, [currentUser.avatar]);

  const placeholderLetter = currentUser?.name?.[0]?.toUpperCase() || "?";

  return (
    <div className="sideBar">
      <div className="sideBar__user-info">
        {imageError ? (
          <p className="sideBar__user-placeholder">{placeholderLetter}</p>
        ) : (
          <img
            src={currentUser.avatar}
            alt="avatar"
            className="sideBar__avatar"
            onError={handleImageError} // Trigger the error handler on image failure
            onLoad={handleImageLoad} // Reset error state when image loads successfully
          />
        )}
        <p className="sideBar__username">{currentUser.name}</p>
      </div>
      <button
        className="sideBar__update-profile"
        onClick={handleUpdateProfileClick}
      >
        Change profile data
      </button>
      <button className="sideBar__LogOut" onClick={handleSignOut}>
        Log out
      </button>
    </div>
  );
}

export default SideBar;
