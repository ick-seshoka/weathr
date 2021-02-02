import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: end;
  justify-items: center;
`;

export const Temperature = styled.p`
  font-size: 13.5em;
  color: #fff;
  font-weight: 100;
  line-height: 0.8em;
`;

export const Description = styled.p`
  font-size: 3em;
  color: #fff;
  font-weight: 300;
  line-height: 1.6em;
`;
