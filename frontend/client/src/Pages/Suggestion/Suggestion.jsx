import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SuggestionImage from "./Images/Suggestion.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Suggestion = () => {
  const [disableBtn, setDisableBtn] = useState(false);
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableBtn(true);

    const SuggetionData = {
      full_name: nameRef.current.value,
      email: emailRef.current.value,
      complaint: messageRef.current.value,
    };

    axios
      .post(
        "https://api.streetrates.info//api/complaints/add_complaints",
        SuggetionData
      )
      .then((res) => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        if (res.status === 200)
          toast.success("Submitted successfully. Ridirecting to home page");
        setDisableBtn(false);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        setDisableBtn(false);
      });
  };

  return (
    <Wrapper>
      <StyledComplaintForm>
        <h3>{t("suggestion_title")}</h3>
        <p>{t("suggestion_text")}</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">{t("name_label")}</label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            placeholder={t("name_placeholder")}
            required
          />

          <label htmlor="email">{t("email_label")}</label>
          <input
            ref={emailRef}
            type="text"
            id="email"
            placeholder={t("email_placeholder")}
            required
          />

          <label htmlFor="description">{t("message_label")}</label>
          <textarea
            ref={messageRef}
            id="description"
            placeholder={t("message_placeholder")}
            required
          ></textarea>

          <button type="submit" disabled={disableBtn}>
            {disableBtn ? t("Submitting") : t("Submit")}
          </button>
        </form>
      </StyledComplaintForm>
      <ImageWrapper>
        <img src={SuggestionImage} alt="Suggestion" />
      </ImageWrapper>
      <ToastContainer />
    </Wrapper>
  );
};

export default Suggestion;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 5rem;
    gap: 1.5rem;
  }

  @media only screen and (min-width: 992px) {
    align-items: center;
    justify-content: center;
    padding: 5rem;
    gap: 5rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 5rem 10rem;
    margin: 0 auto;
    max-width: 1440px;
  }
`;

const ImageWrapper = styled.div`
  width: 90%;
  display: none;

  @media only screen and (min-width: 768px) {
    width: 45%;
    margin: 0;
    display: block;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  @media only screen and (min-width: 992px) {
    width: 45%;
  }
  @media screen and (min-width: 1200px) {
  }
`;

const StyledComplaintForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  & h3 {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 15px;
    text-align: start;

    @media screen and (min-width: 768px) {
      font-size: 25px;
    }

    @media screen and (max-width: 600px) {
      text-align: start;
      font-size: 25px;
      line-height: 1.2;
    }
  }

  & p {
    font-size: 17px;
    text-align: start;
    margin-bottom: 30px;
    line-height: 1.5;
    font-weight: 400;

    @media screen and (min-width: 768px) {
      font-size: 15px;
    }

    @media screen and (max-width: 600px) {
      text-align: start;
      font-size: 14px;
    }
  }

  & form {
    display: flex;
    flex-direction: column;

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
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
