import styled from "styled-components";

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
  overflow-x: scroll;

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

    @media screen and (max-width: 47.9375em) {
      right: unset;
      margin-right: unset;
      display: none;
    }

    @media screen and (min-width: 48em) and (max-width: 61.9375em) {
      right: 1.125em;
      width: 90%;
    }
  }

  @media screen and (max-width: 47.9375em) {
    grid-template-columns: repeat(4, 4.5em);
    justify-items: center;
    justify-self: center;
    margin-right: unset;
  }

  @media screen and (min-width: 48em) and (max-width: 61.9375em) {
    grid-template-columns: repeat(4, 4.9em);
    margin-right: unset;
    justify-items: center;
    justify-self: center;
  }

  @media screen and (min-width: 62em) and (max-width: 75em) {
    grid-template-columns: repeat(4, 5.9em);
  }
`;

export const HumidityIcon = styled.img.attrs({ src: Humidity })`
  @media screen and (max-width: 47.9275em) {
    width: 0.75em;
  }
`;

export const WindspeedIcon = styled.img.attrs({ src: Windspeed })`
  @media screen and (max-width: 47.9275em) {
    width: 1.25em;
  }
`;
