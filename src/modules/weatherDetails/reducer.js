import * as actions from "./actions/types";

const initialState = {
  weatherDetails: null,
};

export function weatherDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_WEATHER_DETAILS: {
      const {
        payload: { weatherDetails },
      } = action;

      return { ...state, weatherDetails };
    }

    default:
      return state;
  }
}
