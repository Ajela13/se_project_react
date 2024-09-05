import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { useContext } from "react";

import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const filterOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
  const { currentTemperature } = useContext(CurrentTemperatureUnitContext);

  const weatherOption = filterOptions[0];

  return (
    <div className="weatherCard">
      <p className="weatherCard__temperature">
        {currentTemperature === "F"
          ? weatherData.temperature.F
          : weatherData.temperature.C}
        &deg;{currentTemperature}
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
