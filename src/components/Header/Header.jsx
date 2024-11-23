import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
function Header({
  handleAddClick,
  weatherData,
  handleLoginClick,
  handleRegisterClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const renderUserInfo = () => {
    if (isLoggedIn) {
      if (currentUser?.avatar) {
        return (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Add clothes
            </button>
            <Link to="/profile" className="header__user">
              <div className="header__user">
                <p className="header__username">{currentUser.name} </p>
                <img
                  src={currentUser.avatar}
                  alt="avatar"
                  className="header__avatar"
                />
              </div>
            </Link>
          </>
        );
      }

      const placeholderLetter = currentUser?.name?.[0]?.toUpperCase() || "?";
      return (
        <>
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>
          <Link to="/profile" className="header__user">
            <div className="header__user">
              <p className="header__username">{currentUser.name} </p>
              <p className="header__user-placeholder">{placeholderLetter}</p>
            </div>
          </Link>
        </>
      );
    }

    return (
      <div className="header__credentials">
        <Link to="/signup">
          <button className="header__signup" onClick={handleRegisterClick}>
            Singn Up
          </button>
        </Link>
        <Link to="/login">
          <button className="header__login" onClick={handleLoginClick}>
            Log in
          </button>
        </Link>
      </div>
    );
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate} , {weatherData.city}
      </p>
      <ToggleSwitch />
      {renderUserInfo()}
    </header>
  );
}

export default Header;
