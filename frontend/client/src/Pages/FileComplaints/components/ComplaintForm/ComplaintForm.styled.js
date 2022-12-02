import styled from "styled-components";

export const StyledComplaintForm = styled.section`
  padding: 85px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    padding: 60px 0;
  }

  & h3 {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 5px;
    text-align: center;

    @media screen and (max-width: 1000px) {
      font-size: 34px;
    }

    @media screen and (max-width: 600px) {
      width: 90%;
      text-align: start;
      font-size: 27px;
      line-height: 1.2;
    }
  }

  & p {
    font-size: 18px;
    text-align: center;
    margin-bottom: 30px;
    line-height: 1.5;
    font-weight: 400;

    @media screen and (max-width: 1100px) {
      font-size: 17px;
    }

    @media screen and (max-width: 600px) {
      width: 90%;
      text-align: start;
      font-size: 16px;
    }
  }

  & form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    max-width: 600px;

    & label {
      margin-bottom: 5px;
      font-size: 16px;
      font-weight: 500;
    }

    & input,
    textarea {
      margin-bottom: 30px;
      border-radius: 10px;
    }

    & input {
      padding: 10px 12px;
      border: 1px solid #d1d5db;
    }

    & textarea {
      height: 224px;
      resize: none;
      padding: 10px;
      border: 1px solid #d1d5db;
      margin-top: 10px;

      ::placeholder {
        font-family: Tahoma, sans-serif;
      }
    }

    & button {
      padding: 15px 50px;
      background-color: #1d4ed8;
      color: white;
      border-radius: 5px;
      border: none;
      font-size: 15px;
      font-weight: bold;
      margin-right: auto;
      cursor: pointer;

      :disabled {
        opacity: 0.5;
      }
    }
  }
`;

export const SuccessMessage = styled.div`
  position: fixed;
  left: 50%;
  top: 10%;
  font-size: 16px;
  padding: 15px 10px;
  transform: translate(-50%, -50%);
  border: none;
  color: white;
  font-weight: bold;
  z-index: 1000;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const StyledFormTop = styled.div`
  height: 200px;
  background-color: #00368c;
  display: grid;
  place-items: center;
  position: relative;

  @media screen and (max-width: 900px) {
    height: 170px;
  }

  @media screen and (max-width: 500px) {
    height: 150px;
  }

  & h1 {
    color: white;
    font-size: 35px;
    font-weight: 500;

    @media screen and (max-width: 1000px) {
      font-size: 30px;
    }

    @media screen and (max-width: 600px) {
      font-size: 23px;
    }
  }

  & img {
    position: absolute;
    left: 10%;

    @media screen and (max-width: 900px) {
      height: 23px;
    }

    @media screen and (max-width: 600px) {
      height: 16px;
    }
  }
`;
