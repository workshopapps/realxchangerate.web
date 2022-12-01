import heroBg from "../assets/bgImage.png";
import styled from "styled-components";

export const HeroContainer = styled.div`
  text-align: center;
  padding: 20px 0 40px;

  @media (min-width: 768px) {
    padding-bottom: 60px;
  }
`;

export const HeroImageContainer = styled.div`
  padding: 0 16px;

  @media (min-width: 500px) {
    padding: 0 40px;
  }

  @media (min-width: 768px) {
    padding: 0 80px;
  }
  @media (min-width: 1280px) {
    padding: 0 120px;
  }
`;

export const HeroImage = styled.div`
  background: url(${heroBg}) center/cover;
  font-weight: 700;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  min-height: 140px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
  color: white;

  @media (min-width: 500px) {
    font-size: 24px;
    padding-bottom: 30px;
    min-height: 220px;
  }

  @media (min-width: 768px) {
    padding-bottom: 80px;
    font-size: 48px;
    min-height: 420px;
  }
  @media (min-width: 1280px) {
    padding-bottom: 100px;
    font-size: 60px;
    min-height: 498px;
    max-height: 498px;
  }
`;

export const HeroContents = styled.div`
  background: #e6efff;
  color: ${(props) => props.textColor};
  padding: 40px 0 42px;
  font-size: 12px;
  line-height: 18px;

  p {
    width: 80%;
    margin: 0 auto 16px;
  }

  a {
    background: #0062ff;
    color: #f8fafc;
    border-radius: 4px;
    font-weight: 600;
    padding: 6px 12px;
    text-decoration: none;
  }

  @media (min-width: 500px) {
    font-size: 16px;
    padding: 60px 0;

    p {
      margin-bottom: 24px;
      max-width: 1200px;
    }
  }

  @media (min-width: 768px) {
    padding: 80px 0;
    font-size: 20px;
    line-height: 30px;

    p {
      margin-bottom: 40px;
    }

    a {
      fon-size: 16px;
      padding: 16px 20px;
    }
  }

  @media (min-width: 1280px) {
    padding: 82px 0;
    font-size: 24px;
    line-height: 36px;
  }
`;

export const StudentAmbassadorsSection = styled.div`
  text-align: center;
  color: #0f172a;
  margin: auto;
  margin-bottom: 100px;
  max-width: 1120px;
  padding: 0 16px;

  h2 {
    font-size: 18px;
    color: ${(props) => props.color};
    margin-bottom: 40px;
  }

  @media (min-width: 500px) {
    h2 {
      padding: 0 40px;
      font-size: 24px;
    }
  }

  @media (min-width: 768px) {
    h2 {
      padding: 0 80px;
      font-size: 36px;
      margin-bottom: 60px;
    }
  }

  @media (min-width: 1024px) {
    h2 {
      padding: 0 120px;
      font-size: 48px;
    }
  }
`;

export const StudentAmbassadorsContainer = styled.div`
  color: ${(props) => props.color};
  display: grid;
  gap: 60px;
  justify-content: center;

  .image-container {
    margin-bottom: 40px;

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }

  h3 {
    margin-bottom: 8px;
    font-size: 20px;
  }

  span {
    font-size: 18px;
  }

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    .image-container {
      img {
        width: 240px;
        height: 240px;
      }
    }
  }
`;
