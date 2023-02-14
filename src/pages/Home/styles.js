import styled from "styled-components";

export const Container = styled.div`
  
  > main {
    display: flex;
    align-items: center;
    flex-direction: column;
    
    padding: 0 123px;

    header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    
    
      margin-top: 50px;
      margin-bottom: 40px;
    
      h1 {
        font-size: 32px;
        font-weight: 400;
      }
    
      button {
        width: 300px;
      }
    }

  }
    
`