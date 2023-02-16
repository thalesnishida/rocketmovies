import styled from "styled-components";

export const Container = styled.div`
  main {
    margin: 2rem 2rem;
    padding-bottom: 2rem;

    > section {
      .inputs {
        margin-top: 2rem ;
        
        input {
          background-color:${({ theme }) => theme.COLORS.BACKGROUND_700};
          border-radius: 1rem;
        }
      }


      .tags {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        
        gap: 0.8rem;
        
        margin-top: 1rem;
        padding: 1.2rem;
        
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
      }

      .btn {
        margin: 2rem 0;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        .button1 {
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
          color: ${({ theme }) => theme.COLORS.AQUA};
        }
      }
    }
  }
`