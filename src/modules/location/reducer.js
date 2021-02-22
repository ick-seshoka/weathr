import * as actions from "./actions/types";

const initialState = {
  userLocation: null,
  loading: false,
  error: null,
};

export function locationReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_USER_LOCATION: {
      const {
        payload: { location },
      } = action;

      return { ...state, userLocation: location };
    }

    case actions.SET_USER_LOCATION_LOADING: {
      const {
        payload: { loading },
      } = action;

      return { ...state, loading };
    }

    case actions.SET_USER_LOCATION_ERROR: {
      const {
        payload: { error },
      } = action;

      return { ...state, error };
    }

    default:
      return state;
  }
}
