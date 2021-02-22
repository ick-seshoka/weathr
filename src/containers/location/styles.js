import styled from "styled-components";

import Emoji from "../../components/Emoji";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Paragraph = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.1em;
  font-weight: 400;
  justify-self: end;
  color: #fff;

  @media screen and (max-width: 47.9375em) {
    font-size: 0.985em;
    font-weight: 600;
  }
`;

export const CityName = styled(Paragraph)``;

export const Pipe = styled.span`
  display: inline-block;
  margin-left: 0.5em;
  margin-right: 0.5em;
  color: #fff;
`;

export const CountryCode = styled(Paragraph)``;

export const FlagIcon = styled.img`
  width: 1em;
  margin-right: 0.3em;
`;

export const PinIcon = styled(Emoji)``;

export const ErrorMessage = styled(Paragraph)``;

export const SadIcon = styled(Emoji)``;
