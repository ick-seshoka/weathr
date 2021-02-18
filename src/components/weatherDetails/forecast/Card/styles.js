import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  justify-items: center;
  background-color: ${({ active }) => (active ? "#4a90e2" : "transparent")};

  &:after {
    position: absolute;
    display: block;
    content: "";
    right: 0;
    top: 25%;
    width: 1.3px;
    height: 60%;
    background-color: #d8d8d8;
    opacity: 0.4;
  }

  &:nth-child(7):after {
    background-color: transparent;
  }
`;

export const Title = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  color: ${({ active }) => (!active ? "#e0e0e0" : "#fff")};
  font-size: 1em;
  align-self: center;

  @media screen and (max-width: 47.9375em) {
    font-size: 0.875em;
  }
`;

export const Temperature = styled.p`
  position: relative;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  color: ${({ active }) => (!active ? "#e0e0e0" : "#fff")};
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
    border: 1.5px solid ${({ active }) => (!active ? "#e0e0e0" : "#fff")};
  }

  @media screen and (max-width: 47.9375em) {
    font-size: 1.125em;
  }
`;
