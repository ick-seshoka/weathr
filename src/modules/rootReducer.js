import { combineReducers } from "redux";

import { weatherDetailsReducer } from "./weatherDetails";
import { locationReducer } from "./location";

const rootReducer = combineReducers({
  weatherDetails: weatherDetailsReducer,
  location: locationReducer,
});

export default rootReducer;
