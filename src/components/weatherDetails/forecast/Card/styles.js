import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  justify-items: center;
`;

export const Title = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  color: #e0e0e0;
  font-size: 1em;
  align-self: center;
`;

export const Temperature = styled.p`
  position: relative;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  color: #e0e0e0;
  font-size: 1.25em;
  align-self: center;

  &:after {
    position: absolute;
    display: block;
    top: -0.15em;
    right: -0.45em;
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    border: 1.5px solid #e0e0e0;
  }
`;
