import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavComponent from "./components/NavComponent";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Convert from "./pages/Convert";
import Contact from "./pages/Contact";
import Compliance from "./pages/Compliance";
import HelpCenter from "./pages/HelpCenter";
import News from "./pages/News";
import Faq from "./pages/Faq";
import IntegrationMatrix from "./pages/IntegrationMatrix";
import Partnerships from "./pages/Partnerships";
import CurrencyEncyclopedia from "./pages/CurrencyEncyclopedia";
import TermsAndConditions from "./pages/TermsAndConditions";
import Press from "./pages/Press";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Teams from "./pages/Teams";
import FileAComplaint from "./pages/FileAComplaint";
import Api from "./pages/Api";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import HistoricalCurrencyExchange from "./pages/HistoricalCurrencyExchange";
import FraudReport from "./pages/FraudReport";
import CookiePolicy from "./pages/CookiePolicy";
import Glossary from "./pages/Glossary";
import OnlineAdvertising from "./pages/OnlineAdvertising";
import Ambassadors from "./pages/Ambassadors";

function App() {
  return (
    <Router>
      <div className="App">
        <NavComponent />
        <Routes >
          {/*---==== Contents Sections  ====---*/}
          <Route path="/" element={<Home/>} /> 
            <Route path="/convert" element={<Convert/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/compliance" element={<Compliance/>} /> 
            <Route path="/help-center" element={<HelpCenter/>} /> 
            <Route path="/news" element={<News/>} />
            <Route path="/faq" element={<Faq/>} /> 
            <Route path="/integration-matrix" element={<IntegrationMatrix/>} />
            <Route path="/partnerships" element={<Partnerships/>} /> 
            <Route path="/currency-encyclopedia" element={<CurrencyEncyclopedia/>} />
            <Route path="/terms" element={<TermsAndConditions/>} /> 
            <Route path="/press" element={<Press/>} />
            <Route path="/careers" element={<Careers/>} /> 
            <Route path="/about" element={<About/>} />
            <Route path="/complaint" element={<FileAComplaint/>} /> 
            <Route path="/teams" element={<Teams/>} />
            <Route path="/api" element={<Api/>} />
            <Route path="/bod" element={<BoardOfDirectors/>} /> 
            <Route path="/historical-currency-exchange" element={<HistoricalCurrencyExchange/>} />
            <Route path="/fraud-report" element={<FraudReport/>} /> 
            <Route path="/CookiePolicy" element={<CookiePolicy/>} />
            <Route path="/glossary" element={<Glossary/>} /> 
            <Route path="/advertising" element={<OnlineAdvertising/>} />
            <Route path="/ambassadors" element={<Ambassadors/>} />
          <Route path="/compliance" element={<Compliance />} />
          {/*---==== end of Contents Sections  ====---*/}
        </Routes >
        <Footer />
      </div>
    </Router>
  );
}

export default App;
