import styled from "styled-components";

import Icon from "../../../../assets/icons/svg/weather-icon.svg";

export const WeatherIcon = styled.img.attrs({ src: Icon })`
  width: 380px;
  height: 260px;
  align-self: center;
  justify-self: center;
  grid-area: WeatherIcon;

  @media screen and (max-width: 47.9375em) {
    width: 13.125em;
    height: 8.5em;
  }

  @media screen and (min-width: 48em) and (max-width: 61.9375em) {
    width: 18.75em;
    height: 13.125em;
  }
`;
