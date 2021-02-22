import { connect } from "react-redux";
import {
  getUserCity,
  getUserCountryCode,
  getUserCountryFlag,
} from "../../modules/location";
import Location from "./Location";

const mapStateToProps = (state) => ({
  cityName: getUserCity(state),
  countryCode: getUserCountryCode(state),
  flag: getUserCountryFlag(state),
});

export default connect(mapStateToProps)(Location);
