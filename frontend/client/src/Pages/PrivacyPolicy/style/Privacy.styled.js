import styled from "styled-components";

export const Container = styled.div`
  padding: 52px 20px 235px;
  line-height: 24px;
  color: ${(props) => props.textColor}
  max-width: 1200px;

  h1,
  h2,
  h3 {
    line-height: 28px;
    font-weight: 600;
  }
  span {
    font-size: 16px;
  }
  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid black;
  }
  h1 {
    margin-bottom: 28px;
    font-size: 24px;
  }

  h2 {
    margin-bottom: 48px;
    font-size: 20px;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 20px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  section {
    margin-bottom: 42px;
  }

  @media (min-width: 768px) {
    padding: 72px 100px 180px;

    h1 {
      font-size: 48px;
    }
    h2 {
      margin-bottom: 16px;
    }
  }

  @media (min-width: 1280px) {
    padding: 90px 0 211px 100px;
  }

  @media (min-width: 1500px) {
    padding-left: 209px;
  }
`;

export const List = styled.ul`
  padding-left: 20px;
  font-size: 16px;

  li {
    margin-bottom: 20px;
  }
`;
