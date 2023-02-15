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

    section {
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) => theme.COLORS.AQUA };
      width: 100%;
      max-height: 60.6rem;
    }

    section::-webkit-scrollbar {
      width: 0.2rem;
    }

    section::-webkit-scrollbar-track {
      background: transparent;
    }

    section::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.AQUA} ;
      border-radius: 6px;
      border: 3px solid  ${({ theme }) => theme.COLORS.AQUA};
    }
  }

  @media(min-width: 700px) {
    main {
      header {
        padding: 0 2rem;
      }
      section {
        padding: 0 2rem;
        
      }
    }
  }
  
  @media(min-width: 1024px) {

    main {
      padding: 0 12.3rem;
    }
  }

    
`