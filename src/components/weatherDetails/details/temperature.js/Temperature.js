import React from "react";

import Degrees from "./degrees";
import Details from "./details";

import { Container } from "./styles";

const Temperature = () => (
  <Container>
    <Degrees />
    <Details />
  </Container>
);

export default Temperature;
