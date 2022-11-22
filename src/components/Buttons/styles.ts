import styled from "styled-components";

export const Button = styled.button`
  transition: 0.25s;
  background-color: transparent;
  cursor: pointer;
  &:active {
    transform: scale(0.85);
    transition: 0.25s;
  }
  svg {
    color: ${({ theme }) => theme.colors.textColor};
  }
`;
