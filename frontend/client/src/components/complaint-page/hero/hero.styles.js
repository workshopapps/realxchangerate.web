import styled from "styled-components";

const HeroWrapper = styled.section`
  width: 100%;
  height: 100%;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 60px;
    margin-left: 45px;
    margin-top: 68px;
  }

  .hero-desc {
    max-width: 35rem;
  }

  .hero-desc h1 {
    font-weight: 400;
    font-size: 3.75rem;
    line-height: 4.5rem;
    letter-spacing: -0.04em;
    color: #0062ff;
  }

  .hero-desc button {
    background: #0062ff;
    border-radius: 5px;
    padding: 14px 20px;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: #f8fafc;
    cursor: pointer;
  }

  .hero-img img {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    .container {
      flex-direction: column;
      margin: 48px auto;
    }

    .hero-desc {
      max-width: 10.56rem;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
    .hero-desc h1 {
      font-size: 1.25rem;
      line-height: 1.9rem;
      text-align: center;
    }


    .hero-img {
      margin: 20px 49px;
    }

    .hero-desc button {
      padding: 8px 12px;
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }

  // @media screen and (max-width: 100px){
  //   .hero-desc h1 {
  //     font-size: 2.25rem;
  //     line-height: 3rem;
  //     // text-align: center;
  //   }
  // }
`;

export default HeroWrapper;
