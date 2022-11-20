import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import NavComponent from './components/NavComponent';
import Footer from './components/Footer';

// import Home from "../../client/src/Pages/Home"
// import Convert from "../../client/src/pages/Convert";
// import Contact from "../../client/src/pages/Contact";
// import Compliance from "../../client/src/pages/Compliance";
// import HelpCenter from "../../client/src/pages/HelpCenter";
// import News from "../../client/src/pages/News";
// import Faq from "../../client/src/pages/Faq";
// import IntegrationMatrix from "../../client/src/pages/IntegrationMatrix";
// import Partnerships from "../../client/src/pages/Partnerships";
import CurrencyEncyclopedia from "../../client/src/Pages/CurrencyEncyclopedia";
import CurrencyEncyclopediaDetail from "./Pages/CurrencyEncyclopediaDetail";
// import TermsAndConditions from "../../client/src/pages/TermsAndConditions";
// import Press from "../../client/src/pages/Press";
// import Careers from "../../client/src/pages/Careers";
// import About from "../../client/src/pages/About";
// import Teams from "../../client/src/pages/Teams";
// import FileAComplaint from "../../client/src/pages/FileAComplaint";
// import Api from "../../client/src/pages/Api";
// import BoardOfDirectors from "../../client/src/pages/BoardOfDirectors";
// import HistoricalCurrencyExchange from "../../client/src/pages/HistoricalCurrencyExchange";
// import FraudReport from "../../client/src/pages/FraudReport";
// import CookiePolicy from "../../client/src/pages/CookiePolicy";
// import Glossary from "../../client/src/pages/Glossary";
// import OnlineAdvertising from "../../client/src/pages/OnlineAdvertising";
// import Ambassadors from "../../client/src/Pages/Ambassadors";

function App() {
  return (
    <Router>
      <div className="App">
        <NavComponent />
        <Routes >
          {/*---==== Contents Sections  ====---*/}
            {/* <Route path="/" element={<Home/>} /> 
            <Route path="/convert" element={<Convert/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/compliance" element={<Compliance/>} /> 
            <Route path="/help-center" element={<HelpCenter/>} /> 
            <Route path="/news" element={<News/>} />
            <Route path="/faq" element={<Faq/>} /> 
            <Route path="/integration-matrix" element={<IntegrationMatrix/>} />
            <Route path="/partnerships" element={<Partnerships/>} />  */}
            <Route path="/currency-encyclopedia" element={<CurrencyEncyclopedia/>} />
            <Route path="/currency-encyclopedia/:country" element={<CurrencyEncyclopediaDetail/>} />
            {/* <Route path="/terms" element={<TermsAndConditions/>} /> 
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
            <Route path="/ambassadors" element={<Ambassadors/>} />  */}
          {/* ---==== end of Contents Sections  ====--- */}
        </Routes >
        <Footer />
      </div>
    </Router>
  );
}

export default App;
