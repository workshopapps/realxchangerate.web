import styled from "styled-components";

export const Container = styled.div`
    /* diaplay: flex; */
    /* flex-direction: col; */
    align-content: center;
    justify-content: center;
    padding: 1.5rem;
    margin-top: -2rem;
    @media only screen and (min-width: 768px) {
        padding: 5rem;
    }
`;
export const TextWrapper = styled.div`
    text-align: center;
    padding: 2rem 1.5rem;
`;

export const Button = styled.button`
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    padding: 10px ${(props) => props.padding};
    border: none;
    align-self: flex-start;
    height: 48px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`;

export const BigText = styled.h1`
    font-style: normal;
    font-size: 38px;
    letter-spacing: -0.02em;
    color: #06102b;

    @media only screen and (min-width: 992px) {
        font-size: 48px;
    }
`;
export const Paragraph = styled.p`
    margin-top: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.02em;

    @media only screen and (min-width: 992px) {
        font-weight: 34px;
    }
`;

export const GetInTouch = styled.button`
    border-radius: 5px;
    padding: 8px;
    background: #0062ff;
    cursor: pointer;
    border: none;
    color: white;
    font-size: 12px;
    align-self: center;
    width: 48%;
    @media only screen and (min-width: 768px) {
        padding: 20px;
        width: auto;
        font-size: 16px;
    }
`;
export const FaqContainer = styled.section``;
export const FaqWrapper = styled.section`
    display: grid;
    margin: 50px auto;
    grid-template-columns: 1fr;
    gap: 5rem;

    @media only screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10rem 4rem;
    }
`;
export const Question = styled.h3`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0f172a;
    margin: 10px 0px 4px 0px;

    @media only screen and (min-width: 768px) {
        font-size: 2rem;
        margin: 10px 0px;
    }
`;
export const Answer = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: #555962;

    @media only screen and (min-width: 768px) {
        font-size: 18px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    background: #fdf0cb;
    border-radius: 16px;
    justify-content: space-between;
    align-content: center;
    padding: 1rem;
    margin: 9rem 0 10rem 0;
    @media only screen and (min-width: 992px) {
        padding: 1.5rem;
        margin: 9rem 0 10rem 0;
    }
`;
