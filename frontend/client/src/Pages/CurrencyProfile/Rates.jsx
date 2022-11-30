import React from "react";

const Rates = ({ code, type }) => {
    const base_url = process.env.REACT_APP_BASE_URL;
    const [rates, setRates] = React.useState({});

    React.useEffect(() => {
        const fetchRates = async () => {
            const response = await fetch(`${base_url}/rate/${code}`);
            const data = await response.json();
            return data;
        };
        fetchRates().then((ratesData) => {
            setRates(ratesData.data.rate);
        });
    }, [code]);

    //
    //
    return <div>{Number(rates[type]).toFixed(2)}</div>;
};

export default Rates;
