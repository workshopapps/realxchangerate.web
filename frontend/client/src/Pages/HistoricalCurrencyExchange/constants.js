import Country from "./components/Country"
import {Flag1} from "./assets/"
export const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#F8FAFC',
    500: '#007FFF',
    600: '#00368C',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
  };

export const rows = [
    createData(<Country name="NGN" image={Flag1}/>, 400, 760),
    createData(<Country name="NGN" image={Flag1}/>, 400, 760),
    createData(<Country name="NGN" image={Flag1}/>, 400, 760),
    createData(<Country name="NGN" image={Flag1}/>, 400, 760),
    createData(<Country name="NGN" image={Flag1}/>, 400, 760),
    createData(<Country name="NGN" image={Flag1}/>, 400, 760),
    createData(<Country name="NGN" image={Flag1}/>, 400, 760),
    createData(<Country name="NGN" image={Flag1}/>, 400, 760),
    createData(<Country name="NGN" image={Flag1}/>, 400, 760),
    createData(<Country name="NGN" image={Flag1}/>, 400, 760), 
  ];

  function createData(country, bank_rates, parallel_rates) {
    return { country, bank_rates, parallel_rates};
  }