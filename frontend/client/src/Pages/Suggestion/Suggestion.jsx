import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Suggestion = () => {
  const [disableBtn, setDisableBtn] = useState(false);
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableBtn(true);

    const SuggetionData = {
      full_name: nameRef.current.value,
      email: emailRef.current.value,
      suggestion: messageRef.current.value,
    };

    axios
      .post('https://api.streetrates.hng.tech/api/suggestions/', SuggetionData)
      .then((res) => {
        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
        setDisableBtn(false);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      })
      .catch((error) => {
        setDisableBtn(false);
      });
  };

  return (
    <StyledComplaintForm>
      <h3>We Value your Feedback</h3>
      <p>
        We are continously working to make our platform better. We'd love to
        hear any suggestions that can help us deliver a better experince.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Full Name:</label>
        <input
          ref={nameRef}
          type='text'
          id='name'
          placeholder='Enter your name'
          required
        />

        <label htmlor='email'>Email Address:</label>
        <input
          ref={emailRef}
          type='text'
          id='email'
          placeholder='Enter your email'
          required
        />

        <label htmlFor='description'> Your Suggestion:</label>
        <textarea
          ref={messageRef}
          id='description'
          placeholder='Type your message'
          required
        ></textarea>

        <button type='submit' disabled={disableBtn}>
          {disableBtn ? 'Submitting' : 'Submit'}
        </button>
      </form>
    </StyledComplaintForm>
  );
};

export default Suggestion;

export const StyledComplaintForm = styled.section`
  padding: 85px 0;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin-left: 10rem;
  @media screen and (max-width: 600px) {
    padding: 60px 0;
    margin-left: 0;
    align-items: center;
  }
  @media only screen and (max-width: 992px) {
    margin-left: 5rem;
  }

  & h3 {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 5px;
    text-align: start;

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
    text-align: start;
    margin-bottom: 30px;
    line-height: 1.5;
    font-weight: 400;

    @media screen and (max-width: 1100px) {
      font-size: 17px;
    }

    @media screen and (max-width: 600px) {
      width: 90%;
      text-align: start;
      font-size: 15px;
    }
  }

  & form {
    display: flex;
    flex-direction: column;
    width: 90%;
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
      width: 100%;
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
