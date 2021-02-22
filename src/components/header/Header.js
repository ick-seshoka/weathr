import React from "react";

import Location from "../../containers/location";

import { Container, LogoLink, Logo } from "./styles";

const Header = () => (
  <Container>
    <LogoLink to="/">
      <Logo />
    </LogoLink>
    <Location />
  </Container>
);

export default Header;
