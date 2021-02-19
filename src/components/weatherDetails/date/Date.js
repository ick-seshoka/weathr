import React from "react";

import { dateNow } from "../../../helpers";

import { Container, Paragraph } from "./styles";

const Date = () => (
  <Container>
    <Paragraph>Today, {dateNow}</Paragraph>
  </Container>
);

export default Date;
