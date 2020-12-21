import React from "react";
import "./Scroll.css";
import { animateScroll } from "react-scroll";
const Scroll = () => {
  let scroll = animateScroll;

  const scrollToJobs = () => {
    scroll.scrollMore(3000);
  };

  return (
    <div className="scroller">
      <p className="scroller-text" onClick={scrollToJobs}>
        Looking for a job? We can help!
      </p>
    </div>
  );
};

export default Scroll;
