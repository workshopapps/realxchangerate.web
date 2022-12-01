import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledText = styled.textarea`
  width: 100%;
  height: 224px;
  background: #ffffff;
  resize: none;

  /* Neutral/300 */

  border: 1px solid #d1d5db;
  /* Drop shadow/XSmall */

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;
  outline: none;
  margin-top: 4px;
  padding: 8px 5px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    /* Neutral/400 */

    color: #9ca3af;
  }

  &:focus {
    border-color: #0062ff;
    transition: all 0.3s ease-in;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 42px;

  /* Primary/Blue 100 */
  border: none;

  cursor: pointer;
  background: #0062ff;
  border-radius: 8px;

  span {
    color: #fff;
  }

  &:disabled {
    background: #b0ceff;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ImageStyled = styled.img`
  @media (max-width: 600px) {
    width: 95%;
    margin: auto;
  }
`;
export const SideText = styled.p`
  width: 90%;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  /* or 140% */

  text-align: center;

  /* Body */
  padding-top: 10px;
  color: #4b4b4b;
`;
export const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  background: #ffffff;
  /* Neutral/300 */

  border: 1px solid #d1d5db;
  /* Drop shadow/XSmall */

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;
  outline: none;
  padding-left: 8px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #9ca3af;
  }

  &:focus {
    border-color: #0062ff;
    transition: all 0.3s ease-in;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const CardStyled = styled.div`
  flex: 1;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  height: 172px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 15px;
  margin-bottom: 20px;

  span {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    padding-top: 20px;
    text-align: center;
    color: #555962;
  }
`;
