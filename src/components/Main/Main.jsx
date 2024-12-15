import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { WeatherContext } from "../../contexts/WeatherContext";
import { ClothingItemsContext } from "../../contexts/ClothingItemsContext";
function Main() {
  const { currentTemperature } = useContext(CurrentTemperatureUnitContext);
  const { weatherData } = useContext(WeatherContext);
  const { clothingItems } = useContext(ClothingItemsContext);

  return (
    <main className="main">
      <div className="main__content">
        <WeatherCard />
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
              return <ItemCard item={item} />;
            })}
        </ul>
      </div>
    </main>
  );
}

export default Main;
