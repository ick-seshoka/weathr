import styled from "styled-components";

import { Link } from "react-router-dom";

import CloudsIcon from "../../assets/icons/svg/clouds.svg";

export const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, auto);
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: transparent;
`;

export const Logo = styled.img.attrs({ src: CloudsIcon })``;

export const CopyInfo = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 600;
`;
