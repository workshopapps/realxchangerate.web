import React from "react";
import styled from "styled-components";

const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  label {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    font-weight: bold;
  }
  input {
    padding: 1rem 1.8rem;
    font-size: 1.6rem;
    border: 1px solid #94a3b8;
    color: #94a3b8;
    border-radius: 0.4rem;
  }

  p {
    color: red;
    font-size: 14px;
    margin-top: 4px;
  }
`;

const InputField = ({
  type,
  label,
  name,
  placeHolder,
  handleChange,
  value,
  errorMessage,
  onBlur,
}) => {
  return (
    <InputSection>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        onChange={handleChange}
        onBlur={onBlur}
        value={value}
      />
      <p>{errorMessage}</p>
    </InputSection>
  );
};

export default InputField;
