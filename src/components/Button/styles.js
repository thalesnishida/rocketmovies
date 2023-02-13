import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.PINK};

  border: none;
  border-radius: 10px;
  
  > svg {
  
  }
`