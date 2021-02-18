import styled from "styled-components";

import { Link } from "react-router-dom";

import CloudsIcon from "../../assets/icons/svg/clouds.svg";

export const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1200px;
  margin: 0 auto;
  align-content: center;
  height: 150px;
  width: 100%;

  @media screen and (max-width: 47.9375em) {
    max-width: 100%;
    grid-template-columns: auto;
    grid-template-rows: 2fr 1fr;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: transparent;

  @media screen and (max-width: 47.9375em) {
    align-self: end;
  }
`;

export const Logo = styled.img.attrs({ src: CloudsIcon })`
  @media screen and (max-width: 47.9375em) {
    width: 4.8675em;
    align-self: end;
  }
`;

export const CopyInfo = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  align-self: center;
  justify-self: end;
  color: #7f9ba7;

  @media screen and (max-width: 47.9375em) {
    font-size: 0.985em;
    font-weight: 300;
  }
`;
