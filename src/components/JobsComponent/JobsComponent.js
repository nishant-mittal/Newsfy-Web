import React from "react";
import "./JobsComponent.css";
const JobsComponent = ({ jobData }) => {
  const date = new Date(jobData.created);
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

  return (
    <div className="job">
      <p className="job-title">{jobData.title}</p>
      <p className="job-name">{jobData.company.display_name}</p>
      <p className="job-location">{`${jobData.location.display_name}`}</p>
      <a
        className="job-apply"
        href={jobData.redirect_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply{"  "}
        <i
          class="fas fa-external-link-alt"
          style={{ fontSize: "0.8rem", paddingLeft: "4px" }}
        ></i>
      </a>
      <p className="job-date">{`posted on ${dateFormatted}`}</p>
    </div>
  );
};

export default JobsComponent;
