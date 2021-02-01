import React from "react";

import { Container, LogoLink, Logo, Location } from "./styles";

const Header = () => (
  <Container>
    <LogoLink to="/">
      <Logo />
    </LogoLink>
    <Location>Sandon | ZA</Location>
  </Container>
);

export default Header;
