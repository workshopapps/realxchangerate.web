import { ArrangeHorizontal } from "iconsax-react";
import React from "react";
import styled from "styled-components";
import scanImage from "../assets/scan-image.png";
import { noWCommas } from "../utils";

const Hero = () => {
  const [rates, setRates] = React.useState({});
  const [convert, setconvert] = React.useState(1);
  const endpoint =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000/api/rate/NGN"
      : process.env.NODE_ENV === "production"
      ? "http://exchange.hng.tech:8000/api/rate/NGN"
      : "";
  React.useEffect(() => {
    const fetchRates = async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      return data;
    };
    fetchRates().then((ratesData) => {
      setRates(ratesData.data.rate);
    });
  }, [endpoint]);
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 60px 80px;
    align-items: center;
    font-family: "Inter", sans-serif;
    margin-top: 100px;
    margin-bottom: 50px;
    max-width: 1600px;
    margin: auto;

    @media screen and (max-width: 400px) {
      flex-direction: column;
      padding: 0 15px;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 48px;
      padding: 0 20px;
      & :first-child {
        /* order: 1; */
      }
      & :last-child {
        width: 80%;
      }
    }
  `;

  const Container1 = styled.div`
    max-width: 600px;
    margin-right: 10px;

    h5 {
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #0062ff;
      font-weight: 400;
      font-size: 16px;
    }

    h2 {
      font-size: 48px;
      font-weight: 800;
    }

    p {
      margin-top: 20px;
      color: #555962;
      line-height: 28px;
      font-size: 20px;
    }

    div {
      margin-top: 20px;
      display: flex;

      align-items: center;

      img {
        padding-right: 10px;
      }

      p {
        color: #000;
        font-weight: 700;
        line-height: 20px;
      }
    }

    .download {
      margin-top: 30px;
    }

    @media screen and (max-width: 400px) {
      width: 100%;
      margin-right: 0;
      text-align: center;
      order: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 20px;

      h2 {
        font-size: 32px;
      }

      div {
        justify-content: center;
      }
    }

    @media screen and (max-width: 768px) {
      h2 {
        font-size: 24px;
        margin-top: 5px;
      }

      p {
        font-size: 14px;
        line-height: 20px;
      }
    }
  `;

  const Container2 = styled.div`
    width: 50%;
    margin-left: 10px;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      order: 1;
      text-align: center;
      padding: 10px 0;
      font-size: 24px;
    }

    form {
      order: 2;
      .amount {
        display: flex;
        flex-direction: column;
        margin: 30px 0;
        outline: none;
        width: 100%;
        gap: 6px;
        align-items: center;
        & label {
          font-size: 16px;
        }
      }

      label {
        font-weight: 800;
        margin-bottom: 10px;
      }

      input {
        padding: 15px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        outline: none;
        width: 100%;
      }
      select {
        text-decoration: none;
        border: none;
        padding: 10px 10px;
        cursor: pointer;
        font-size: medium;
        width: 100%;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        outline: none;
      }

      select:first-child {
        margin-right: 10px;
      }

      select:last-child {
        margin-left: 10px;
      }
      button {
        background-color: #b0ceff;
        border: none;
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        margin: 20px 0;
      }

      .currency {
        display: flex;
        align-items: center;
        margin: 10px 0;
      }
    }

    @media screen and (max-width: 768px) {
      margin-right: 0;
      text-align: center;

      form {
        input {
          padding: 20px 10px;
        }

        .currency {
          flex-direction: column;
          & svg {
            order: 2;
          }
        }

        select:first-child {
          margin-right: 0px;
          margin-bottom: 20px;
          order: 1;
          width: 100%;
        }

        select:last-child {
          margin-left: 0px;
          margin-top: 20px;
          order: 3;
          width: 100%;
        }
      }
    }

    @media screen and (max-width: 768px) {
      .currency {
      }
    }
  `;
  return (
    <Wrapper>
      <Container1>
        <h5>Simple and Quick</h5>
        <h2>Check parallel market rate In Real time</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          reale he point of using Lorem Ipsum is that it has a more-or-less
          normal valid equity.
        </p>
        <div>
          <img src={scanImage} />
        </div>
        <div className="download">
          <a href="#!">
            <img src="/apple-store.svg" alt="" />
          </a>
          <a href="#!">
            <img src="/googleplay.svg" alt="" />
          </a>
        </div>
      </Container1>
      <Container2>
        <Rate className="rate">
          <div>
            At the the parallel market,{" "}
            <span className="convert"> {convert} </span>USD is
          </div>
          <div>
            {" "}
            <span className="rate">
              {" "}
              {noWCommas((rates.parallel_buy * Number(convert)).toFixed(2))}
            </span>{" "}
            <span> NGN</span>
          </div>
        </Rate>
        {/* <h3>Select a currency</h3> */}
        <form action="">
          <div className="amount">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Enter amount"
              value={convert}
              onChange={(e) => setconvert(e.target.value)}
            />
          </div>
          <div className="currency">
            <select name="currency" id="currency1">
              <option selected>USD</option>
              <option value="NG">Naira</option>
              <option value="NG">Naira</option>
              <option value="NG">Naira</option>
            </select>
            <ArrangeHorizontal size="32" color="#00296B" />
            <select name="currency" id="currency1">
              <option selected>Naira</option>
              <option value="NG">Naira</option>
              <option value="NG">Naira</option>
              <option value="NG">Naira</option>
            </select>
          </div>
          <button onClick={(e) => e.preventDefault()}>Convert</button>
        </form>
      </Container2>
    </Wrapper>
  );
};
const Rate = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .rate,
  .convert {
    color: #0062ff;
    font-weight: 700;
  }
  .rate {
    font-size: 4rem;
    order: 1 !important;
  }
  .convert {
    font-size: 2.5rem;
    order: 2 !important;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 80px;
  align-items: center;
  font-family: "Inter", sans-serif;
  margin-top: 100px;
  margin-bottom: 50px;
  max-width: 1600px;
  margin: auto;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    padding: 0 15px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 48px;
    padding: 0 20px;
    & :first-child {
      order: 1;
    }
    & :last-child {
      width: 80%;
    }
  }
`;

