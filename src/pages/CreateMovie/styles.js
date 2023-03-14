import styled from "styled-components";

export const Container = styled.div`
  main {
    margin: 2rem 2rem;
    padding-bottom: 2rem;

    header {
      button {
        color: ${({ theme }) => theme.COLORS.AQUA};
      }
    }

    section {
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) => theme.COLORS.AQUA};
      max-height: 60.6rem;
      width: 100%;
      min-height: 63rem;
      padding-right: 1rem;

      .inputs {
        margin-top: 2rem;

        input {
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
          border-radius: 1rem;
        }

        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
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

  @media (min-width: 720px) {
    > main {
      section {
        .inputs {
          display: flex;
          gap: 2rem;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    > main {
      margin: 4rem 11.7rem 0;
      max-height: 82.3rem;

      header {
        margin-bottom: 2.4rem;
      }

      section {
        height: 100%;

        h1 {
          margin-bottom: 4rem;
        }

        .inputs {
          gap: 4rem;
          margin-top: 0;
          margin-bottom: 4rem;
        }

        textarea {
          height: 27.4rem;
        }

        .btn {
          margin-top: 4rem;
          display: flex;
          flex-wrap: nowrap;
          gap: 4rem;
        }
      }
    }
  }
`;
