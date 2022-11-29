import styled from "styled-components";

export const TermsWrapper = styled.div`
  margin-top: 36px;

  h2 {
    font-size: 28px;
    letter-spacing: -0.02em;
    color: #0f172a;
    font-family: "inter-bold", sans-serif;
    /* margin-bottom: 24px; */

    @media (max-width: 600px) {
      font-size: 22px;
    }
  }
  h4 {
    font-size: 20px;
    line-height: 28px;
    color: #0f172a;
    font-family: "inter-smbold", sans-serif;
    margin: 18px 0 24px;
  }
  h5 {
    font-size: 18px;
    line-height: 24px;
    color: #0f172a;
    font-family: "inter-smbold", sans-serif;
    margin-block: 12px 6px;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    color: #555962;
    margin: 8px 0;

    /* @media (max-width: 600px) {
      font-size: 16px;
    } */
  }
`;
