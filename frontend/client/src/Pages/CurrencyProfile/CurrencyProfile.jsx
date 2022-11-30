import React, { useEffect } from "react";
import { Container, Typography, Grid } from "@mui/material";
import { Box } from "@mui/material";
import { FormControl, MenuItem, Select } from "@mui/material";
import { Button } from "./CurrencyProfile.styles";
import { useParams } from "react-router-dom";
import { currencyAndFlag } from "./data";
import CustomPaginationActionsTable from "./CurrencyTable";
import chart from "./assets/chart.png";
import mobile from "./assets/mobile.png";
//
//
const CurrencyProfile = () => {
    //
    const params = useParams();

    const [currency, setCurrency] = React.useState("NGN");
    const [selectedCurrency, setSelectedCurrency] = React.useState({});

    useEffect(() => {
        setSelectedCurrency(() =>
            currencyAndFlag.find(
                (currency) => currency.currency.code === params.id
            )
        );
    }, [params]);

    //
    //
    const CurrencyMenu = (props) => {
        const { currency } = props;
        return (
            <Box
                key={currency.currency.code}
                value={currency.currency.code}
                sx={{ display: "flex", gap: "1rem" }}
            >
                <Box>
                    <img
                        loading="lazy"
                        width="20"
                        src={`data:image/jpeg;base64,${currency?.flag}`}
                        srcSet={`data:image/jpeg;base64,${currency?.flag}`}
                        alt=""
                    />
                </Box>
                <Box>({currency.currency.code})</Box>
                <Box>{currency.currency.name}</Box>
            </Box>
        );
    };
    //
    //
    return (
        <Container
            style={{
                maxWidth: "1440px",
            }}
            sx={{
                paddingLeft: { xs: 2, sm: 2, md: 2, lg: 9, xl: 9 },
                paddingRight: { xs: 2, sm: 2, md: 2, lg: 9, xl: 9 },
            }}
        >
            <Grid
                container
                rowSpacing={{ xs: 5, sm: 1 }}
                columnSpacing={{ xs: 1, sm: 2, md: 5 }}
                style={{ marginTop: 20, alignItems: "center" }}
            >
                <Grid item xs={12} sm={6}>
                    <div
                        style={{
                            margin: "30px auto",
                            display: "flex",
                            gap: "20px",
                            alignItems: "center",
                        }}
                    >
                        <img
                            loading="lazy"
                            width="60"
                            src={`data:image/jpeg;base64,${selectedCurrency?.flag}`}
                            srcSet={`data:image/jpeg;base64,${selectedCurrency?.flag}`}
                            alt=""
                        />
                        <h1
                            style={{
                                color: "#262A36",
                                fontSize: "24px",
                                display: "inline",
                                fontWeight: 600,
                            }}
                        >
                            {selectedCurrency.currency?.code} -
                            {selectedCurrency.currency?.name}
                        </h1>
                    </div>
                    <Typography
                        fontWeight={"400"}
                        fontSize={"16px"}
                        color={"#000"}
                    >
                        The Euro is the currency of Euro Member Countries. Our
                        currency rankings show that the most popular Euro
                        exchange rate is the EUR to USD rate. The currency code
                        for Euros is EUR, and the currency symbol is €. Below,
                        you'll find Euro rates and a currency converter.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            padding: 4,
                            border: 1,
                            borderColor: "#BBBBBB",
                            borderRadius: 3,
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            fontWeight={"600"}
                            marginBottom="10px"
                            fontSize={"24px"}
                            color={"#0F172A"}
                        >
                            Select a currency
                        </Typography>
                        <FormControl
                            variant="outlined"
                            fullWidth
                            sx={{
                                flex: 2,
                                mt: { xs: "15px", lg: "35px" },
                                mb: { xs: "15px", lg: "35px" },
                            }}
                        >
                            <Select
                                name="currency"
                                variant="outlined"
                                id="currency1"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                style={{ height: "48px" }}
                            >
                                {currencyAndFlag.map((currency, index) => (
                                    <MenuItem
                                        key={index}
                                        value={currency.currency.code}
                                    >
                                        <CurrencyMenu currency={currency} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button
                            style={{ width: "100%" }}
                            color="#fff"
                            bg="#0062ff"
                            padding="70px"
                        >
                            Contact us
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <div
                style={{
                    textAlign: "end",
                    margin: "30px 0px",
                }}
            >
                <Button
                    style={{
                        border: "1px solid #0062ff",
                        marginRight: "0",
                        marginLeft: "auto",
                    }}
                    color="#0062ff"
                    bg="#fff"
                    padding="50px"
                    sx={{
                        display: { xs: "none", md: "block" },
                    }}
                >
                    Edit
                </Button>
            </div>
            <Box
                sx={{
                    display: { xs: "none", md: "block" },
                }}
                style={{ margin: "90px auto" }}
            >
                <img src={chart} width="100%" height="100%" alt="chart" />
            </Box>
            <Box
                sx={{
                    display: { xs: "block", md: "none" },
                }}
                style={{ margin: "40px auto" }}
            >
                <img src={mobile} width="100%" height="100%" alt="chart" />
            </Box>
            <CustomPaginationActionsTable currencyAndFlag={currencyAndFlag} />
        </Container>
    );
};

export default CurrencyProfile;
