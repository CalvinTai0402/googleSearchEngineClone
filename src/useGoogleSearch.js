import React, { useState, useEffect } from "react";
import API_KEY, { CONTEXT_KEY } from "./keys";

console.log(process.env.API_KEY);

console.log(process.env.CONTEXT_KEY);

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => setData(result));
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
