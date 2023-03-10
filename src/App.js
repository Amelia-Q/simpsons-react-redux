import React, { useEffect } from "react";
import axios from "axios";
import Simpsons from "./components/Simpsons";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const getApiData = async () => {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    results.data.forEach((item) => {
      item.uniqueId = Math.random();
    });

    dispatch({ type: "SET_API_DATA", payload: results.data });
  };

  useEffect(() => {
    getApiData();
  }, []); //run once.

  return (
    <>
      <Simpsons getApiData={getApiData} />
    </>
  );
};

export default App;
