import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;

  > h2 {
    color: ${({  theme }) => theme.COLORS.GRAY_200};
    font-size: 2rem;
    font-weight: 400;
  }
`