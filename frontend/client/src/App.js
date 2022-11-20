import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import NavComponent from './components/NavComponent';
import Footer from './components/Footer';

import Home from "./Pages/Home"
import Convert from "./Pages/Convert";
import Contact from "./Pages/Contact";
import Compliance from "./Pages/Compliance";
import HelpCenter from "./Pages/HelpCenter";
import News from "./Pages/News";
import Faq from "./Pages/Faq";
import IntegrationMatrix from "./Pages/IntegrationMatrix";
import Partnerships from "./Pages/Partnerships";
import CurrencyEncyclopedia from "./Pages/CurrencyEncyclopedia";
import CurrencyEncyclopediaDetail from "./Pages/CurrencyEncyclopediaDetail";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Press from "./Pages/Press";
import Careers from "./Pages/Careers";
import About from "./Pages/About";
import Teams from "./Pages/Teams";
import FileAComplaint from "./Pages/FileAComplaint";
import Api from "./Pages/Api";
import BoardOfDirectors from "./Pages/BoardOfDirectors";
import HistoricalCurrencyExchange from "./Pages/HistoricalCurrencyExchange";
import FraudReport from "./Pages/FraudReport";
import CookiePolicy from "./Pages/CookiePolicy";
import Glossary from "./Pages/Glossary";
import OnlineAdvertising from "./Pages/OnlineAdvertising";
import Ambassadors from "./Pages/Ambassadors";

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
            <Route path="/currency-encyclopedia/:country" element={<CurrencyEncyclopediaDetail/>} />
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
          {/* ---==== end of Contents Sections  ====--- */}
        </Routes >
        <Footer />
      </div>
    </Router>
  );
}

export default App;
