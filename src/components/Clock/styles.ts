import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  text-align: center;
  font-family: ${({ theme }) => theme.colors.fontPrimary};
  font-weight: 500;
  font-size: 7rem;
  letter-spacing: -5px;
`;
