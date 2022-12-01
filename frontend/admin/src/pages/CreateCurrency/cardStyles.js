import styled from "styled-components";

export const Container = styled.div`
  width: 32%;
  max-width: 350px;
  padding: 30px 16px 64px 16px;

  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.bg};
  justify-content: center;
  align-items: center;
  .integration_info {
    .type {
      /* text-align: center; */

      /* display: flex;
      flex-direction: column;
      gap: 20px; */
    }
    .type__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      & img {
        width: 64px;
      }
    }
    .icon {
      width: 40px;
      height: 30px;
      margin-right: 7px;
      border-radius: 50%;
      // border: 1px solid red;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .type {
      h2 {
        font-size: clamp(1rem, 1.5vw, 1.1rem);
        /* margin-bottom: 1.5rem; */
        color: #000000;
        font-weight: 700;
      }
      p {
        font-size: clamp(0.85rem, 1vw, 1rem);
        color: #1e293b;
      }
    }
  }
  @media screen and (max-width: 930px) {
    width: 90%;
    max-width: 400px;
  }
`;
