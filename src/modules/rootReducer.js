import { combineReducers } from "redux";

import { weatherDetailsReducer } from "./weatherDetails";

const rootReducer = combineReducers({ weatherDetails: weatherDetailsReducer });

export default rootReducer;
