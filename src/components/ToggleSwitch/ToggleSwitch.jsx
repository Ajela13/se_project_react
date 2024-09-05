import { useContext, useState } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  console.log("toggle");
  const { currentTemperature, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  console.log(currentTemperature);
  return (
    <label htmlFor="toggle" className="switch">
      <input
        id="toggle"
        type="checkbox"
        className="switch__box"
        onChange={handleToggleSwitchChange}
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
