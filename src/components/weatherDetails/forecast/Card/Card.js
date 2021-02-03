import React from "react";

import PropTypes from "prop-types";

import { Container, Title, Temperature } from "./styles";

const Card = ({ IconComponent, day, temperature }) => (
  <Container>
    <Title>{day}</Title>
    {IconComponent && <IconComponent />}
    <Temperature>{temperature}</Temperature>
  </Container>
);

Card.propTypes = {
  day: PropTypes.string,
  temperature: PropTypes.string,
  IconComponent: PropTypes.any,
};

export default Card;
