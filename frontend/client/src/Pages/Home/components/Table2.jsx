import { ListItem, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Table2({ isocode, country }) {
    const base_url = process.env.REACT_APP_BASE_URL;
    const [rates, setRates] = React.useState({});

    React.useEffect(() => {
        const fetchRates = async () => {
            const response = await fetch(`${base_url}/rate/${isocode}`);
            const data = await response.json();
            return data;
        };
        fetchRates().then((ratesData) => {
            setRates(ratesData.data.rate);
        });
    }, [base_url, isocode]);

    return (
        <Link href={`/#/${isocode}/currency`} color="inherit">
            <ListItem
                sx={{
                    display: "flex",
                    cursor: "pointer",
                    // alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #CBD5E1",
                    p: "2.3rem 1.3rem",
                    fontSize: "1.4rem",
                }}
            >
                <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                    <Box>
                        <img
                            loading="lazy"
                            width="20"
                            src={`data:image/jpeg;base64,${country?.flag}`}
                            srcSet={`data:image/jpeg;base64,${country?.flag}`}
                            alt=""
                        />
                    </Box>
                    <Box>
                        <Box>{isocode}</Box>
                        <Box sx={{ fontSize: "1rem" }}>{country.name}</Box>
                    </Box>
                </Box>
                {rates && (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "baseline",
                            textAlign: "left",
                        }}
                    >
                        {Number(rates.parallel_buy).toFixed(2)}
                    </Box>
                )}
                {rates && (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "baseline",
                            textAlign: "left",
                        }}
                    >
                        {Number(rates.official_buy).toFixed(2)}
                    </Box>
                )}
            </ListItem>
        </Link>
    );
}

export default Table2;
