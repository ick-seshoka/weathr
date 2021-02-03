import React from "react";

import {
  Container,
  MinTemperature,
  MaxTemperature,
  HumidityIcon,
  WindspeedIcon,
} from "./styles";

import Card from "./card";

const Forecast = () => (
  <Container>
    <Card iconTitle="21" cardTitle="Max" degrees />
    <Card iconTitle="9" cardTitle="Min" degrees />
    <Card IconComponent={HumidityIcon} cardTitle="40%" />
    <Card IconComponent={WindspeedIcon} cardTitle="4.6" />
  </Container>
);

export default Forecast;
