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
`;

const InputField = ({
  type,
  label,
  name,
  placeHolder,
  handleChange,
  value,
}) => {
  return (
    <InputSection>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeHolder}
        onChange={handleChange}
        value={value}
      />
    </InputSection>
  );
};

export default InputField;
