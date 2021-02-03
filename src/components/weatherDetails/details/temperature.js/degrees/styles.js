import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: end;
  justify-items: center;
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
`;

export const Description = styled.p`
  font-size: 3em;
  color: #fff;
  font-weight: 300;
  line-height: 1.6em;
`;
