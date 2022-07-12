import React, { createContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  batteryDetails: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setBatteryData = (data) => {
    dispatch({
      type: "SET_BATTERYDATA",
      payload: data,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        batteryDetails: state.batteryDetails,
        setBatteryData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
