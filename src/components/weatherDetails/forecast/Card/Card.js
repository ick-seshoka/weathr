import React from "react";

import PropTypes from "prop-types";

import { Container, Title, Temperature } from "./styles";

const Card = ({ IconComponent, day, temperature, isActive }) => (
  //
  //refactor isActive prop to global component prop or something in that order
  //
  <Container active={isActive}>
    <Title active={isActive}>{day}</Title>
    {IconComponent && <IconComponent />}
    <Temperature active={isActive}>{temperature}</Temperature>
  </Container>
);

Card.propTypes = {
  day: PropTypes.string,
  temperature: PropTypes.string,
  IconComponent: PropTypes.any,
  isActive: PropTypes.bool,
};

export default Card;
