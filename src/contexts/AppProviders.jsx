import { CurrentTemperatureUnitProvider } from "./CurrentTemperatureUnitContext";
import { ModalProvider } from "./ModalContext";
import { AuthProvider } from "./AuthContext";
import { ClothingItemsProvider } from "./ClothingItemsContext";
import { WeatherProvider } from "./WeatherContext";

const AppProviders = ({ children }) => {
  return (
    <WeatherProvider>
      <CurrentTemperatureUnitProvider>
        <ModalProvider>
          <ClothingItemsProvider>
            <AuthProvider>{children}</AuthProvider>
          </ClothingItemsProvider>
        </ModalProvider>
      </CurrentTemperatureUnitProvider>
    </WeatherProvider>
  );
};

export default AppProviders;
