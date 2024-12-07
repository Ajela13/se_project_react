import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { getItems, addItems, deleteItems } from "../../utils/api";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import * as auth from "../../utils/auth.js";
import * as api from "../../utils/api.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setUser] = useState({});
  const [weatherData, setWeatherData] = useState({
    temperature: "",
    type: "",
    city: "",
  });

  const [currentTemperature, setCurrentTemperatureUnit] = useState("F");

  const [activeModal, setActiveModal] = useState("");

  const [selectedCard, setSelectedCard] = useState({});

  const [clothingItems, setClothingItems] = useState([]);

  const navigate = useNavigate();

  const handleRegistration = ({ email, password, name, avatar }) => {
    auth
      .register(email, password, name, avatar)
      .then(() => {
        return auth.authorize(email, password);
      })
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          auth
            .checkToken(res.token)
            .then((userData) => {
              setUser(userData);
              setIsLoggedIn(true);
              closeActiveModal();
              navigate("/profile");
            })
            .catch((err) => {
              console.error("Failed to fetch user data:", err);
            });
        } else {
          throw new Error("Authorization token not received");
        }
      })
      .catch((err) => {
        console.error("Registration or Login failed:", err);
      });
  };

  const handleLogin = ({ email, password }) => {
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          auth
            .checkToken(res.token)
            .then((userData) => {
              setUser(userData);
              setIsLoggedIn(true);
              closeActiveModal();
              navigate("/profile");
            })
            .catch((err) => {
              console.error("Failed to fetch user data:", err);
            });
        } else {
          throw new Error("Authorization token not received");
        }
      })
      .catch((err) => {
        console.error("Login failed:", err); // Log errors for debugging
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setUser("");
  };
  const handleUpdateProfile = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");

    api
      .updateUser(name, avatar, token)
      .then(() => {
        closeActiveModal();
        setUser((user) => ({
          ...user,
          name,
          avatar,
        }));
      })
      .catch((err) => {
        console.error("Token validation failed:", err);
        setIsLoggedIn(false);
      });
  };

  const handleCardLike = ({ id, isLiked }) => {
    console.log("Selected Card:", selectedCard);
    const token = localStorage.getItem("jwt");
    // Check if this card is not currently liked
    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        api
          // the first argument is the card's id
          .addCardLike(id, token)
          .then((updatedCard) => {
            console.log("Updated Card:", updatedCard);
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        api
          // the first argument is the card's id
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch(console.error);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleAddClick = () => {
    setActiveModal("add-clothes");
  };

  const handleConfirmationDeleteClick = (card) => {
    setActiveModal("confirmation");
    setSelectedCard(card);
  };

  const handleLoginClick = () => {
    setActiveModal("Login");
  };

  const handleUpdateProfileClick = () => {
    setActiveModal("update profile");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleToggleSwitchChange = () => {
    currentTemperature === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleAddItemSubmit = ({ name, weather, imageUrl }) => {
    const token = localStorage.getItem("jwt");
    addItems(name, imageUrl, weather, token)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
      })
      .then(closeActiveModal)
      .catch((err) => console.log(err));
  };

  const handleDeleteItem = (item) => {
    const token = localStorage.getItem("jwt");
    deleteItems(item._id, token)
      .then(() => {
        setClothingItems(clothingItems.filter((card) => card._id !== item._id));
        closeActiveModal();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      auth
        .checkToken(token)
        .then((userData) => {
          setIsLoggedIn(true);
          setUser(userData);

          api.getUserData(token).then((data) => {
            console.log("User data:", data);
          });
        })
        .catch((err) => {
          console.error("Token validation failed:", err);
          setIsLoggedIn(false);
        });
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperature, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              handleLoginClick={handleLoginClick}
              handleRegisterClick={handleRegisterClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      handleCardClick={handleCardClick}
                      handleAddClick={handleAddClick}
                      handleUpdateProfileClick={handleUpdateProfileClick}
                      clothingItems={clothingItems}
                      card={selectedCard}
                      onCardLike={handleCardLike}
                      handleSignOut={handleSignOut}
                      isLoggedIn={isLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>

            <Footer />
          </div>
          <AddItemModal
            onClose={closeActiveModal}
            isOpen={activeModal === "add-clothes"}
            onAddItem={handleAddItemSubmit}
          />
          <ItemModal
            isOpen={activeModal == "preview"}
            card={selectedCard}
            onClose={closeActiveModal}
            openDeleteConfirmationModal={handleConfirmationDeleteClick}
          />
          <DeleteConfirmationModal
            isOpen={activeModal == "confirmation"}
            card={selectedCard}
            handleDeleteItem={handleDeleteItem}
            onClose={closeActiveModal}
          />
          <EditProfileModal
            isOpen={activeModal == "update profile"}
            onClose={closeActiveModal}
            handleUpdateProfile={handleUpdateProfile}
          />
          <LoginModal
            onClose={closeActiveModal}
            isOpen={activeModal == "Login"}
            handleLogin={handleLogin}
            handleRegisterClick={handleRegisterClick}
          />

          <RegisterModal
            onClose={closeActiveModal}
            isOpen={activeModal == "register"}
            handleRegistration={handleRegistration}
            handleLoginClick={handleLoginClick}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
