import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ handleUpdateProfileClick, handleSignOut }) {
  const { currentUser } = useContext(CurrentUserContext);
  if (currentUser?.avatar) {
    return (
      <>
        <div className="sideBar">
          <div className="sideBar__user-info">
            <img
              src={currentUser.avatar}
              alt="avatar"
              className="sideBar__avatar"
            />
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
      </>
    );
  }

  const placeholderLetter = currentUser?.name?.[0]?.toUpperCase() || "?";
  return (
    <>
      <div className="sideBar">
        <div className="sideBar__user-info">
          <p className="sideBar__user-placeholder">{placeholderLetter}</p>
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
    </>
  );
}

export default SideBar;
