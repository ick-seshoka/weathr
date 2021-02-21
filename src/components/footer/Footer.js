import React from "react";

import { Container, LogoLink, Logo, CopyInfo } from "./styles";

const Footer = () => (
  <Container>
    <LogoLink to="/">
      <Logo />
    </LogoLink>
    <CopyInfo>Weathr | by Creatr. © 2021 </CopyInfo>
  </Container>
);

export default Footer;
