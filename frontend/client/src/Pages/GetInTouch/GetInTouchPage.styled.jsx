import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledText = styled.textarea`
  width: 384px;
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
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const StyledButton = styled.button`
  width: 383px;
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
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-left: 10px;
  /* identical to box height, or 150% */

  /* Body */

  color: #4b4b4b;
`;
export const InputStyled = styled.input`
  width: 384px;
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

  @media (max-width: 767px) {
    width: 100%;
  }
`;
