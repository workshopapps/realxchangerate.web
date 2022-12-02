import styled from "styled-components";

export const EntrepreneurSection = styled.section`
  color: #0f172a;
  margin: auto;
  margin-bottom: 100px;
  width: 84%;
  @media (max-width: 1025px) {
    width: 90%;
  }

  .hero {
    display: flex;
    gap: 6rem;
    @media (max-width: 999px) {
      gap: 3rem;
    }
    @media (max-width: 805px) {
      flex-direction: column-reverse;
    }
    .grid-1 {
      width: 50rem;
      img {
        width: 50rem;
        height: 100%;
        object-fit: cover;
        @media (max-width: 1300px) {
          width: 40rem;
        }
        @media (max-width: 999px) {
          width: 36rem;
        }
        @media (max-width: 805px) {
          width: 100%;
        }
      }
      @media (max-width: 1300px) {
        width: 40rem;
      }
      @media (max-width: 999px) {
        width: 37rem;
      }
      @media (max-width: 805px) {
        width: 100%;
      }
    }
    .grid-2 {
      h2 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        color: #0f172a;
        @media (max-width: 999px) {
          margin-bottom: 0.5rem;
        }
        @media (max-width: 805px) {
          margin-bottom: 1rem;
        }
      }
      p {
        font-size: 1.6rem;
        margin: 2.5rem 0;
        padding: unset;
        @media (max-width: 999px) {
          margin: 1.2rem 0;
        }
        @media (max-width: 805px) {
          margin: 1.8rem 0;
        }
      }
      button {
        margin-top: 4rem;
        border-radius: 0.3rem;
        font-weight: bold;
        background-color: #0062ff;
        color: #ffffff;
        border: none;
        outline: none;
        padding: 1.5rem 3.5rem;
        @media (max-width: 999px) {
          margin-top: 1rem;
        }
      }
    }
  }

  .profile-gallery {
    margin: 8rem 0 2rem;
    h2 {
      text-align: center;
      font-size: 3rem;
      color: #0f172a;
    }
    .profile-grid {
      margin-top: 3rem;
      padding: 0 5rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      justify-content: center;
      gap: 10rem;
      @media (max-width: 1025px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 650px) {
        grid-template-columns: 1fr;
      }

      .profile-card {
        width: 24rem;
        text-align: center;
        margin: auto;
        .profile-img {
          height: 24rem;
          border-radius: 50%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        h4 {
          margin-top: 2.5rem;
          font-size: 1.85rem;
        }
        p {
          margin-top: 0.2rem;
          font-size: 1.5rem;
        }
      }
    }
  }
`;
