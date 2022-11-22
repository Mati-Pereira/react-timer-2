import styled from "styled-components";

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 40px;
  height: 22px;
  border-radius: 100px;
  border: 2px solid gray;
  position: relative;
  transition: background-color 0.2s;
`;

export const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 1.15px;
  left: 1.15px;
  width: 1rem;
  height: 1rem;
  border-radius: 45px;
  transition: 0.2s;
  background: grey;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 45px;
  }
`;
