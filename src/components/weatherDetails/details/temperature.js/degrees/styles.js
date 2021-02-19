import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: end;
  justify-items: center;

  @media screen and (max-width: 47.9375em) {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
    align-items: center;
  }

  @media screen and (min-width: 48em) and (max-width: 61.9375em) {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
    align-items: end;
  }
`;

export const Temperature = styled.p`
  font-family: "Lato", sans-serif;
  position: relative;
  font-size: 13.5em;
  color: #fff;
  font-weight: 100;
  line-height: 0.8em;

  &:after {
    position: absolute;
    top: -0.1em;
    right: -0.1em;
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 3px solid #fff;
  }

  @media screen and (max-width: 47.9375em) {
    font-size: 6.455em;
    font-weight: 300;

    &:after {
      width: 8px;
      height: 8px;
      border: 2px solid #fff;
    }
  }

  @media screen and (min-width: 48em) and (max-width: 61.9375em) {
    font-size: 9.5em;

    &:after {
      right: -0.075em;
      width: 10px;
      height: 10px;
      border: 2.5px solid #fff;
    }
  }
`;

export const Description = styled.p`
  font-size: 3em;
  color: #fff;
  font-weight: 300;
  line-height: 1.6em;

  @media screen and (max-width: 47.9375em) {
    font-size: 1.875em;
    font-weight: 400;
    letter-spacing: 0.05em;
    margin-top: 0.7em;
    margin-bottom: 0.7em;
  }

  @media screen and (min-width: 48em) and (max-width: 61.9375em) {
    font-size: 2.275em;
  }
`;
