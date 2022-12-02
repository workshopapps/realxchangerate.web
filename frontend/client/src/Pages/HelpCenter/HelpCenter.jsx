import React from "react";
import {  Grid, useTheme,Box,Typography } from "@mui/material";
import {
    Header,
    Title,
    //Wrapper,
    Paragraph,
    Section,
    Text,
    SubSection,
    SubTitle,
} from "./HelpCenter.style";

const HelpCenter = () => {
    const theme = useTheme()
	const DarkMode = theme.palette.mode === 'dark'

	const textColor = DarkMode ? "#fff" : ""

    return (
        <Box
        fontFamily= "'Inter', sans-serif" maxWidth="1440px"
        >
            <Box 
            margin="0px auto"
            sx={{
                maxWidth: { xs: "84%", sm: "90%", md: "84%" }
              }}>
                
                <Header style={{color:textColor}}>Hi, How can we help?</Header>
                <Paragraph style={{color:textColor}}>
                    Welcome to the StreetRate Help Center Portal. Here you will
                    find answers to all your exchange rate questions. From
                    choosing your base currency and your country location, our
                    integrated matrix, services and more.
                </Paragraph>
                <Section style={{marginTop:"64px"}}>
                    <Title position={{ align: "center" }} >
                        Still in need of support? Our support team are available
                        to help.{" "}
                    </Title>
                    <SubSection>
                        <Text ><Typography sx={{
                            fontWeight: 600,
                            lineHeight: {xs:'20px', sm:'24px'},
                            fontSize:{xs:'14px',sm:'18px'},
                            display:'inline',
                            textDecoration:'none'
                        }}>Email:</Typography> <span style={{textDecoration:"underline"}}>Contact@streetrate.com</span></Text>
                        <Text style={{marginTop:'20px',marginBottom:'20px', }}>
                            <Typography sx={{
                            fontWeight: 600,
                            lineHeight: {xs:'20px', sm:'24px'},
                            fontSize:{xs:'14px',sm:'18px'},
                            display:'inline'
                        }}>Contact Address:</Typography> 2, Hamilton Avenue, Silicon Valley,
                            California
                        </Text>
                        <Text><Typography sx={{
                            fontWeight: 600,
                            lineHeight: {xs:'20px', sm:'24px'},
                            fontSize:{xs:'14px',sm:'18px'},
                            display:'inline'
                        }}>International Contact:</Typography> +62 528 124 5600</Text>
                    </SubSection>
                </Section>
                
                <Title
                    position={{
                        align: "left",
                        marginTop: "64px",
                    }}
                    style={{
                        marginBottom: "10px",
                        color:textColor
                    }}
                >
                    Popular FAQs{" "}
                </Title>
                <Grid
                    container
                    style={{
                        marginBottom: "80px",
                    }}
                    direction = {{xs: 'column', md:'row'}}
                    spacing={5}
                    alignItems="stretch"
                >
                    <Grid item xs={12} sm={4}>
                        <Section style={{border:'1px solid #E2E8F0'}}>
                            <SubTitle>
                                What is the best time to exchange my money?
                            </SubTitle>
                            <Text>
                                Most trading happens in the UK and US market,
                                8am GMT - 5pm, is when the market is mostly
                                liquid and the difference between the rates is
                                minimal.
                            </Text>
                        </Section>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Section style={{border:'1px solid #E2E8F0'}}>
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
                        <Section style={{border:'1px solid #E2E8F0'}}>
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
            </Box>
        </Box>
    );
};

export default HelpCenter;
