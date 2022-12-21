import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledComplaintForm,
  SuccessMessage,
  StyledFormTop,
} from './ComplaintForm.styled';
import ArrowLeft from '../assets/arrow-left.svg';

import axios from 'axios';

const ComplaintForm = () => {
  const [disableBtn, setDisableBtn] = useState(false);

  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableBtn(true);

    const complaintData = {
      full_name: nameRef.current.value,
      email: emailRef.current.value,
      complaint: messageRef.current.value,
    };

    axios
      .post(
        'https://api.streetrates.info//api/complaints/add_complaints',
        complaintData
      )
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
    <>
      <StyledFormTop>
        <img
          src={ArrowLeft}
          alt='arrow left'
          height={30}
          onClick={() => {
            navigate('/complaint');
          }}
          style={{ cursor: 'pointer' }}
        />
        <h1>Complaint Form</h1>
      </StyledFormTop>
      <StyledComplaintForm>
        <h3>We are always at your service</h3>
        <p>Kindly complete the form below to enable us address your query</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Your name:</label>
          <input
            ref={nameRef}
            type='text'
            id='name'
            placeholder='Enter your name'
            required
          />

          <label htmlor='email'>Your email:</label>
          <input
            ref={emailRef}
            type='email'
            id='email'
            placeholder='Enter your email'
            required
          />

          <label htmlFor='description'> Description:</label>
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
    </>
  );
};

export default ComplaintForm;
