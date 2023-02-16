import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  min-height: 20rem;

  border: none;
  border-radius: 1rem;
  
  resize: none;

  padding: 1.2rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY};

  }
`