import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 20rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 0 1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  grid-area: header;

  > h1 {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.AQUA};
  }

  @media (min-width: 760px) {
    flex-direction: row;
    height: 10.5rem;
    padding: 0 2rem;
    gap: 2rem;

    align-items: center;
    justify-content: center;

    > h1 {
      font-size: 2rem;
    }
  }

  @media (min-width: 1024px) {
    gap: 6.4rem;
    padding: 0 12.3rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;

  min-width: 16.7rem;

  margin-bottom: 1rem;

  > div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      font-size: 1.4rem;
      font-weight: 400;
      align-self: flex-end;
    }
  }

  > img {
    width: 5.6rem;
    height: 5.6rem;

    object-fit: cover;
    margin-left: 10px;
    border-radius: 50%;
  }

  @media (min-width: 760px) {
    align-self: center;
  }
`;
