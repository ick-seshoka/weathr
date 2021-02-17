import React from "react";

import Header from "../../components/header";
import WeatherDetails from "../../components/weatherDetails";
import Footer from "../../components/footer";

import { Main, Container } from "./styles";
import { Desktop } from "../../styles";

const HomePage = () => (
  <Container>
    <Main>
      <Header />
      <Desktop>
        <WeatherDetails />
      </Desktop>
    </Main>
    <Footer />
  </Container>
);

export default HomePage;
