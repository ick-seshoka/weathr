import React from "react";
import { Tablet, Mobile } from "../../styles";

import Header from "../../components/header";
import WeatherDetails from "../../components/weatherDetails";
import Footer from "../../components/footer";

import { Main, Container } from "./styles";

const HomePage = () => (
  <>
    <Container>
      <Main>
        <Header />
        <WeatherDetails />
      </Main>
      <Tablet>
        <Footer />
      </Tablet>
    </Container>
    <Mobile>
      <Footer />
    </Mobile>
  </>
);

export default HomePage;
