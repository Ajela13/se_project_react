import "./WeatherCard.css";
import sunny from "../../assets/day/clear.svg";
function WeatherCard({ weatherData }) {
  return (
    <div className="weatherCard">
      <p className="weatherCard__temperature">
        {weatherData.temperature} &deg; F
      </p>
      <img className="weatherCard__image" src={sunny} alt="weather image" />
    </div>
  );
}

export default WeatherCard;
