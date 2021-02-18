import React from "react";

import Date from "./date";
import Details from "./details";
import Forecast from "./forecast";

import { Desktop } from "../../styles";

import { Container } from "./styles";

const WeatherDetails = () => (
  <Container>
    <Date />
    <Details />
    <Desktop>
      <Forecast />
    </Desktop>
  </Container>
);

export default WeatherDetails;
