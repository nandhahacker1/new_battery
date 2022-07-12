import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BatteryDetails from "./Pages/BatteryDetails";
import Home from "./Pages/Home";
import { GlobalContext } from "./context/GlobalState";
import axios from "axios";
import './App.css'


const App = () => {
  const { setBatteryData } = useContext(GlobalContext);
  const apiLink =
    "https://f2byongc84.execute-api.eu-central-1.amazonaws.com/webdev_test_fetch_batteries";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiLink);
      setBatteryData(response.data);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<BatteryDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
