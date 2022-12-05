import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  padding: 24px;
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
      margin-bottom: 16px;
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

        color: #000000;
        font-weight: 700;
      }
      p {
        font-size: clamp(0.85rem, 1vw, 1rem);
        color: #1e293b;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 30px 16px 54px;
  }
`;
