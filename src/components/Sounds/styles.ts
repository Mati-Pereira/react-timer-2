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
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bgSounds};
  padding: 1rem;
  aspect-ratio: 1/1;
  border-radius: 16px;
  transition: 0.25s all linear;
  cursor: pointer;
  gap: 3rem;
  &:active {
    svg {
      fill: #fff;
    }
    background-color: ${({ theme }) => theme.colors.bgSoundsHover};
    transition: 0.25s;
    scale: 0.9;
  }
  &:hover {
    svg {
      fill: #fff;
    }
    background-color: ${({ theme }) => theme.colors.bgSoundsHover};
    transition: 0.25s all linear;
  }
`;

export const InputSound = styled.input`
  width: 80%;
  height: auto;
  background: none;
`;
