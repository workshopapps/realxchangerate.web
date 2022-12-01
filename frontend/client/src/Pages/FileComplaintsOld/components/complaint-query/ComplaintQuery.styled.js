import styled from "styled-components";

export const StyledComplaintQuery = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #f8fafc;

  & div {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 120px;

    & h3 {
      font-size: 50px;
    }

    & p {
      font-size: 18px;
    }

    .topText {
      font-weight: 600;
    }

    .bottomText {
      width: 70%;
    }

    .linkText {
      color: #1d4ed8;
      font-weight: bold;
    }
  }
`;
