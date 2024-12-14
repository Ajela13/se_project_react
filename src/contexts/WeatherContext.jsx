// src/contexts/WeatherProvider.js
import React, { createContext, useState, useEffect } from "react";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import { coordinates, APIkey } from "../utils/constants";

export const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({
    temperature: "",
    type: "",
    city: "",
  });

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch(console.error);
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
