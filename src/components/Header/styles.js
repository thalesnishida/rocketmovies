import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 105px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  padding: 0 123px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  grid-area: header;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  width: 200px;

  > div {
    display: flex;
    flex-direction: column;

    text-align: center;

    h2 {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 14px;
      font-weight: 700;
    }
  }

  > img {
    width: 56px;
    height: 56px;

    margin-left: 10px;
    border-radius: 50%;
  }
  
`