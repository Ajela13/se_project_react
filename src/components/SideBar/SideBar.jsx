import "./SideBar.css";
import avatar from "../../assets/avatar.png";

function SideBar() {
  return (
    <div className="sideBar">
      <img
        src={avatar}
        alt="Terrence Tegegne avatar"
        className="sideBar__avatar"
      />
      <p className="sideBar__username">Terrence Tegegne</p>
    </div>
  );
}

export default SideBar;
