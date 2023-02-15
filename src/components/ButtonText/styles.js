import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: ${({ theme }) => theme.COLORS.GRAY};

  border: none;
  background: transparent;
`