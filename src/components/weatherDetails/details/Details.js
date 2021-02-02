import React from "react";

import Temperature from "./temperature.js";
import Icon from "./icon";

import { Container } from "./styles";

const Details = () => (
  <Container>
    <Temperature />
    <Icon />
  </Container>
);

export default Details;
