import styled from "styled-components";

import Clouds from "../../assets/images/clouds-bg.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(109, 226, 255, 0) 0%, #4a96e9 100%),
    url(${Clouds}) no-repeat center center fixed;
  background-size: cover cover;
  box-sizing: border-box;

  @media screen and (max-width: 1300px) {
    padding: 0 3em;
  }
`;

export const Main = styled.div`
  display: grid;
  grid-template-rows: 150px auto;
  grid-row-gap: 45px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 47.9375em) {
    grid-template-rows: 7.975em auto;
  }
`;
