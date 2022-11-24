import styled from "styled-components";

export const Button = styled.div`
  background-color: #00368c;
  min-height: 64px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 16px 20px;
  font-weight: 600px;
  font-size: 16px;
  line-height: 24px;
  color: #f8fafc;

  @media (min-width: 768px) {
    min-height: 56px;
  }

  @media (min-width: 1200px) {
  }
`;

export const DisabledButton = styled.div`
  background-color: #e2e8f0;
  min-height: 64px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 16px 20px;
  font-weight: 600px;
  font-size: 16px;
  line-height: 24px;
  color: #94a3b8;

  @media (min-width: 768px) {
    min-height: 56px;
  }

  @media (min-width: 1200px) {
  }
`;

export const TextInput = styled.input`
padding:"10px 12px"
height:"100px"
border:"0.873687px solid #D1D5DB"
font-size:"14px"
line-height:"20px"
font-weight:"400"
`;
