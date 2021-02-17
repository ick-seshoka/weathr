import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

export const Paragraph = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.2em;
  font-weight: 300;
  color: #fff;

  @media screen and (max-width: 47.9375em) {
    font-size: 1.125em;
    font-weight: 400;
  }
`;
