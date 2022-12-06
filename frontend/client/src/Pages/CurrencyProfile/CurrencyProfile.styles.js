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

export const StyledSelection = styled.div`
    display: flex;
    margin: 20px 0px 50px 0px;
    justify-content: space-between;
    align-items: center;
    .add {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .addspan {
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #0062ff;
        @media screen and (max-width: 480px) {
            font-size: 10px;
        }
    }
    .lastUpdate {
        display: flex;
        align-items: center;
        gap: 15px;
        @media screen and (max-width: 480px) {
            max-width: 50%;
        }
        i span {
            position: absolute;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            right: 18px;
            top: 9px;
        }
        span {
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            @media screen and (max-width: 480px) {
                font-size: 10px;
            }
        }
    }
`;

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    // padding: 30px 80px;
    div {
        div {
            display: flex;
            align-items: center;
            color: #0062ff;
            font-weight: 500;
            span {
                margin-left: 10px;
            }
        }
    }
    p {
        @media (max-width: 768px) {
            width: 96px;
        }
    }
`;
