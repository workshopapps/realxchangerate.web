import styled from "styled-components";

export const MainWrapper = styled.section`
  margin: 0 16px;

  & > h1 {
    margin-top: 42px;
  }
  @media (min-width: 768px) {
    margin: 0 32px;

    & > h1 {
      display: none;
    }
  }
`;

export const Container = styled.section`
  border: 1px solid rgba(203, 213, 225, 1);
  padding: 10px;
  border-radius: 7px;

  .topSect {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
    margin: 0 0 1rem 0;
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 16px;
    h1 {
      color: rgba(30, 41, 59, 1);
      font-size: clamp(1.1rem, 2vw, 1.4rem);
      margin-bottom: 0.4rem;
    }
    p {
      font-size: clamp(0.8rem, 1.5vw, 1rem);
      color: rgba(71, 85, 105, 1);
    }
  }

  @media (min-width: 500px) {
    .topSect {
      flex-direction: row;
      gap: 0;
    }
  }
`;

export const Integration = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  margin: 50px 0;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1194px) {
    gap: 68px;
  }

  @media (max-width: ) @media screen and (max-width: 930px) {
    > * {
      width: 300px;
      margin-bottom: 1rem;
    }
  }
`;
