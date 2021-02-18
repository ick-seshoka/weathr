import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-template-areas: "Temperature WeatherIcon";

  @media screen and (max-width: 47.9375em) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: auto;
    grid-template-areas:
      "WeatherIcon"
      "Temperature";
  }
`;
