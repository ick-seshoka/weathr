import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 1.2em;
  grid-area: Temperature;

  @media screen and (max-width: 47.9375em) {
    grid-row-gap: 0;
  }
`;
