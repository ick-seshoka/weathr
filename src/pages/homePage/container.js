import { connect } from "react-redux";

import { getUserLocation } from "../../modules/location";

import HomePage from "./home";

const mapDispatchToProps = {
  getUserLocation,
};

export default connect(null, mapDispatchToProps)(HomePage);
