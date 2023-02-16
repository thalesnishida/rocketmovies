import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  > h2 {
    color: ${({  theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 2.4rem;
    font-size: 2rem;
    font-weight: 400;
  }
`