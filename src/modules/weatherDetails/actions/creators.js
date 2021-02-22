import * as actions from "./types";

export const getWeatherDetails = () => {
  return { type: actions.GET_WEATHER_DETAILS };
};

export const setWeatherDetails = (weatherDetails) => {
  return { type: actions.SET_WEATHER_DETAILS, payload: { weatherDetails } };
};
