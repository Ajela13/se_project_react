// import React from "react";

// const CurrentTemperatureUnitContext = React.createContext({
//   currentTemperature: "",
//   handleToggleSwitchChange: () => {},
// });

// export { CurrentTemperatureUnitContext };

import { createContext, useState } from "react";

export const CurrentTemperatureUnitContext = createContext();

export const CurrentTemperatureUnitProvider = ({ children }) => {
  const [currentTemperature, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prev) => (prev === "F" ? "C" : "F"));
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{
        currentTemperature,
        setCurrentTemperatureUnit,
        handleToggleSwitchChange,
      }}
    >
      {children}
    </CurrentTemperatureUnitContext.Provider>
  );
};
