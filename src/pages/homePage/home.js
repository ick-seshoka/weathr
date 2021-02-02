import React from "react";

import Header from "../../components/header";
import WeatherDetails from "../../components/weatherDetails";

import { Main, Container } from "./styles";

const HomePage = () => (
  <Container>
    <Main>
      <Header />
      <WeatherDetails />
    </Main>
  </Container>
);

export default HomePage;
