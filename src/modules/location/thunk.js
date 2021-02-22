import { axios } from "../../helpers/axios";

import * as actions from "./actions/creators";
import { locationConfig } from "../../api/location";

export const getUserLocation = () => async (dispatch) => {
  try {
    dispatch(actions.getUserLocation());
    dispatch(actions.setUserLocationLoading(true));
    const { data } = await axios(locationConfig);
    dispatch(actions.setUserLocation(data));
  } catch (e) {
    debugger;
    dispatch(actions.setUserLocationError(e));
  } finally {
    dispatch(actions.setUserLocationLoading(false));
  }
};
