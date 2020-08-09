import { useState, useEffect } from "react";
import axios from "axios";

const useLocation = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("https://json.geoiplookup.io/").then((res) => {
      setData(res.data);
    });
  }, []);

  return data;
};

export default useLocation;
