import styled from "styled-components";

export const StyledComplaintQuery = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #f8fafc;
  gap: 30px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 80px;
    padding: 40px 20px;
  }

  .query {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 120px;

    @media screen and (max-width: 1300px) {
      width: 40%;
      margin-left: 40px;
    }

    @media screen and (max-width: 900px) {
      margin-left: 30px;
      gap: 5px;
    }

    @media screen and (max-width: 800px) {
      margin: 0px auto;
      width: 95%;
    }

    .link {
      display: flex;
      gap: 10px;
      flex-direction: row;
      width: 100%;
      align-items: center;

      & a {
        text-decoration: none;
      }

      .contactSvg {
        height: 15px;
      }

      & img {
        @media screen and (max-width: 500px) {
          height: 20px;
        }
      }
    }

    .topText {
      font-weight: 600;
      margin-bottom: 20px;
      font-size: 20px;

      @media screen and (max-width: 1200px) {
        margin-bottom: 0px;
      }

      @media screen and (max-width: 900px) {
        font-size: 16px;
      }

      @media screen and (max-width: 500px) {
        margin-bottom: 5px;
      }
    }

    .mainText {
      font-size: 50px;

      @media screen and (max-width: 1200px) {
        font-size: 40px;
      }

      @media screen and (max-width: 900px) {
        font-size: 25px;
      }

      @media screen and (max-width: 500px) {
        margin-bottom: 5px;
      }
    }

    .bottomText {
      line-height: 1.5;
      font-size: 18px;

      @media screen and (max-width: 900px) {
        font-size: 12px;
      }

      @media screen and (max-width: 500px) {
        width: 80%;
        margin-bottom: 10px;
      }
    }

    .linkText {
      color: #0062ff;
      font-weight: bold;
      font-size: 16px;

      @media screen and (max-width: 500px) {
        font-size: 14px;
      }
    }
  }

  .queryImage {
    width: 720px;

    @media screen and (max-width: 1300px) {
      width: 600px;
    }

    @media screen and (max-width: 1100px) {
      width: 530px;
    }

    @media screen and (max-width: 900px) {
      width: 450px;
    }

    @media screen and (max-width: 800px) {
      width: 80%;
    }

    @media screen and (max-width: 500px) {
      width: 95%;
    }
  }
`;

export const StyledComplaintEnquiry = styled.section`
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 500px) {
    padding: 50px 0;
  }

  .header {
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;

    @media screen and (max-width: 500px) {
      text-align: start;
      font-size: 23px;
    }
  }

  .subHeader {
    font-size: 18px;
    width: 45%;
    text-align: center;
    margin-bottom: 50px;
    line-height: 1.5;

    @media screen and (max-width: 1100px) {
      width: 70%;
      font-size: 17px;
    }

    @media screen and (max-width: 500px) {
      width: 85%;
      text-align: start;
      font-size: 16px;
    }
  }

  .enquiry {
    margin: 0 auto;
    display: flex;
    gap: 50px;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
      gap: 20px;
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;
      gap: 25px;
    }

    & div {
      width: 350px;
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(0, 98, 255, 1);
      padding: 25px;
      border-radius: 10px;
      justify-content: space-evenly;
      align-items: flex-start;
      background: #fffefc;
      gap: 15px;

      @media screen and (max-width: 900px) {
        width: 320px;
      }

      @media screen and (max-width: 600px) {
        width: 80%;
        height: 300px;
        padding: 20px;
        margin: 0 auto;
      }

      & h3 {
        font-size: 25px;
      }

      & p {
        font-size: 17px;
        line-height: 1.5;
      }

      .linkText {
        font-size: 16px;

        @media screen and (max-width: 500px) {
          margin-bottom: 30px;
        }
      }
    }
  }
`;

export const StyledNeedMoreHelp = styled.section`
  background-color: #f8fafc;
  padding: 50px 0px 50px 120px;
  margin-bottom: 100px;

  @media screen and (max-width: 1000px) {
    padding-left: 50px;
  }

  @media screen and (max-width: 500px) {
    padding: 40px 30px;
  }

  & div {
    width: 55%;

    @media screen and (max-width: 1000px) {
      width: 80%;
    }

    @media screen and (max-width: 500px) {
      width: 90%;
    }

    & h2 {
      font-weight: 600;
      font-size: 40px;

      @media screen and (max-width: 1000px) {
        font-size: 32px;
      }

      @media screen and (max-width: 500px) {
        font-size: 25px;
      }
    }

    .more {
      margin: 13px 0;
      font-size: 18px;
      line-height: 1.5;

      @media screen and (max-width: 1000px) {
        font-size: 16px;
      }

      @media screen and (max-width: 500px) {
        font-size: 17px;
      }
    }

    .link {
      display: flex;
      gap: 10px;
      flex-direction: row;
      width: 100%;
      align-items: center;
      cursor: pointer;
    }

    .linkText {
      color: rgba(0, 98, 255, 1);
      font-weight: bold;
      font-size: 18px;
    }
  }
`;
