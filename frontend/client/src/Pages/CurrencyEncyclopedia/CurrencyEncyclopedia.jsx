import React from "react";
import EnCurrency from "../components/encyclopedia/currencyenclopedia/EnCurrency";

import EnCountryLetter from "../components/encyclopedia/enCountryletter/EnCountryLetter";
import EnCurrenciesRate from "../components/encyclopedia/encurrenciesrate/EnCurrenciesRate";
import EnPopCurrencies from "../components/encyclopedia/enpopularcurrency/EnPopCurrencies";

const CurrencyEncyclopedia = () => {
  return <div>
   <EnCurrency/>
   
   <EnCountryLetter/> 
   <EnPopCurrencies/>
   <EnCurrenciesRate/> 

  </div>;
};

export default CurrencyEncyclopedia;
