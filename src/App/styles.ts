import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 5rem;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0 2rem;
  }
`;

export const Timer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 2.4rem;
  cursor: pointer;
  transition: 0.25s;
  @media screen and (max-width: 480px) {
    gap: 1.5rem;
  }
`;
