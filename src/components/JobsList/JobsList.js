import React, { useState, useEffect } from "react";
import "./JobsList.css";
import JobsComponent from "../JobsComponent/JobsComponent";
import Loading from "../Loading/Loading";
import axios from "axios";

const JobsList = ({ country, region, district }) => {
  const [jobData, setJobData] = useState();

  useEffect(() => {
    console.log(country + "  " + region + "  " + district);
    axios
      .get(
        `https://api.adzuna.com/v1/api/jobs/${
          country != null ? country.toLowerCase() : null
        }/search/1`,
        {
          params: {
            app_id: "f79ce4b1",
            app_key: "9ec31c97b7bc08e4e49614e32303ca84",
            max_days_old: 30,
            results_per_page: 30,
            where: region,
          },
        }
      )
      .then((res) => {
        setJobData(res.data.results);
      });
  }, [country, region, district]);

  return (
    <section id="jobsList">
      <h2 id="jobsHeader">{`Jobs in ${district}`}</h2>
      {jobData ? (
        <div className="jobs">
          {jobData.map((jobs) => (
            <JobsComponent jobData={jobs} key={jobs.id} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );

  // return jobData ? (
  //   <div id="jobsList">
  //     <h2 id="jobsHeader">{`Jobs in ${district}`}</h2>
  //     <div className="jobs">
  //       {jobData.map((jobs) => (
  //         <JobsComponent jobData={jobs} key={jobs.id} />
  //       ))}
  //     </div>
  //   </div>
  // ) : (
  //   <Loading />
  // );
};

export default JobsList;
