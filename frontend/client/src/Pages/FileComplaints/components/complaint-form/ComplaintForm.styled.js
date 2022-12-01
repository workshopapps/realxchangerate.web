import styled from "styled-components";

export const StyledComplaintForm = styled.section`
  width: 60%;
  margin: 0 auto;
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 80%;
  }

  & h3 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;

    @media screen and (max-width: 500px) {
      text-align: start;
    }
  }

  & p {
    font-size: 18px;
    width: 80%;
    text-align: center;
    margin-bottom: 50px;
    line-height: 1.5;

    @media screen and (max-width: 1100px) {
      font-size: 17px;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
      text-align: start;
    }
  }

  & form {
    display: flex;
    flex-direction: column;
    width: 70%;

    @media screen and (max-width: 900px) {
      width: 100%;
    }

    & label {
      margin-bottom: 5px;
      font-size: 16px;
    }

    & input,
    textarea {
      margin-bottom: 20px;
      border-radius: 10px;
    }

    & input {
      padding: 10px;
      border: 1px solid #d1d5db;
    }

    & textarea {
      height: 224px;
      resize: none;
      padding: 10px;
      border: 1px solid #d1d5db;

      ::placeholder {
        font-family: Tahoma, sans-serif;
      }
    }

    & button {
      padding: 10px 50px;
      background-color: #1d4ed8;
      color: white;
      border-radius: 5px;
      border: none;
      font-size: 15px;
      font-weight: bold;
      margin-right: auto;
      cursor: pointer;
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
  background-color: green;
  color: white;
  font-weight: bold;
  z-index: 1000;
  text-align: center;
`;
