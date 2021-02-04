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
`;

const IconImage = styled.img`
  align-self: center;
`;

export const CloudRain = styled(IconImage).attrs({ src: CloudRainIcon })``;

export const CloudSun = styled(IconImage).attrs({ src: CloudSunIcon })``;

export const Sun = styled(IconImage).attrs({ src: SunIcon })``;

export const CloudRainThunder = styled(IconImage).attrs({
  src: CloudRainThunderIcon,
})``;
