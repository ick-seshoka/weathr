import React from "react";

import Date from "./date";
import Details from "./details";
import Forecast from "./forecast";

import { Container } from "./styles";

const WeatherDetails = () => (
  <Container>
    <Date />
    <Details />
    <Forecast />
  </Container>
);

export default WeatherDetails;
