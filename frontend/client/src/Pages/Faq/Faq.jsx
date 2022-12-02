import React, { useState } from "react";
// import SearchIcon from "./assets/searchIcon.svg";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import FaqCard from "./components/FaqCard";
import { faqData } from "./FaqData";
import { Container, Box } from "@mui/material";

import {
    TextWrapper,
    BigText,
    Paragraph,
    FaqContainer,
    FaqWrapper,
    Wrapper,
    Question,
    Answer,
    Button,
    GetInTouch,
} from "./styles/FaqPage.styled";

const Faq = () => {
    const [searchField, setSearchField] = useState("");

    const filteredFaq = faqData.filter((faq) => {
        return (
            faq.quest.toLowerCase().includes(searchField.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchField.toLowerCase())
        );
    });

    const handleChange = (e) => {
        setSearchField(e.target.value);
    };
    return (
        <div>
            <Box
                sx={{
                    padding: {
                        xs: "50px 0px 50px 0px",
                        sm: "40px",
                        md: "90px",
                    },
                }}
                style={{ background: "#BBCAF3" }}
            >
                <Container
                    style={{
                        maxWidth: "1440px",
                        margin: "auto",
                    }}
                    sx={{
                        paddingLeft: { xs: 2, sm: 2, md: 2, lg: 9, xl: 9 },
                        paddingRight: { xs: 2, sm: 2, md: 2, lg: 9, xl: 9 },
                    }}
                >
                    <Box>
                        <TextWrapper>
                            <BigText>Frequently Asked Questions</BigText>
                            <Paragraph>
                                Have any question? We are here to assist you.
                            </Paragraph>
                        </TextWrapper>
                        <Paper
                            component="form"
                            sx={{
                                p: "5px",
                                display: "flex",
                                alignItems: "center",
                                width: { xs: "100%", md: 600 },
                                margin: "30px auto auto auto",
                                borderRadius: "10px",
                            }}
                            elevation={0}
                        >
                            <IconButton
                                type="button"
                                sx={{ p: "10px 0px 10px 10px" }}
                                aria-label="search"
                                disableRipple
                            >
                                <SearchIcon
                                    style={{ fontSize: 30, cursor: "hair" }}
                                />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search FAQs"
                                inputProps={{
                                    "aria-label": "Search FAQs",
                                }}
                                style={{
                                    height: "45px",
                                    fontSize: "16px",
                                }}
                                onChange={(e) => handleChange(e)}
                            />
                            <Button color="#fff" bg="#0062ff" padding="20px">
                                Search
                            </Button>
                        </Paper>
                    </Box>
                </Container>
            </Box>
            <Container
                style={{
                    maxWidth: "1440px",
                    margin: "auto",
                }}
                sx={{
                    paddingLeft: { xs: 2, sm: 2, md: 2, lg: 9, xl: 9 },
                    paddingRight: { xs: 2, sm: 2, md: 2, lg: 9, xl: 9 },
                }}
            >
                <FaqContainer>
                    <FaqWrapper>
                        {filteredFaq.map((faq, index) => (
                            <FaqCard data={faq} key={index} />
                        ))}
                    </FaqWrapper>
                    <Wrapper>
                        <div>
                            <Question>Still have questions?</Question>
                            <Answer>
                                Can’t find answer you’re looking for? Please
                                chat our support team.
                            </Answer>
                        </div>
                        <GetInTouch>Get in touch</GetInTouch>
                    </Wrapper>
                </FaqContainer>
            </Container>
        </div>
    );
};

export default Faq;
