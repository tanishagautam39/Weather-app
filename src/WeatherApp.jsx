import InfoBox from "./InfoBox";
import {useState} from "react";
import SearchBox from "./SearchBox";

export default function WeatherApp () {
    const [weatherInfo, setweatherInfo] = useState({
        city:"Wonderland",
      feelslike: 24.84,
      temp: 25.05,
      tempMin: 25.05,
      tempMax: 25.05,
      humidity: 47,
      weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setweatherInfo(newInfo);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h1 style={{ fontSize: "2rem", color: "#00000", marginTop: "1rem" }}>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            {weatherInfo && weatherInfo.city && (
            <InfoBox info={weatherInfo}/>
            )}
        </div>

    )
}