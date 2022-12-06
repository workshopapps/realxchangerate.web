import styled from "styled-components";

export const Container = styled.section`
  padding: 40px 20px 20px 20px;
  background: #ffffff;
  border-radius: 10px;
  width: 100%;
  h2 {
    margin-bottom: 1.5rem;

    font-size: clamp(1.2rem, 2vw, 1.4rem);
  }
  .inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    gap: 16px;

    /* > * {
      width: 27%;
    } */
    /* .select {
			width: 40%;
		} */
    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .addCurr {
    > * {
      width: 25%;
    }
    .add {
      width: 50%;
      margin-left: 12px;
    }
  }
`;
