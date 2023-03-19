import styled from "styled-components";

export const Container = styled.div`
  > main {
    width: 100%;
    header {
      display: flex;
      align-items: center;
      justify-content: start;

      padding: 2rem 2rem;
    }

    section {
      padding: 2rem 2rem;
      max-height: 100vh;
      overflow-y: auto;

      h1 {
        margin-bottom: 1rem;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: start;

        text-align: center;
        gap: 1rem;

        margin-top: 1rem;

        div {
          display: flex;
          align-items: center;

          img {
            width: 1.6rem;
            height: 1.6rem;

            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
          }

          span {
            margin-left: 1rem;
          }

          svg {
            color: ${({ theme }) => theme.COLORS.AQUA};
          }
        }
      }

      > .tags {
        margin: 3rem 0;
      }

      > p {
        text-align: justify;
        overflow-wrap: break-word;
        margin-bottom: 1rem;
      }
    }

    section {
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) => theme.COLORS.AQUA};
      width: 100%;
      max-height: 60.6rem;
    }

    section::-webkit-scrollbar {
      width: 0.5rem;
    }

    section::-webkit-scrollbar-track {
      background: transparent;
    }

    section::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.AQUA};
      border-radius: 6px;
      border: 3px solid ${({ theme }) => theme.COLORS.AQUA};
    }
  }
  @media (min-width: 760px) {
    main {
      section {
        > .info {
          flex-direction: row;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    main {
      padding: 0 10.3rem;
    }
  }
`;
