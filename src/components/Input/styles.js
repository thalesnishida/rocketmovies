import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    width: 100%;
    height: 56px;

    background: transparent;

    padding-left: 12px;

    border: 0;
    

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }

  }
  > svg {
    margin-left: 10px;
  }
`