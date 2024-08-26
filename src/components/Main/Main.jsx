import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
function Main({ weatherData, handleCardClick }) {
  return (
    <div className="main">
      <div className="main__content">
        <WeatherCard weatherData={weatherData} />
        <p className="main__temperature">
          Today is {weatherData.temperature}&deg;F / You may want to wear:
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
                  OnCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Main;
