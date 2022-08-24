import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data,setData] = useState(null)

  const searchCity = async (event) => {
    try {
      if (event.key === "Enter") {
        const key = "76dc95e283bf9730745671aa1099004c";
        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=${key}&lang=tr&units=metric`
          )
          // .then((res) => console.log(res.data));
          .then((res) => setData(res.data));
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Hava Durumu</h1>
        <input
          type="text"
          value={searchValue}
          placeholder="Şehir Giriniz.."
          onChange={(e ) => setSearchValue(e.target.value)}
          onKeyPress={searchCity}
        />
      </div>
      <div className="content" >
        {data && 
          <div>
            <div className="city" id="city">{data.name}</div>
            <div className="temp">{data.main.temp}°C</div>
            <div className="desc">{data.weather[0].description.toUpperCase()}</div>
            <div className="minmax">Min : {data.main.temp_min}°C /  Max: {data.main.temp_max} °C</div>
          </div>
        }
      </div>
    </div>
  );
};

export default App;