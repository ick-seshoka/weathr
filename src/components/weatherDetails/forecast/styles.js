import styled from "styled-components";

import CloudRainIcon from "../../../assets/icons/svg/cloud-rain-icon.svg";
import CloudSunIcon from "../../../assets/icons/svg/cloud-sun-icon.svg";
import SunIcon from "../../../assets/icons/svg/sun-icon.svg";
import CloudRainThunderIcon from "../../../assets/icons/svg/cloud-rain-thunder-icon.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  width: 65%;
  justify-self: center;
  align-self: center;
  max-height: 60%;

  @media screen and (max-width: 47.9375em) {
    overflow-x: scroll;
    max-width: 100%;
    grid-template-columns: repeat(7, 6.65em);
    width: 100%;
    max-height: 100%;
    overflow-y: hidden;
    padding-top: 3.5em;
    padding-bottom: 3.5em;
  }

  @media screen and (min-width: 48em) and (max-width: 61.9375em) {
    width: 85%;
  }
`;

const IconImage = styled.img`
  align-self: center;

  @media screen and (max-width: 47.9375em) {
    width: 2.125em;
  }
`;

export const CloudRain = styled(IconImage).attrs({ src: CloudRainIcon })``;

export const CloudSun = styled(IconImage).attrs({ src: CloudSunIcon })``;

export const Sun = styled(IconImage).attrs({ src: SunIcon })``;

export const CloudRainThunder = styled(IconImage).attrs({
  src: CloudRainThunderIcon,
})``;
