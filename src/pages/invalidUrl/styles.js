import styled from "styled-components";

import { Link } from "react-router-dom";
import Emoji from "../../components/Emoji";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  justify-items: center;

  @media screen and (max-width: 47.9375em) {
    padding: 0 1.5em;
  }

  @media screen and (min-width: 48em) {
    padding: 0 3em;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  color: #373737;
  font-size: 3.125em;
  margin-bottom: 1.1875em;

  @media screen and (max-width: 47.9375em) {
    font-size: 2.275em;
  }
`;

export const Paragraph = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 300;
  color: #373737;
  font-size: 1.5625em;
  max-width: 50%;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 2.926em;

  @media screen and (max-width: 47.9375em) {
    font-size: 1.265em;
    max-width: 80%;
  }
`;

export const ViewWeatherButton = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 1.2625em;
  width: 10.125em;
  height: 2.375em;
  background-color: #4a90e2;
  box-shadow: 0 3px 13px 0 rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 2.375em;
  transform: scale(1);
  transition: transform 0.05s ease-in;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 47.9375em) {
    font-size: 1.075em;
  }
`;

export const EyesIcon = styled(Emoji)``;

export const BlushFaceIcon = styled(Emoji)``;

export const WeathrIcon = styled(Emoji)``;
