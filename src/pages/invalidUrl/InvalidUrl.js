import React from "react";

import Footer from "../../components/footer";

import {
  Container,
  ContentWrap,
  Title,
  Paragraph,
  ViewWeatherButton,
  EyesIcon,
  BlushFaceIcon,
  WeathrIcon,
} from "./styles";

const InvalidUrl = () => (
  <Container>
    <ContentWrap>
      <Title>
        Page not found
        <EyesIcon>👀</EyesIcon>
      </Title>
      <Paragraph>
        Weather information is not available on the page you requested, it seems
        like you might be looking for Mars, lets wait on Elon’s go ahead{" "}
        <BlushFaceIcon>🤭</BlushFaceIcon>
      </Paragraph>
      <ViewWeatherButton to="/">
        <WeathrIcon>🌤</WeathrIcon>
        View Forcast
      </ViewWeatherButton>
    </ContentWrap>
    <Footer />
  </Container>
);

export default InvalidUrl;
