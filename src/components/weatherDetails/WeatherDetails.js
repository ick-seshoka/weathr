import React from "react";

import Date from "./date";
import Details from "./details";

import { Container } from "./styles";

const WeatherDetails = () => (
  <Container>
    <Date />
    <Details />
  </Container>
);

export default WeatherDetails;
