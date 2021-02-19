import React from "react";
import { Default, Mobile } from "../../styles";

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
      <Default>
        <Footer />
      </Default>
    </Container>
    <Mobile>
      <Footer />
    </Mobile>
  </>
);

export default HomePage;