const Container1 = styled.div`
  width: 40%;
  margin-right: 10px;

  h5 {
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #0062ff;
    font-weight: 400;
    font-size: 16px;
  }

  h2 {
    font-size: 48px;
    font-weight: 800;
  }

  p {
    margin-top: 20px;
    color: #555962;
    line-height: 28px;
    font-size: 20px;
  }

  div {
    margin-top: 20px;
    display: flex;

    align-items: center;

    img {
      padding-right: 10px;
    }

    p {
      color: #000;
      font-weight: 700;
      line-height: 20px;
    }
  }

  .download {
    margin-top: 30px;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    margin-right: 0;
    text-align: center;
    order: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;

    h2 {
      font-size: 32px;
    }

    div {
      justify-content: center;
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 24px;
      margin-top: 5px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const Container2 = styled.div`
  width: 50%;
  margin-left: 10px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    order: 1;
    text-align: center;
    padding: 10px 0;
    font-size: 24px;
  }

  form {
    order: 2;
    .amount {
      display: flex;
      flex-direction: column;
      margin: 30px 0;
      outline: none;
      width: 100%;
      gap: 6px;
      align-items: center;
      & label {
        font-size: 16px;
      }
    }

    label {
      font-weight: 800;
      margin-bottom: 10px;
    }

    input {
      padding: 15px;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      outline: none;
      width: 100%;
    }
    select {
      text-decoration: none;
      border: none;
      padding: 10px 10px;
      cursor: pointer;
      font-size: medium;
      width: 100%;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      outline: none;
    }

    select:first-child {
      margin-right: 10px;
    }

    select:last-child {
      margin-left: 10px;
    }
    button {
      background-color: #b0ceff;
      border: none;
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      margin: 20px 0;
    }

    .currency {
      display: flex;
      align-items: center;
      margin: 10px 0;
    }
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    text-align: center;

    form {
      input {
        padding: 20px 10px;
      }

      .currency {
        flex-direction: column;
        & svg {
          order: 2;
        }
      }

      select:first-child {
        margin-right: 0px;
        margin-bottom: 20px;
        order: 1;
        width: 100%;
      }

      select:last-child {
        margin-left: 0px;
        margin-top: 20px;
        order: 3;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .currency {
    }
  }
`;

export default Hero;
