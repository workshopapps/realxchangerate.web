import React from "react";
import EnCurrency from "./components/currencyenclopedia/EnCurrency";
import EnCountryLetter from "./components/enCountryletter/EnCountryLetter";
import EnPopCurrencies from "./components/enpopularcurrency/EnPopCurrencies";
import EnCurrenciesRate from "./components/encurrenciesrate/EnCurrenciesRate";

const CurrencyEncyclopedia = () => {
  return (
    <div>
      <EnCurrency />
      <EnCountryLetter />
      <EnPopCurrencies />
      <EnCurrenciesRate />
    </div>
  );
};

export default CurrencyEncyclopedia;
