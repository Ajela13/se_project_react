import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ handleUpdateProfileClick }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="sideBar">
      <div className="sideBar__user-info">
        <img
          src={currentUser.avatar}
          alt="Terrence Tegegne avatar"
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
      <button className="sideBar__LogOut">Log out</button>
    </div>
  );
}

export default SideBar;
