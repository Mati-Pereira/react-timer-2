import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 480px) {
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

export const CheckBoxLabel = styled.label`
  width: 42px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme }) => theme.colors.bgSoundsHover};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
