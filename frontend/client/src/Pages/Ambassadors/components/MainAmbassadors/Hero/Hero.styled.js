import styled from "styled-components";

export const StyledHeroAmbassadors = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: #f8fafc;
  padding: 50px 30px;

  @media screen and (max-width: 1200px) {
    padding: 40px 20px;
  }

  @media screen and (max-width: 900px) {
    padding: 30px 10px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 20px 10px;
  }

  .heroContent {
    width: 40%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1200px) {
      width: 40%;
    }

    @media screen and (max-width: 900px) {
      width: 90%;
      align-items: center;
      margin-bottom: 30px;
    }

    & h3 {
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 10px;

      @media screen and (max-width: 1200px) {
        font-size: 28px;
      }

      @media screen and (max-width: 1100px) {
        font-size: 23px;
      }

      @media screen and (max-width: 900px) {
        margin-top: 20px;
        font-size: 30px;
        text-align: center;
      }

      @media screen and (max-width: 500px) {
        width: 90%;
      }
    }

    & p {
      font-size: 19px;
      line-height: 1.3;
      width: 90%;
      margin-bottom: 30px;

      @media screen and (max-width: 1200px) {
        font-size: 17px;
      }

      @media screen and (max-width: 900px) {
        font-size: 20px;
        text-align: center;
      }

      @media screen and (max-width: 500px) {
        font-size: 18px;
      }
    }

    .btns {
      @media screen and (max-width: 800px) {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .btn1 {
      background-color: #0062ff;
      padding: 12px 18px;
      border: 2px solid #0062ff;
      border-radius: 5px;
      color: white;
      margin-right: 20px;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;

      @media screen and (max-width: 1170px) {
        margin-bottom: 10px;
      }

      @media screen and (max-width: 800px) {
        margin-right: 0px;
      }
    }

    .btn2 {
      background-color: transparent;
      padding: 12px 20px;
      border: 2px solid #0062ff;
      border-radius: 5px;
      color: #0062ff;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
    }
  }

  .heroImage {
    width: 50%;
    display: flex;
    align-items: center;
    background-color: rgba(0, 41, 107, 0.8);

    @media screen and (max-width: 1200px) {
      width: 55%;
    }

    @media screen and (max-width: 900px) {
      width: 40%;
      flex-direction: column-reverse;
    }

    @media screen and (max-width: 500px) {
      width: 65%;
      flex-direction: column-reverse;
    }

    & img {
      @media screen and (max-width: 900px) {
        width: 100%;
      }
    }

    & p {
      color: white;
      width: 50%;
      margin: 0 auto;
      font-size: 18px;
      line-height: 1.5;
      padding: 0 5px;

      @media screen and (max-width: 1200px) {
        font-size: 15px;
        padding: 0 5px;
      }

      @media screen and (max-width: 900px) {
        width: 100%;
        padding: 30px 20px;
        font-size: 15px;
        text-align: center;
      }
    }
  }
`;
