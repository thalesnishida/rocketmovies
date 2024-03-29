import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.AQUA};

  border: none;
  border-radius: 1rem;
  
  > svg {
    padding-right: 0.6rem;
  }
`