import React from "react";

import Header from "../../components/header";
import WeatherInfo from "../../components/weatherInfo";

import { Main } from "./styles";

const HomePage = () => (
  <Main>
    <Header />
    <WeatherInfo />
  </Main>
);

export default HomePage;
