import styled from "styled-components";

export const StyledWhyChoose = styled.section`
  padding: 30px 0 100px;
  max-width: 1240px;
  margin: 0 auto;

  .header {
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 140px;
    width: 100%;

    @media screen and (max-width: 480px) {
      font-size: 24px;
      width: 85%;
      margin: 0 auto 40px;
    }
  }

  .WhyContainer {
    display: flex;
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 140px;
  }

  .listDiv {
    width: 30%;
    display: flex;
    align-items: left;
    flex-direction: column;
    gap: 40px;
    margin-top: 15px;

    & h2 {
      font-size: 24px;
      font-weight: 600;

      @media screen and (max-width: 480px) {
        font-size: 20px;
        align-items: 600;
      }
    }

    @media screen and (max-width: 480px) {
      gap: 80px;
    }

    & p {
      margin-top: 5px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;

      @media screen and (max-width: 480px) {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

  @media screen and (max-width: 1240px) {
    padding-bottom: 50px;

    .WhyContainer {
      flex-direction: column;
      gap: 15px;
      width: 80%;
      margin: 0 auto;
    }

    .listDiv {
      width: 90%;
      margin: 0 auto;
    }
  }
`;
