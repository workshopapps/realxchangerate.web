import styled from "styled-components";

export const FormSection = styled.section`
  .header {
    background-color: #00296b;
    color: white;
    padding: 44px 16px;
    display: flex;
    align-items: center;

    h2 {
      margin-left: 8px;
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
    }
    .grid-sec {
      margin: 7rem 0;
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

  @media (min-width: 550px) {
    h2 {
      font-size: 32px;
    }
  }

  @media (min-width: 1200px) {
    padding: 10rem 13rem 5rem;

    h2 {
      font-size: 48px;
    }
  } ;
`;
