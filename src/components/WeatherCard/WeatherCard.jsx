import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const filterOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
  const weatherOption = filterOptions[0];

  return (
    <div className="weatherCard">
      <p className="weatherCard__temperature">
        {weatherData.temperature} &deg; F
      </p>
      <img
        className="weatherCard__image"
        src={weatherOption?.url}
        alt={`${weatherOptions?.day ? "day" : "night"} time ${
          weatherOption?.condition
        }`}
      />
    </div>
  );
}

export default WeatherCard;
