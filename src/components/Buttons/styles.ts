import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2.4rem;
  cursor: pointer;
  transition: 0.25s;
`;

export const Plus = styled.button`
  transition: 0.25s;
  background-color: transparent;
  cursor: pointer;
  &:active {
    transform: scale(0.85);
    transition: 0.25s;
  }
  svg {
  }
`;

export const Minus = styled.button`
  transition: 0.25s;
  background-color: transparent;
  cursor: pointer;
  &:active {
    transform: scale(0.85);
    transition: 0.25s;
  }
`;

export const Play = styled.button`
  transition: 0.25s;
  background-color: transparent;
  cursor: pointer;
  &:active {
    transform: scale(0.85);
    transition: 0.25s;
  }
`;

export const Stop = styled.button`
  transition: 0.25s;
  cursor: pointer;
  background-color: transparent;
  fill: transparent;
  &:active {
    transform: scale(0.85);
    transition: 0.25s;
  }
`;
