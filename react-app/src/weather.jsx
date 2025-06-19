import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weather, setWeather] = useState({
    city: "Faisalabad",
    temp: 37.94,
    min_temp: 37.94,
    max_temp: 37.94,
    feels_like: 37.36,
    humidity: 13,
    weather: "clear sky",
  });
  let updateInfo = (newinfo) => {
    setWeather(newinfo);
  };
  return (
    <div cassName="weather-app-container">
        
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weather} />
    </div>
  );
}
