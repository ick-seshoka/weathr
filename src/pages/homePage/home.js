import React from "react";

import Header from "../../components/header";
import WeatherInfo from "../../components/weatherInfo";

import { Main, Container } from "./styles";

const HomePage = () => (
  <Container>
    <Main>
      <Header />
      <WeatherInfo />
    </Main>
  </Container>
);

export default HomePage;
