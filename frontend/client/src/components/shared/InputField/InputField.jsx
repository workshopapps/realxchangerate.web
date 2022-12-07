import React, { useState } from "react";
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
    outline: none;
    border-radius: 0.4rem;
  }
  input:invalid[focused="true"] {
    border: 1px solid red;
  }
  input:invalid[focused="true"] {
    border: 1px solid red;
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
}) => {
  const [focused, setFocused] = useState(false);
  const handleFocused = () => {
    setFocused(true);
  };

  return (
    <InputSection>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        onChange={handleChange}
        onBlur={handleFocused}
        focused={focused.toString()}
        value={value}
        required
      />
      <p>{errorMessage}</p>
    </InputSection>
  );
};

export default InputField;
