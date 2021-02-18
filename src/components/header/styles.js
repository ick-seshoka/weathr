import styled from "styled-components";
import { Link } from "react-router-dom";

import CloudsIcon from "../../assets/icons/svg/clouds.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  align-items: end;

  @media screen and (max-width: 47.9375em) {
    grid-template-rows: repeat(1, 1fr);
    align-items: center;
  }
`;

export const Logo = styled.img.attrs({ src: CloudsIcon })`
  @media screen and (max-width: 47.9375em) {
    width: 4.8675em;
  }
`;

export const Location = styled.p`
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

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: transparent;
`;
