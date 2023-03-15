import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 0.8rem;
  padding: 1.8rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-radius: 1rem;

  margin-bottom: 1rem;

  > .description {
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  > div {
    display: flex;
    justify-content: start;
    align-items: center;

    flex-wrap: wrap;
    gap: 1rem;
  }
`;
