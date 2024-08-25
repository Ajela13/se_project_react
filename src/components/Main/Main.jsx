import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
function Main({ weatherData }) {
  return (
    <div className="main">
      <div className="main__content">
        <WeatherCard temperature={weatherData.temperature} />
        <p className="main__temperature">
          Today is {weatherData.temperature}&deg;F / You may want to wear:
        </p>
        <ul className="main__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return <ItemCard key={item._id} item={item} />;
            })}
        </ul>
      </div>
    </div>
  );
}

export default Main;
