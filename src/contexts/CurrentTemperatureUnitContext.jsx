import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperature: "",
  handleToggleSwitchChange: () => {},
});

export { CurrentTemperatureUnitContext };
