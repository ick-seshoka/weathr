import styled, { css } from "styled-components";

import Humidity from "../../../../../assets/icons/svg/humidity-icon.svg";
import Windspeed from "../../../../../assets/icons/svg/wind-speed-icon.svg";

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 7.3em);
  align-items: center;
  justify-items: end;
  justify-self: end;
  margin-right: 2em;

  &:before {
    position: absolute;
    display: block;
    content: "";
    right: 0;
    top: 0;
    width: 85%;
    height: 2px;
    background-color: #d8d8d8;
    opacity: 0.4;
  }

  @media screen and (max-width: 47.9375em) {
    grid-template-columns: repeat(4, 5.8em);
  }
`;

export const MaxTemperature = styled.p``;

export const MinTemperature = styled.p``;

export const HumidityIcon = styled.img.attrs({ src: Humidity })``;

export const WindspeedIcon = styled.img.attrs({ src: Windspeed })``;
