import styled from "styled-components";

export const FormSection = styled.section`
  .header {
    background-color: #00296b;
    color: white;
    padding: 10rem 13rem 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    @media (max-width: 1255px) {
      padding: 10rem 7rem 5rem;
    }
    @media (max-width: 868px) {
      padding: 10rem 4rem 5rem;
    }
    @media (max-width: 570px) {
      padding: 10rem 1rem 5rem;
      text-align: center;
      align-items: flex-start;
      gap: 8px;
      img {
        width: 30px;
      }
    }
    h2 {
      font-size: 2.9rem;
      @media (max-width: 868px) {
        font-size: 2rem;
      }
      @media (max-width: 570px) {
        font-size: 1.7rem;
      }
    }
  }
  button {
    background-color: #0062ff;
    color: white;
    padding: 1rem 3.5rem;
    cursor: pointer;
    margin: 3rem 0;
    font-weight: bold;
    border: none;
    border-radius: 0.4rem;
  }
  form {
    max-width: 1000px;
    width: 84%;
    margin: 6rem auto;
    @media (max-width: 1025px) {
      width: 90%;
    }
    > div {
      margin: 3rem 0;
    }
    .grid-two {
      display: flex;
      align-items: end;
      justify-content: space-between;

      @media (max-width: 570px) {
        display: block;
      }
      div {
        width: 45%;
        @media (max-width: 1025px) {
          width: 48.5%;
        }
        @media (max-width: 570px) {
          width: 100%;
          margin-bottom: 24px;
        }
      }
      .select-field {
        width: 45%;
        display: flex;
        flex-direction: column;
        @media (max-width: 1025px) {
          width: 48.5%;
        }
        @media (max-width: 570px) {
          width: 100%;
        }
        label {
          font-size: 1.6rem;
          margin-bottom: 0.8rem;
          font-weight: bold;
        }
        select {
          padding: 1rem 1.8rem;
          font-size: 1.6rem;
          border-color: #94a3b8;
          color: #94a3b8;
          border-radius: 0.4rem;
        }
      }
    }
    .grid-half {
      width: 45%;
      margin-bottom: 7.5rem;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    .grid-sec {
      margin: 7rem 0;
    }

    .school-section {
      margin-top: 7rem;
    }
    .course-name {
      margin-bottom: 0;
    }
    .course-year {
      margin-bottom: 7.5rem;
    }

    .text-area {
      display: flex;
      flex-direction: column;
      margin: 3.5rem 0;
      label {
        font-size: 1.6rem;
        margin-bottom: 0.8rem;
        font-weight: bold;
      }
      textArea {
        border-radius: 0.4rem;
      }
    }
  }
`;
