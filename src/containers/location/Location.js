import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  CityName,
  PinIcon,
  Pipe,
  CountryCode,
  FlagIcon,
  ErrorMessage,
  SadIcon,
} from "./styles";
import DotPulse from "../../components/loader/dotPulse";

const Location = ({ cityName, countryCode, flag, loading, error }) => {
  return (
    <Container>
      {loading && <DotPulse />}
      {!loading && !error && (
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
      {error && (
        <ErrorMessage>
          <SadIcon>😕</SadIcon>
          No location
        </ErrorMessage>
      )}
    </Container>
  );
};

Location.propsTypes = {
  cityName: PropTypes.string,
  countryCode: PropTypes.string,
  flag: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.any,
};

export default Location;
