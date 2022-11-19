import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Error from "./pages/Error/Error";
import LoginPage from "./pages/Login/LoginPage";
import { GlobalStyle } from "./theme/globalStyle";
// import {theme} from './theme/theme'

const theme = {

  palette: {
    primary: {
      // blue500
      main: '#0062FF'
    },
    secondary: {
      // blue800
      main: '#00368C'
    }
  },

  //custom theme variables
  $styled: {
    borderRadius: {
      xs: '2px',
      sm: '4px',
      md: '8px',
    },
    colors: {
      body: '#F8F8F8',
      cardBackground: '#ffffff',

      // gray
      text900: '#0F172A',
      text600: '#475569',
      text500: '#64748B',
      text400: '#94A3B8',
      text300: '#CBD5E1',
      text200: '#E2E8F0',
      text50: '#F8FAFC',

      // blue
      blue800: '#00368C',

      // red
      red500: '#EF4444',

      // green
      green50: '#ECFBF5',
    },
  }

}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/*" element={<Error />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
