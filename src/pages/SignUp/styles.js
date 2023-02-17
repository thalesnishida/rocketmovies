import styled from "styled-components";

import backgroundImage from '../../assets/image.png';

export const Container = styled.div`
 display: flex;
 height: 100vh;

 justify-content: stretch;

 @media(max-width: 520px) {
  justify-content: center;
  align-items: center;
 }

`
export const Form = styled.form`
  padding: 0 12.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  > h1 {
    color: ${({ theme }) => theme.COLORS.AQUA};
    align-self: start;
    font-size: 4.8rem;
    font-weight: 700;
  }

  > p {
    font-size: 1.4rem;
    font-weight: 400;
    align-self: start;
  }

  h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  > button {
    margin: 2.4rem 0 4.8rem;
  }

  span {
    color: ${({ theme }) => theme.COLORS.AQUA};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 1rem;
    }
  }

  @media(max-width: 520px) {
    padding: 0;
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;

  @media(max-width: 520px) {
    display: none;
  }
`