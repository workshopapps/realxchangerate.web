import styled from "styled-components";

export const StyledComplaintQuery = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #f8fafc;

  @media screen and (max-width: 834px) {
    display: flex;
    flex-direction: column;
  }

  .query {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 80px;

    @media screen and (max-width: 1100px) {
      gap: 5px;
    }

    .link {
      display: flex;
      gap: 10px;
      flex-direction: row;
      width: 100%;
      align-items: center;
    }

    @media screen and (max-width: 1100px) {
      margin-left: 50px;
    }

    @media screen and (max-width: 834px) {
      width: 90%;
      margin: 30px auto;
    }

    & h3 {
      font-size: 50px;

      @media screen and (max-width: 1100px) {
        font-size: 40px;
      }
    }

    & p {
      font-size: 18px;

      @media screen and (max-width: 1100px) {
        font-size: 15px;
      }
    }

    .topText {
      font-weight: 600;
    }

    .bottomText {
      width: 80%;
      line-height: 1.5;

      @media screen and (max-width: 834px) {
        width: 90%;
      }
    }

    .linkText {
      color: #0062ff;
      font-weight: bold;
      font-size: 16px;
    }
  }

  .queryImage {
    width: 600px;

    @media screen and (max-width: 1100px) {
      width: 450px;
    }

    @media screen and (max-width: 834px) {
      width: 90%;
    }
  }
`;
