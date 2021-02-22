import * as actions from "./types";

export const getUserLocation = () => {
  return { type: actions.GET_USER_LOCATION };
};

export const setUserLocation = (location) => {
  return { type: actions.SET_USER_LOCATION, payload: { location } };
};

export const setUserLocationError = (error) => {
  return { type: actions.SET_USER_LOCATION_ERROR, payload: { error } };
};

export const setUserLocationLoading = (loading) => {
  return { type: actions.SET_USER_LOCATION_LOADING, payload: { loading } };
};
