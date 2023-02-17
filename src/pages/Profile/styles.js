import styled from "styled-components";

export const Container = styled.div`
  > header {
    width: 100%;
    height: 14.4rem;

    display: flex;
    align-items: center;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    padding: 1rem;
  }

  @media(min-width: 1024px) {
    > header {
      padding-left: 14.4rem;
    }
  }

 ` 
  export const Form = styled.form`
  max-width: 34.0rem;
  margin: 3rem auto 0;

  padding: 0 1.4rem;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  > button {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -10.0rem auto 3.2rem;
  
  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.AQUA};

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }
    
    svg {
      height: 2.0rem;
      width: 2.0rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

  }
`