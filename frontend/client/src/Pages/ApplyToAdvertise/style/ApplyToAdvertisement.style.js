import styled from "styled-components";
const Container = styled.div`
  margin-left: 110px;
  margin-right: 110px;
  margin-bottom: 10px;
  margin-top: 10px;

  @media (max-width: 467px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (min-width: 465px) {
    margin-left: 42px;
    margin-right: 42px;
  }

  @media (min-width: 1024px) {
    margin-left: 55px;
    margin-right: 55px;
  }

  @media (min-width: 1440px) {
    margin-left: 110px;
    margin-right: 110px;
  }

  @media (min-width: 1140px) {
    margin-left: 110px;
    margin-right: 110px;
  }

  @media (min-width: 2560px) {
    margin-left: 200px;
    margin-right: 200px;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #0f172a;

    @media (max-width: 834px) {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
    }
  }

  li {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #555962;
    @media (max-width: 834px) {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      /* or 143% */

      letter-spacing: 0.001em;
    }
  }
  ul {
    padding-top: 10px;
    padding-right: 25px;
    padding-left: 25px;
  }

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    padding-top: 20px;
    padding-bottom: 45px;
    color: #555962;

    @media (max-width: 834px) {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.02em;
    }
  }
  ${"" /* this is for the application form section */}
  .app-wrapper {
    h3 {
      padding-top: 20px;
      padding-bottom: 15px;

      @media (max-width: 834px) {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
      }
    }

    .input--item {
      display: flex;
      flex-direction: column;
      padding-top: 15px;
      padding-bottom: 15px;

      label {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        padding-bottom: 3px;

        @media (max-width: 833px) {
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          /* identical to box height, or 143% */

          letter-spacing: -0.02em;
        }
      }

      input {
        padding-top: 10px;
        padding-bottom: 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        border: 1px solid #cbd5e1;
        border-radius: 4px;
        outline: none;
        padding-left: 12px;
      }
    }

    button {
      background: #0062ff;
      border-radius: 4px;
      width: 100%;
      border: none;
      padding-top: 12px;
      padding-bottom: 12px;
      margin-top: 30px;
      margin-bottom: 100px;
      color: #f8fafc;
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 28px;

      @media (max-width: 425px) {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height, or 143% */

        text-align: center;
        letter-spacing: -0.02em;
      }
    }

    button:hover {
      cursor: pointer;
    }

    .inputs--container {
      margin-right: 120px;

      @media (max-width: 834px) {
        margin-right: 10px;
      }

      @media (min-width: 1440px) {
        margin-right: 120px;
      }

      @media (min-width: 2560px) {
        margin-right: 600px;
      }
    }
  }
`;

export default Container;
