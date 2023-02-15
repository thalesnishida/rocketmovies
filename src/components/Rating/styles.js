import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;

  input[type="radio"] {
    display: none;
  }

  .star {
    cursor: pointer;
    transition: color 200ms;
  }
`