import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherData,
  handleCardClick,
  clothingItems,
  onCardLike,
  isLoggedIn,
}) {
  const { currentTemperature } = useContext(CurrentTemperatureUnitContext);
  return (
    <main className="main">
      <div className="main__content">
        <WeatherCard weatherData={weatherData} />
        <p className="main__temperature">
          Today is{" "}
          {currentTemperature === "F"
            ? weatherData.temperature.F
            : weatherData.temperature.C}
          &deg;{currentTemperature} / You may want to wear:
        </p>
        <ul className="main__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  onCardLike={onCardLike}
                  isLoggedIn={isLoggedIn}
                />
              );
            })}
        </ul>
      </div>
    </main>
  );
}

export default Main;
