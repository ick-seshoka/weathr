import React from "react";

import Degrees from "./degrees";
import Forecast from "./forecast";

import { Container } from "./styles";

const Temperature = () => (
  <Container>
    <Degrees />
    <Forecast />
  </Container>
);

export default Temperature;
