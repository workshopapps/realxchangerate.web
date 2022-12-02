import styled from "styled-components";

export const Container = styled.section`
  border: 1px solid rgba(203, 213, 225, 1);
  padding: 10px;
  border-radius: 7px;

  .topSect {
    display: flex;
    justify-content: space-between;
    margin: 0 0 2rem 0;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #cbd5e1;
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
`;

export const Integration = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  @media screen and (max-width: 930px) {
    align-items: center;
    flex-direction: column;
    // border: 1px solid red;
    > * {
      width: 300px;
      margin-bottom: 1rem;
    }
  }
`;
