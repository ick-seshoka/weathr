import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 0.5em;
  justify-items: center;
`;

export const Icon = styled.div`
  position: relative;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.6em;
  color: #fff;

  ${(props) =>
    props.hasDegreeSymbol &&
    css`
      &:after {
        position: absolute;
        display: block;
        top: -0.2em;
        right: -0.5em;
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        border: 2px solid #fff;
      }
    `}
`;

export const Title = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 300;
  color: #fff;
  font-size: 1.25em;
`;
