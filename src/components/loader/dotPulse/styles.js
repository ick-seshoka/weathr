import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #fff;
  color: #fff;
  box-shadow: 9999px 0 0 -5px #fff;
  animation: dotPulse 1.5s infinite linear;
  animation-delay: 0.25s;

  &:before,
  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #fff;
    color: #fff;
  }

  &:before {
    box-shadow: 9984px 0 0 -5px #fff;
    animation: dotPulseBefore 1.5s infinite linear;
    animation-delay: 0s;
  }

  &:after {
    box-shadow: 10014px 0 0 -5px #fff;
    animation: dotPulseAfter 1.5s infinite linear;
    animation-delay: 0.5s;
  }

  @keyframes dotPulseBefore {
    0% {
      box-shadow: 9984px 0 0 -5px #fff;
    }
    30% {
      box-shadow: 9984px 0 0 2px #fff;
    }
    60%,
    100% {
      box-shadow: 9984px 0 0 -5px #fff;
    }
  }

  @keyframes dotPulse {
    0% {
      box-shadow: 9999px 0 0 -5px #fff;
    }
    30% {
      box-shadow: 9999px 0 0 2px #fff;
    }
    60%,
    100% {
      box-shadow: 9999px 0 0 -5px #fff;
    }
  }

  @keyframes dotPulseAfter {
    0% {
      box-shadow: 10014px 0 0 -5px #fff;
    }
    30% {
      box-shadow: 10014px 0 0 2px #fff;
    }
    60%,
    100% {
      box-shadow: 10014px 0 0 -5px #fff;
    }
  }
`;
