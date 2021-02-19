import React from "react";

import { getWeekDay } from "../../../helpers";

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
    <Card
      isActive={getWeekDay() === "Mon"}
      day="Mon"
      temperature="14"
      IconComponent={CloudSun}
    />
    <Card
      isActive={getWeekDay() === "Tue"}
      day="Tue"
      temperature="21"
      IconComponent={CloudRain}
    />
    <Card
      isActive={getWeekDay() === "Wed"}
      day="Wed"
      temperature="19"
      IconComponent={CloudRainThunder}
    />
    <Card
      isActive={getWeekDay() === "Thu"}
      day="Thu"
      temperature="25"
      IconComponent={Sun}
    />
    <Card
      isActive={getWeekDay() === "Fri"}
      day="Fri"
      temperature="20"
      IconComponent={CloudSun}
    />
    <Card
      isActive={getWeekDay() === "Sat"}
      day="Sat"
      temperature="23"
      IconComponent={Sun}
    />
    <Card
      isActive={getWeekDay() === "Sun"}
      day="Sun"
      temperature="20"
      IconComponent={CloudSun}
    />
  </Container>
);

export default Forecast;
