import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";

const Weather = ({ lat, lon }) => {
  const [data, setdata] = useState();
  const [load, setLoad] = useState(false);

  const date = new Date();
  const dayPrefix = [
    "st",
    "nd",
    "rd",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "st",
    "nd",
    "rd",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateFormatted = `${date.getDate()}${dayPrefix[date.getDate() - 1]} ${
    months[date.getMonth()]
  }, ${date.getFullYear()}`;

  useEffect(() => {
    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          lat: lat,
          lon: lon,
          appid: "19dc6f2c4e8a09557875cf37ffbe85b7",
          units: "metric",
        },
      })
      .then((res) => {
        setdata(res.data);
        setLoad(true);
      }).catch((err) => {console.log(err)})
  }, [lat, lon]);

  return load ? (
    <div className="weather">
      <h2 className="date">{dateFormatted}</h2>
      <div className="weather-component">
        <div className="weather-icon">
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
          />
        </div>
        <div className="weather-details">
          <h2>
            {Math.round(data.main.temp)}{" "}
            <span style={{ color: "#787878" }}>&#730;C</span>
          </h2>
          <p>{data.weather[0].description}</p>
          <p style={{ opacity: "0.6" }}>{data.name}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Weather;
