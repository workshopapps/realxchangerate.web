import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  /* padding: 0 20px; */
  margin: 0 auto;
`;

export const Heropage = styled.div`
  background: #00296b;
  width: 100%;
  padding: 64px 121px;
  color: #fff;

  background: #00296b;
  width: 100%;
  padding: 70px 100px;
  color: #fff;
  // max-width: 1101px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 64px 30px;
  }

  h5 {
    font-size: 20px;
    font-weight: 400;
  }

  h1 {
    font-size: 48px;
    line-height: 56px;

    padding-bottom: 4.5rem;
    padding-top: 1.5rem;
  }

  Button {
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    font-weight: 700;
    font-size: 28px;
    padding: 4rem 0rem 5rem 0rem;
    width: 100%;

    h5 {
      font-weight: 600;
      font-size: 14px;
      margin-left: 1.5rem;
    }

    h1 {
      width: 306px;
      font-size: 28px;
      font-weight: 700;
      margin-left: 1.5rem;
      line-height: 32px;
      letter-spacing: -0.02em;
    }

    Button {
      margin-left: 1.5rem;
      font-size: 1.5rem;
      margin-bottom: 20px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 736px) {
    font-weight: 700;
    font-size: 28px;

    width: 100%;

    h5 {
      font-weight: 600;
      font-size: 14px;
      margin-left: 1.5rem;
    }

    h1 {
      width: 306px;
      font-size: 28px;
      font-weight: 700;
      margin-left: 1.5rem;
      line-height: 32px;
      letter-spacing: -0.02em;
    }

    Button {
      margin-left: 1.5rem;
      font-size: 1.5rem;
      margin-bottom: 20px;
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  background: ${({ primary }) => (primary ? "#0062FF" : "#ffffff")};
  color: ${({ primary }) => (primary ? "#ffffff" : "#0062FF")};

  padding: 16px 20px;
  gap: 8px;
  font-size: 1.5rem;
  /* background-color: #0062FF; */
  /* color: #fff; */
  border: 1px solid #0062ff;
  border-radius: 4px;
  width: max-content;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

export const NewsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 4rem 10rem;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    padding: 4rem 0rem;
  }
  @media screen and (max-width: 768px) {
    padding: 64px 10px;
  }
  @media screen and (max-width: 1079px) {
    padding: 64px 10px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;

  a {
    padding-bottom: 0.5rem;
    padding-right: 1.5rem;
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media screen and (max-width: 540px) {
    font-size: 1.5rem;
    /* padding: .5rem 1rem; */
    flex-direction: column;
    a {
      font-size: 1.5rem;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  font-weight: 600;
  font-size: 22px;

  @media screen and (min-width: 540px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 540px) {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    gap: 1rem;
    a {
      font-size: 1.5rem;
    }
  }
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  @media screen and (min-width: 540px) {
    justify-content: center;
  }

  @media screen and (max-width: 540px) {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    gap: 1rem;
    a {
      font-size: 1.5rem;
    }
  }
`;

export const Search = styled.div`
  outline: none;
  padding: 12px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 14px;
  font-weight: 400;
  font-size: 14px;

  display: flex;
  align-items: center;
  gap: 0.6rem;

  .search-input {
    outline: none;
    border: none;
    width: 130px;
  }

  @media screen and (max-width: 540px) {
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 4px;
  }
`;

export const TopicButton = styled.button`
  padding: 12px 18px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  background: #ffffff;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    padding: 0.5rem;
    /* width: 126px; */
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 4rem;

  @media screen and (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 830px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 540px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    gap: 1rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  filter: drop-shadow(0px 4px 8px rgba(170, 170, 170, 0.08));
  border-radius: 1rem;
  border: 2px solid #e8e9eb;

  img {
    /* width: 100%; */
    margin: 0 2.5rem 1rem;
    border-radius: 0.5rem;
  }

  p {
    position: relative;
    top: 0rem;
    margin: 0;
    margin: 1rem 1.5rem 0.5rem;
    background: #49c96d80;
    color: #20a144;
    padding: 8px 5px;
    width: max-content;
    font-size: 12px;
    line-height: 1rem;
    border-radius: 4px;
  }

  h3 {
    margin: 12px 1.5rem;
    color: #131825;
  }

  h3 {
    &:active,
    &:hover {
      color: #0046b5;
    }
  }

  a {
    margin: 0 1.5rem;
    margin-bottom: 1rem;
    line-height: 24px;
    color: #00368c;
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
  }

  hr {
    width: 100%;
    background-color: #e8e9eb;
    border-style: none;
    height: 1px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 300px;
  }

  @media screen and (max-width: 1079px) {
    max-width: 250px;
  }

  @media screen and (max-width: 768px) {
    max-width: 250px;
  }

  @media screen and (min-width: 1080px) {
    max-width: 250px;
  }

  @media screen and (min-width: 1090px) {
    max-width: 305px;
  }

  @media screen and (max-width: 540px) {
    max-width: 300px;

    h3 {
      font-weight: 400;
    }
  }
`;

export const NewsButton = styled(Button)`
  margin: 0 auto;
  margin-top: 40px;
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 6rem 0;
`;

export const TeamHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 400px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    padding: 2.5rem 8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

export const TeamCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 164px;
  gap: 64px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    font-size: 1rem;
    padding: 2.5rem 8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
`;

export const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    margin-bottom: 20px;
  }

  img {
    border-radius: 0.5rem;
  }

  @media screen and (max-width: 480px) {
    max-width: 132px;
  }
`;

export const Contact = styled.div`
  border: 1px solid #e2e8f0;
  padding: 64px 305px;
  h1 {
    margin-bottom: 1rem;
  }

  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    padding: 2.5rem 8rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0rem 0rem;

    h1 {
      font-size: 1rem;
    }
  }
`;
export const ContactHeader = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 12px;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    padding: 2.5rem 8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    padding: 0rem 0rem;
  }
`;

export const SearchIcon = styled.div`
  font-size: 1.5rem;
`;
