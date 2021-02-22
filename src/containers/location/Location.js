import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  CityName,
  PinIcon,
  Pipe,
  CountryCode,
  FlagIcon,
} from "./styles";

const Location = ({ cityName, countryCode, flag }) => {
  return (
    <Container>
      <CityName>
        <PinIcon>📍</PinIcon> {cityName}
      </CityName>
      <Pipe>|</Pipe>
      <CountryCode>
        <FlagIcon src={flag || ""} />
        {countryCode}
      </CountryCode>
    </Container>
  );
};

Location.propsTypes = {
  cityName: PropTypes.string,
  countryCode: PropTypes.string,
  flag: PropTypes.string,
};

export default Location;
