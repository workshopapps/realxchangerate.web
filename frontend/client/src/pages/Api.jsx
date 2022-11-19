import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import heroImage from '../assets/Api page assets/heroImage.png'

const ApiGlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    :root {
        font-size: 0.625em;
    }
    .fro-51-api {
        font-size: 1.6rem;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        overflow-x: hidden;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    h1, h2, h3, h4, h5, h6 {
        color: #0f172a;
        font-weight: 800;
    }
    p {
        color: #555962;
        line-height: 2.4rem;
    }
`;
const StyledHero = styled.section`
  padding: 18.7rem 12rem 19.5rem 12rem;
  background-color: #e6efff;
  width: 100vw;
  display: flex;
  gap: 7rem;
  .hero-text {
    flex-basis: 55%;
  }
  h1 {
    font-size: 4.8rem;
    margin-bottom: 4rem;
    color: #0f172a;
  }
  p {
    color: #555962;
    margin-bottom: 4rem;
    line-height: 2.4rem;
  }
  button {
    padding: 1.4rem 2rem;
    background-color: #0062ff;
    height: 5rem;
    width: 14.3rem;
    border-radius: 0.5rem;
    border: none;
    color: #fff;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 400;
  }
  .hero-image {
    flex-basis: 45%;
  }
  @media only screen and (max-width: 87rem) {
    padding: 14rem 8rem 17.8rem 8rem;
    .hero-text {
      flex-basis: 40%;
    }
    h1 {
      font-size: 3.6rem;
    }
    p {
      width: 55rem;
    }
    .hero-image {
      flex-basis: 50%;
    }
  }
  @media only screen and (max-width: 42rem) {
    padding: 10rem 2rem 13.5rem 2rem;
    flex-direction: column;
    h1 {
      font-size: 2.8rem;
      margin-bottom: 2.4rem;
    }
    p {
      width: 100%;
      margin-bottom: 2.4rem;
    }
    button {
      padding: 1.2rem 1.8rem;
      width: 11.5rem;
      height: 4.4rem;
    }
  }
`;

const Api = () => {
    return (
        <div className="fro-51-api">
            <ApiGlobalStyle />
            <StyledHero>
                <div className="hero-text">
                    <h1>The Most Reliable Currency Data API in the World</h1>
                    <p>
                        Our currency exchange rate API offers real-time, precise, and dependable currency exchange data for hundreds of different global currencies and has years of FX and currency knowledge. StreetRate proprietary rates are sourced from financial data providers and central bank.
                    </p>
                    <button>Get  Started</button>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt='Hero SVG' />
                </div>
            </StyledHero>
        </div>
    )
}

export default Api;