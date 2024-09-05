import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, handleCardClick }) {
  const { currentTemperature } = useContext(CurrentTemperatureUnitContext);
  console.log(currentTemperature);
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
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </div>
    </main>
  );
}

export default Main;
