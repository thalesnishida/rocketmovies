import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    width: 100%;
    height: 100vh;

    font-size: 1.6rem;
    font-family: 'Roboto Slab', serif;
    color: ${({ theme }) => theme.COLORS.WHITE};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  body, input, button, textarea  {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  } 

  a, input {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
  }
`