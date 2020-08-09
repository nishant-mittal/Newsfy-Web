import React from "react";
import "./Covid.css";

const Covid = ({ title, data, type }) => {
  const numberFormatter = (num) => {
    if (num) {
      let num_parts = num.toString().split(".");
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return num_parts.join(".");
    }

    if (num === 0) {
      return num;
    }
  };

  return (
    <div className="covid">
      <p style={{ fontSize: "1rem" }}>{title}</p>
      <div className="case">
        <p>Confirmed</p>
        <p style={{ color: "#E86F18", fontWeight: "bold" }}>
          {numberFormatter(data[`${type}Confirmed`])}
        </p>
      </div>
      <div className="case">
        <p>Deaths</p>
        <p style={{ color: "#E84118", fontWeight: "bold" }}>
          {numberFormatter(data[`${type}Deaths`])}
        </p>
      </div>
      <div className="case">
        <p>Recovered</p>
        <p style={{ color: "#0AA523", fontWeight: "bold" }}>
          {numberFormatter(data[`${type}Recovered`])}
        </p>
      </div>
    </div>
  );
};

export default Covid;
