export const getUserCity = (state) => state.location?.userLocation?.city || "";
export const getUserCountryCode = (state) =>
  state.location?.userLocation?.country_code || "";
export const getUserCountryFlag = (state) =>
  state.location?.userLocation?.flag || "";
export const getUserLoading = (state) => state.location?.loading || false;
