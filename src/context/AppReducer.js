const reducer = (state, action) => {
  switch (action.type) {
    case "SET_BATTERYDATA":
      return {
        batteryDetails: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
