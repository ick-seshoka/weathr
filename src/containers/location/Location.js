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
import DotPulse from "../../components/loader/dotPulse";

const Location = ({ cityName, countryCode, flag, loading }) => {
  return (
    <Container>
      {loading ? (
        <DotPulse />
      ) : (
        <>
          <CityName>
            <PinIcon>📍</PinIcon> {cityName}
          </CityName>
          <Pipe>|</Pipe>
          <CountryCode>
            <FlagIcon src={flag || ""} />
            {countryCode}
          </CountryCode>
        </>
      )}
    </Container>
  );
};

Location.propsTypes = {
  cityName: PropTypes.string,
  countryCode: PropTypes.string,
  flag: PropTypes.string,
  loading: PropTypes.bool,
};

export default Location;
