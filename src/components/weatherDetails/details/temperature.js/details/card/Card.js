import React from "react";
import PropTypes from "prop-types";

import { Container, Icon, Title } from "./styles";

const Card = ({ IconComponent, iconTitle, cardTitle, degrees }) => (
  <Container>
    {iconTitle && <Icon hasDegreeSymbol={degrees}>{iconTitle}</Icon>}
    {IconComponent && (
      <Icon>
        <IconComponent />
      </Icon>
    )}
    {cardTitle && <Title>{cardTitle}</Title>}
  </Container>
);

Card.propTypes = {
  IconComponent: PropTypes.any,
  iconTitle: PropTypes.string,
  cardTitle: PropTypes.string,
};

export default Card;
