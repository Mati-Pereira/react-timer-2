import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const DivSounds = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgSounds};
  padding: 36px;
  border-radius: 16px;
  transition: 0.25s all linear;
  cursor: pointer;
  &:active {
    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
    background-color: ${({ theme }) => theme.colors.bgSoundsHover};
    transition: 0.25s;
    scale: 0.9;
  }
  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
    background-color: ${({ theme }) => theme.colors.bgSoundsHover};
    transition: 0.25s all linear;
  }
`;
