import React from "react";
import { Container, Typography, Grid, List, ListItem } from "@mui/material";
import { Box } from "@mui/material";
import { FormControl, MenuItem, Select } from "@mui/material";
import { Button, StyledSelection } from "./CurrencyProfile.styles";
import chart from "./assets/chart.png";
import flag from "./assets/flag.png";
import mobile from "./assets/mobile.png";
import { currenciesList, countries } from "../../utils/data";
import Table2 from "../Home/components/Table2";
import CircularProgressWithLabel from "@mui/material/CircularProgress";
import DeleteIcon from "./assets/delete.svg";
import { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useSelector } from "react-redux";
import { dispatch } from "../../redux/store";
import Countdown from "react-countdown-simple";
import { GetCurrencyRates } from "../../redux/features/Reducers/serviceActions";
import { tableCurrenciesList } from "../Home/data";
import { AddCircle } from "iconsax-react";
//
//
const CurrencyProfile = () => {
    //
    const [currency, setCurrency] = React.useState("NGN");
    //
    const oneHour = new Date(
        new Date().setHours(new Date().getHours() + 2)
    ).toISOString();
    const { currencyRates, currencyList } = useSelector(
        (state) => state.service
    );
    // const progressUpdate = document.getElementById("time").innerText;
    const [currencies, setCurrencies] = useState(tableCurrenciesList);
    const [getCurrency, setGetCurrency] = useState([]);
    const [dateUpdate, setDateUpdate] = useState("");
    //
    const handleEdit = () => {
        toggle();
    };
    useEffect(() => {
        if (currencyList.length > 0) {
            dispatch(GetCurrencyRates(currencyList));
        }

        fetch("https://api.streetrates.hng.tech/api/currency/currencies/flags")
            .then((response) => response.json())
            .then((data) => {
                setGetCurrency(data);
                setDateUpdate(data[0].rate.last_updated);
            })
            .catch((e) => console.log(e));

        //eslint-disable-next-line
    }, [currencyList]);
    const handleDelete = (e) => {
        setCurrencies(currencies.filter((item) => item.id !== e));
    };
    function toggle() {
        const button = document.getElementById("edit");
        const deleteIcons = document.querySelectorAll(".delete-cur");

        if (button.innerHTML === "Done") {
            button.innerHTML = "Edit";
            deleteIcons.forEach((e) => (e.style.display = "none"));
        } else {
            button.innerHTML = "Done";
            deleteIcons.forEach((e) => (e.style.display = "block"));
        }
    }

    const handleAdd = (closeModal, item) => {
        setCurrencies([...currencies, item]);
        closeModal();
    };
    //

    //
    const CurrencyMenu = (props) => {
        const { currency } = props;
        const countryDetails = countries.filter(
            (countr) => countr.label === currency.country
        );
        return (
            <MenuItem
                key={currency.isocode}
                value={currency.isocode}
                sx={{ display: "flex", gap: "1rem" }}
            >
                <Box>
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${countryDetails[0].code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${countryDetails[0].code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                </Box>
                <Box>{currency.country}</Box>
                <Box>({currency.isocode})</Box>
            </MenuItem>
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
                        <img loading="lazy" width="60" src={flag} alt="" />
                        <h1
                            style={{
                                color: "#262A36",
                                fontSize: "24px",
                                display: "inline",
                                fontWeight: 600,
                            }}
                        >
                            EUR - Euro
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
                                {currenciesList.map((currency) => (
                                    <MenuItem
                                        key={currency.isocode}
                                        value={currency.isocode}
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
                            Continue
                        </Button>
                    </Box>
                </Grid>
            </Grid>
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
                    id="edit"
                    color="#0062ff"
                    bg="#fff"
                    padding="50px"
                    sx={{
                        display: { xs: "none", md: "block" },
                    }}
                    onClick={() => handleEdit()}
                >
                    Edit
                </Button>
            </div>
            <List
                style={{
                    border: "1px solid #CBD5E1",
                    padding: "0",
                    borderRadius: "5px",
                }}
            >
                <ListItem
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        bgcolor: "#F1F5F9",
                        fontSize: "1.7rem",
                        p: "1.5rem",
                        fontWeight: 600,
                        color: "black",
                    }}
                >
                    <Box>Currency</Box>
                    <Box>Parallel</Box>
                    <Box>Bank</Box>
                </ListItem>
                {currencies.map((currency) => {
                    return (
                        <>
                            {currencyRates.length > 0 && (
                                <Table2
                                    isocode={currency?.isocode}
                                    country={currency?.country}
                                    key={currency?.id}
                                    rates={
                                        currencyRates.find(
                                            (x) =>
                                                x?.currency?.isocode ===
                                                currency?.isocode
                                        ).rate
                                    }
                                    link={currency?.link}
                                    symbol={currency?.symbol}
                                    flag={currency?.flag}
                                    deleteIcon={
                                        <img
                                            src={DeleteIcon}
                                            className="delete-cur"
                                            alt=""
                                            style={{ display: "none" }}
                                            onClick={(e) =>
                                                handleDelete(currency?.id)
                                            }
                                        />
                                    }
                                />
                            )}
                        </>
                    );
                })}
            </List>
            <StyledSelection>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <div
                                style={{ cursor: "pointer" }}
                                {...bindTrigger(popupState)}
                            >
                                <div className="add">
                                    <AddCircle
                                        size={24}
                                        variant="Bold"
                                        color="#0062ff"
                                    />
                                    <span className="addspan">
                                        Add currency
                                    </span>
                                </div>
                            </div>
                            <Menu {...bindMenu(popupState)}>
                                {getCurrency.map((item) => {
                                    return (
                                        <MenuItem
                                            onClick={() =>
                                                handleAdd(
                                                    popupState.close,
                                                    item
                                                )
                                            }
                                            key={item.id}
                                        >
                                            <img
                                                loading="lazy"
                                                width="20"
                                                src={`${item.flag}`}
                                                alt=""
                                                style={{ marginRight: "10px" }}
                                            />
                                            {item.isocode} - {item.country}
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
                <div className="lastUpdate">
                    <div style={{ position: "relative" }}>
                        <CircularProgressWithLabel
                            variant="determinate"
                            value={59}
                            thickness={6}
                        />
                        <i>
                            <Countdown
                                targetDate={oneHour}
                                renderer={({
                                    days,
                                    hours,
                                    minutes,
                                    seconds,
                                }) => <span id="time">{minutes}</span>}
                            />
                        </i>
                    </div>
                    <span>Last updated {dateUpdate}</span>
                </div>
            </StyledSelection>
        </Container>
    );
};

export default CurrencyProfile;
