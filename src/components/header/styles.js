import styled from "styled-components";
import { Link } from "react-router-dom";

import CloudsIcon from "../../assets/icons/svg/clouds.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  align-items: end;
`;

export const Logo = styled.img.attrs({ src: CloudsIcon })``;

export const Location = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 0.9em;
  font-weight: 600;
  justify-self: end;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: transparent;
`;
