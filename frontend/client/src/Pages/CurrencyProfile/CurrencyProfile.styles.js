import styled from "styled-components";

export const Button = styled.button`
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    padding: 10px ${(props) => props.padding};
    border: none;
    align-self: flex-start;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`;
