import styled from "styled-components";

export const AmbassadorsImages = styled.section`
  display: flex;
  padding: 50px 20px;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;

  @media screen and (max-width: 1200px) {
    gap: 20px;
  }

  @media screen and (max-width: 700px) {
    gap: 10px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }

  & div {
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 30px;
    align-items: center;

    @media screen and (max-width: 700px) {
      width: 23%;
    }

    @media screen and (max-width: 500px) {
      width: 60%;
    }

    & img {
      width: 100%;
    }

    .header {
      font-weight: 600;
      font-size: 20px;
      margin-top: 15px;
      margin-bottom: 3px;

      @media screen and (max-width: 900px) {
        font-size: 16px;
      }
    }
  }

  .title {
    font-size: 17px;

    @media screen and (max-width: 900px) {
      font-size: 14px;
    }
  }
`;
