import React from "react";
import { Container, Grid } from "@mui/material";
import {
    Header,
    Title,
    Wrapper,
    Paragraph,
    Section,
    Text,
    SubSection,
    SubTitle,
} from "./styles";

const HelpCenter = () => {
    return (
        <Container maxWidth="xl">
            <Wrapper>
                <Title position={{ align: "left" }}>Help Center</Title>
                <Header>Hi, How can we help?</Header>
                <Paragraph>
                    Welcome to the StreetRate Help Center Portal. Here you will
                    find answers to all your exchange rate questions. From
                    choosing your base currency and your country location, our
                    integrated matrix, services and more.
                </Paragraph>
                <Section>
                    <Title position={{ align: "center" }}>
                        Still in need of support? Our support team are available
                        to help.{" "}
                    </Title>
                    <SubSection>
                        <Text>Email: Contact@streetrate.com</Text>
                        <Text>
                            Contact Address: 2, Hamilton Avenue, Silicon Valley,
                            California
                        </Text>
                        <Text>International Contact: +62 528 124 5600</Text>
                    </SubSection>
                </Section>
                <Title position={{ align: "left", marginTop: "60px" }}>
                    Popular FAQs{" "}
                </Title>
                <Grid container spacing={5} alignItems="stretch">
                    <Grid item xs={12} sm={4}>
                        <Section>
                            <SubTitle>
                                What is the best time to exchange my money?
                            </SubTitle>
                            <Text>
                                Most trading happens in the UK and US market, so
                                8am GMT to 5pm EST, is when the market is mostly
                                liquid and the difference between the bid and
                                ask rates is minimal.
                            </Text>
                        </Section>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Section>
                            <SubTitle>How can I convert my money?</SubTitle>
                            <Text>
                                We have paterned with Aboki FX to offer you a
                                money conversion service. Our global money
                                transfers are tailored to meet your FX payments
                                needs.
                            </Text>
                        </Section>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Section>
                            <SubTitle>
                                Which currencies can i convert with the currency
                                converter?
                            </SubTitle>
                            <Text>
                                We have 212 currencies which are being used in
                                the new currency converter. Visit this page to
                                view the complete list.
                            </Text>
                        </Section>
                    </Grid>
                </Grid>
            </Wrapper>
        </Container>
    );
};

export default HelpCenter;
