import styled from "styled-components";

export const Container = styled.div`
  
  > main {
    display: flex;
    align-items: center;
    flex-direction: column;
  
    padding: 0 1rem;

    header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    
    
      margin-top: 5rem;
      margin-bottom: 4rem;
    
      h1 {
        font-size: 3.2rem;
        font-weight: 400;
      }
    
      button {
        width: 300px;
      }
    }

  }
    
`