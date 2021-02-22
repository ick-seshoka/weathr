import { connect } from "react-redux";
import {
  getLocationError,
  getUserCity,
  getUserCountryCode,
  getUserCountryFlag,
  getUserLoading,
} from "../../modules/location";
import Location from "./Location";

const mapStateToProps = (state) => ({
  cityName: getUserCity(state),
  countryCode: getUserCountryCode(state),
  flag: getUserCountryFlag(state),
  loading: getUserLoading(state),
  error: getLocationError(state),
});

export default connect(mapStateToProps)(Location);
