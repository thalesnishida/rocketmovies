import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_200}` : "none" };

  margin-bottom: 8px;
  padding-right: 16px;
  border-radius: 10px;

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED}
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.AQUA}
  }
  > button {
    border: none;
    background: none;
  }

  > input {
    height: 56px;
    width: 100%;
    
    padding: 12px;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    
    border: none;

    ::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  } 
`