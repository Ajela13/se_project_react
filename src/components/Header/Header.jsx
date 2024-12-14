import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useContext, useState, useEffect } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { WeatherContext } from "../../contexts/WeatherContext";
import { AuthContext } from "../../contexts/AuthContext";

function Header() {
  const { currentUser, isLoggedIn } = useContext(AuthContext);
  const [imageError, setImageError] = useState(false);
  const { handleAddClick, handleLoginClick, handleRegisterClick } =
    useContext(ModalContext);
  const { weatherData } = useContext(WeatherContext);
  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageError(false);
  };
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const placeholderLetter = currentUser?.name?.[0]?.toUpperCase() || "?";
  useEffect(() => {
    setImageError(false);
  }, [currentUser.avatar]);

  const renderUserInfo = () => {
    if (isLoggedIn) {
      return (
        <>
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>
          <Link to="/profile" className="header__user-link">
            <div className="header__user">
              <p className="header__username">{currentUser.name} </p>
              {imageError ? (
                <p className="header__user-placeholder">{placeholderLetter}</p>
              ) : (
                <img
                  src={currentUser.avatar}
                  alt="avatar"
                  className="header__avatar"
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                />
              )}
            </div>
          </Link>
        </>
      );
    }

    return (
      <div className="header__credentials">
        <button className="header__signup" onClick={handleRegisterClick}>
          Sing Up
        </button>

        <button className="header__login" onClick={handleLoginClick}>
          Log in
        </button>
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
