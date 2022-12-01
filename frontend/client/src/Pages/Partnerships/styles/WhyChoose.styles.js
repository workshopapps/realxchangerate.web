import styled from "styled-components";

export const StyledWhyChoose = styled.section`
  padding: 30px;
  max-width: 1240px;
  margin: auto;
  margin-top: 146px;

  @media screen and (max-width: 480px) {
    margin-top: 70px;
    padding: 20px;
    padding-bottom: 0;
  }

  .header {
    text-align: center;
    margin-bottom: 84px;
    width: 100%;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;

    @media screen and (max-width: 480px) {
      font-size: 24px;
      width: 85%;
      margin: 0 auto 40px;
    }
  }

  .WhyContainer {
    display: flex;
    max-width: 1440px;

    justify-content: space-around;
    flex-wrap: wrap;
  }

  .listDiv {
    width: 30%;
    display: flex;
    align-items: left;
    flex-direction: column;
    gap: 40px;
    margin-top: 82px;
    @media screen and (max-width: 1480px) {
      align-items: center;
    }
    @media screen and (max-width: 480px) {
      gap: 10px;
      margin-bottom: 80px;
    }

    & h2 {
      font-size: 24px;
      font-weight: 600;

      @media screen and (max-width: 480px) {
        font-size: 20px;
        align-items: 600;
      }
    }

    @media screen and (max-width: 480px) {
      margin-bottom: 80px;
      .listDiv {
        align-items: center;
      }
    }

    & p {
      margin-top: 5px;
      margin-bottom: 85px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      max-width: "266px";

      @media screen and (max-width: 480px) {
        font-size: 16px;
        font-weight: 400;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 1240px) {
    padding-bottom: 50px;

    .WhyContainer {
      flex-direction: column;
      gap: 15px;
    }

    .listDiv {
      width: 90%;
      margin: 0 auto;
    }
  }
`;
