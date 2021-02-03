import React from "react";

import Card from "./Card";

import {
  Container,
  CloudRain,
  CloudSun,
  Sun,
  CloudRainThunder,
} from "./styles";

const Forecast = () => (
  <Container>
    <Card day="Mon" temperature="14" IconComponent={CloudSun} />
    <Card day="Tue" temperature="21" IconComponent={CloudRain} />
    <Card day="Wed" temperature="19" IconComponent={CloudRainThunder} />
    <Card day="Thu" temperature="25" IconComponent={Sun} />
    <Card day="Fri" temperature="20" IconComponent={CloudSun} />
    <Card day="Sat" temperature="23" IconComponent={Sun} />
    <Card day="Sun" temperature="20" IconComponent={CloudSun} />
  </Container>
);

export default Forecast;
