import styled from "styled-components";

export const Container = styled.span`
  text-align: center;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  margin-right: 0.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
`