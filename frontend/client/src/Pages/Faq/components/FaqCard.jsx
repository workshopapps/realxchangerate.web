import React from "react";
import styled from "styled-components";
import { useTheme } from "@mui/material";

const FaqCard = ({ data }) => {
    const theme = useTheme();
    const DarkMode = theme.palette.mode === "dark";

    const textColor = DarkMode ? "#fff" : "#0f172a";
    return (
        <Container>
            <img src={data.img} alt="ExchangeIcon" />
            <Question style={{ color: textColor }}>{data.quest}</Question>
            <Answer>{data.answer}</Answer>
        </Container>
    );
};

const Container = styled.div`
    diaplay: flex;
    flex-direction: col;
    justify-content: center;
    align-items: center;
`;
const Question = styled.h3`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin: 12px 0px;
`;
const Answer = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #555962;
`;

export default FaqCard;
