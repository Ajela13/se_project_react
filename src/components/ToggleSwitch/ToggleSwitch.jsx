import { useState } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  console.log("toggle");
  const [currentTemperature, handleToggleSwitchChange] = useState("C");

  const handleChange = (e) => {
    if (currentTemperature == "C") handleToggleSwitchChange("F");
    if (currentTemperature == "F") handleToggleSwitchChange("C");
  };
  console.log(currentTemperature);
  return (
    <label htmlFor="toggle" className="switch">
      <input
        id="toggle"
        type="checkbox"
        className="switch__box"
        onChange={handleChange}
      />
      <span
        className={
          currentTemperature === "F"
            ? "switch__slider switch__slider-f"
            : "switch__slider switch__slider-c"
        }
      >
        <p
          className={`switch__temp-f  ${
            currentTemperature === "F" && "switch__active"
          }`}
        >
          F
        </p>
        <p
          className={`switch__temp-c  ${
            currentTemperature === "C" && "switch__active"
          }`}
        >
          C
        </p>
      </span>
    </label>
  );
}

export default ToggleSwitch;
