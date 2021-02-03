import styled from "styled-components";

import Humidity from "../../../../../assets/icons/svg/humidity-icon.svg";
import Windspeed from "../../../../../assets/icons/svg/wind-speed-icon.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 7.3em);
  align-items: center;
  justify-items: end;
  justify-self: end;
  margin-right: 2em;
`;

export const MaxTemperature = styled.p``;

export const MinTemperature = styled.p``;

export const HumidityIcon = styled.img.attrs({ src: Humidity })``;

export const WindspeedIcon = styled.img.attrs({ src: Windspeed })``;
