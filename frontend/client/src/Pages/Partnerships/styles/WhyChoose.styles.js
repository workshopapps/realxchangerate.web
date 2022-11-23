import styled from "styled-components";

export const StyledWhyChoose = styled.section`
  padding: 30px 0 100px;
  max-width: 1440px;
  margin: 0 auto;

  .header {
    text-align: center;
    font-size: 28px;
    font-weight: 700px;
    margin-bottom: 40px;
    width: 100%;

    @media screen and (max-width: 480px) {
      font-size: 25px;
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
  }

  .listDiv {
    width: 30%;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 30px;
    margin-top: 15px;

    & h2 {
      font-size: 25px;
      font-weight: 700px;

      @media screen and (max-width: 480px) {
        font-size: 23px;
      }
    }

    & p {
      margin-top: 5px;
      font-size: 23px;
      line-height: 1.5;

      @media screen and (max-width: 480px) {
        font-size: 18px;
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
