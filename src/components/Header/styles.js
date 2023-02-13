import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 105px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

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
  min-width: 167px;
  
  > div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 14px;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      font-size: 14px;
      font-weight: 400;
      align-self: flex-end;
    }
  }

  > img {
    width: 56px;
    height: 56px;

    margin-left: 10px;
    border-radius: 50%;
  }
  
`