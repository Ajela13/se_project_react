import "./WeatherCard.css";
import sunny from "../../assets/sunny.svg";
function WeatherCard({ temperature }) {
  return (
    <div className="weatherCard">
      <p className="weatherCard__temperature">{temperature} &deg; F</p>
      <img className="weatherCard__image" src={sunny} alt="weather image" />
    </div>
  );
}

export default WeatherCard;
