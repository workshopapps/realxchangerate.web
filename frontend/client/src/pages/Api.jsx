import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import heroImage from '../assets/Api page assets/heroImage.png'
import padlock from '../assets/Api page assets/padlock.png'
import rocket from '../assets/Api page assets/rocket.png'
import dart from '../assets/Api page assets/dart.png'
import bg from '../assets/Api page assets/bg.png'
import { useState } from "react";

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
const StyledCards = styled.section`
  padding: 0 12rem;
  background-color: #f1f5f9;
  width: 100vw;
  ul {
    background-color: transparent;
    display: flex;
    width: 100%;
    justify-content: space-between;
    transform: translateY(-10rem);
  }
  li {
    background-color: #f8fafc;
    width: 38rem;
    border-radius: 0.8rem;
    padding: 4rem;
    height: 38rem;
  }
  div {
    height: 6rem;
    width: 6rem;
    border-radius: 0.8rem;
    padding: 1rem;
    margin-bottom: 2.4rem;
  }
  h6 {
    font-size: 1.8rem;
    margin-bottom: 2.4rem;
  }
  .icon1 {
    background-color: #ffbfb280;
  }
  .icon2 {
    background-color: #e6efff;
  }
  .icon3 {
    background-color: #c3f2df;
  }
  @media only screen and (max-width: 87rem) {
    padding: 0 8rem;
    background-color: #fff;
    ul {
      transform: translateY(-9rem);
    }
    li {
      padding: 4rem 2.4rem;
      width: auto;
      flex-basis: 30%;
      height: auto;
    }
  }
  @media only screen and (max-width: 42rem) {
    padding: 2rem 2rem 0 2rem;
    background-color: #f1f5f9;
    ul {
      flex-direction: column;
      transform: translateY(-8rem);
      gap: 2.4rem;
    }
    li {
      flex-basis: 100%;
    }
  } ;
`;
const Cards = () => {
    const cardContent = [
        {
            id: 1,
            icon: rocket,
            heading: 'Swift and Simple Integration',
            body: `Our exchange rate API is built for developers. We make it easy to plug-in to your existing software. You'll receive SDKs for Java, NodeJS, PHP, and Python.`,
        },
        {
            id: 2,
            icon: dart,
            heading: 'Credible and Accurate',
            body: 'To ensure accuracy and authenticity, diversify your FX sources. We provide currency rates from central banks so you can satisfy the legal requirements for financial compliance at your business.',
        },
        {
            id: 3,
            icon: padlock,
            heading: 'Secure and Reliable',
            body: 'A dedicated Internet connection, the GET HTTP technique, the REST protocol, and HTTPS security. Further, we provide fully redundant servers and UTC timestamps.',
        }
    ]
    return (
        <StyledCards>
            <ul>
                {
                    cardContent.map((i) => {
                        return (
                            <li key={i.id}>
                                <div className={`icon${i.id}`}><img src={i.icon} alt={`Card ${i.id}`} /></div>
                                <h6>{i.heading}</h6>
                                <p>{i.body}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </StyledCards>
    )
}
const StyledBenefits = styled.section`
  width: 100vw;
  padding: 6rem 12rem;
  background: linear-gradient(
      0deg,
      rgba(245, 246, 248, 0.3),
      rgba(245, 246, 248, 0.3)
    ),
    url(${bg});
  height: 65rem;
  background-position: center;
  background-size: cover;
  position: relative;
  div {
    padding: 6rem 4rem;
    background-color: #f8fafc;
    width: 48rem;
    border-radius: 0.8rem;
    margin: auto 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  h5 {
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
  }
  @media only screen and (max-width: 87rem) {
    padding: 6rem 8rem;
  }
  @media only screen and (max-width: 42rem) {
    padding: 4rem 2rem;
    height: 56rem;
    div {
      padding: 2.4rem;
      width: 100%;
      position: static;
      transform: translateY(0);
    }
    h5 {
      font-size: 1.8rem;
    }
  }
`;
const StyledFaqs = styled.section`
  padding: 6rem 20rem;
  width: 100vw;
  background-color: #f1f5f9;
  h4 {
    font-size: 2.8rem;
    margin-bottom: 4.3rem;
  }
  li {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    &:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
  .reveal-trigger {
    position: relative;
    width: 5rem;
    height: 5rem;
    display: grid;
    place-items: center;
    transition: 0.5s;

    div {
      position: absolute;
      background-color: #0a17a7;
      width: 0.4rem;
      height: 2.4rem;
      border-radius: 0.1rem;

      &:nth-child(1) {
        transform: rotate(90deg);
      }
    }
  }
  @media only screen and (max-width: 87rem) {
    background-color: #fff;
    padding: 6rem 10rem;
  }
  @media only screen and (max-width: 42rem) {
    padding: 4rem 2.4rem;
    background-color: #f1f5f9;
    h4 {
      font-size: 2.2rem;
    }
  }
`;
const Faqs = () => {
    const [faqs, setFaqs] = useState([
        {
            id: 1,
            question: 'How to get access to the API?',
            isOpen: false,
        },
        {
            id: 2,
            question: 'How does it work?',
            isOpen: false,
        },
        {
            id: 3,
            question: `Can't find what you are looking for?`,
            isOpen: false,
        },
    ])
    const handleReveal = (faq) => {
        setFaqs(faqs.map(j => {
            if (j.id === faq.id && !j.isOpen) {
                return { ...j, isOpen: true }

            } else if (j.id === faq.id && j.isOpen) {
                return { ...j, isOpen: false }
            } else {
                return { ...j, isOpen: false }
            }
        }))
    }
    return (
        <StyledFaqs>
            <h4>Frequently Asked Questions</h4>
            <ul>
                {
                    faqs.map((i) => {
                        return (
                            <li key={i.id} onClick={() => handleReveal(i)}>
                                <div className="reveal-trigger" style={{ transform: `${i.isOpen ? 'rotate(45deg)' : 'rotate(0)'}` }}>
                                    <div></div>
                                    <div></div>
                                </div>
                                <p>{i.question}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </StyledFaqs>
    )
}
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
            <Cards />
            <StyledBenefits>
                <div>
                    <h5>Real-time, Accurate and Credible Data for World Currencies</h5>
                    <p>
                        Auditors, accountants, hedge fund managers, treasurers, software developers and product managers use our API to track FX movements accurately and consistently. The ability to automate your exchange rate retrieval processes will put your auditors at ease and give your finance department accurate rates they can trust. The simple and flexible functionality of our API accurately tracks FX movements and eliminates manual errors. Supports JSON, XML and CSV formats.
                    </p>
                </div>
            </StyledBenefits>
            <Faqs />
        </div>
    )
}

export default Api;