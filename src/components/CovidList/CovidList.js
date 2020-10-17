import React, { useState, useEffect } from "react";
import axios from "axios";
import Covid from "../Covid/Covid";
import "./CovidList.css";

const findCountry = (data, country) => {
  return data.find((d) => d.CountryCode === country);
};

const CovidList = ({ location }) => {
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    axios.get("https://api.covid19api.com/summary").then((res) => {
      const country = findCountry(res.data.Countries, location.country_code);
      setCountryData(country);
    });
  }, [location]);

  return countryData ? (
    <div className="covid-list">
       <h2>{`COVID-19 cases in ${location.country_name}`}</h2>
      <div className="covid-container">
        <Covid title="Today" data={countryData} type="New" />
        <Covid title="Total" data={countryData} type="Total" />
      </div>
    </div>
  ) : null;
};

export default CovidList;
