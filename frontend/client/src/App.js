import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import * as Sentry from '@sentry/react';

import NavComponent from './components/NavComponent';
import Footer from './components/Footer';
import './assets/css/style.css';
import {
  Contact,
  Compliance,
  HelpCenter,
  News,
  Feedback,
  Faq,
  IntegrationMatrix,
  Partnerships,
  CurrencyEncyclopedia,
  CurrencyEncyclopediaDetail,
  TermsAndConditions,
  Press,
  Careers,
  About,
  Teams,
  FileAComplaint,
  Api,
  BoardOfDirectors,
  HistoricalCurrencyExchange,
  FraudReport,
  CookiePolicy,
  Glossary,
  OnlineAdvertising,
  Ambassadors,
  Home,
  StudentAmbassador,
  ApplyToAdvertise,
  StudentAmbassadorForm,
  Affiliate,
  Referral,
  Currency,
} from './Pages';
import GlobalStyle from './styles/Globalstyle';
import ErrorPage from './Pages/404/ErrorPage';
import SingleNews from './Pages/SingleNews/SingleNews';
import Article from './Pages/Press/Article/Article';
import PressNews from './Pages/Press/PressRelease/News';
import GetInTouch from './Pages/GetInTouch/GetInTouch';
import CurrencyProfile from './Pages/CurrencyProfile/CurrencyProfile';
import FileAComplaintForm from './Pages/FileComplaints/components/ComplaintForm/ComplaintForm';
import ScrollToTop from './utils/ScrollToTop';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import EntrepreneurAmbassador from './Pages/EntrepreneurAmbassador/EntrepreneurAmbassador';
import EntrepreneurFrom from './Pages/EntrepreneurForm/EntrepreneurFrom';
import FaqOverview from './Pages/FaqOverview/FaqOverview';
import ResponseToast from './components/shared/InputField/ResponseToast';
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div className='App'>
          <NavComponent />
          <ResponseToast />
          <ScrollToTop />
          <Routes>
            {/*---==== Contents Sections  ====---*/}
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/compliance' element={<Compliance />} />
            <Route path='/help-center' element={<HelpCenter />} />
            <Route path='/:id/currency-profile' element={<CurrencyProfile />} />
            <Route path='/news' element={<News />} />
            {/* Adding path for one news  */}
            <Route path='/news/:id' element={<SingleNews />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/faq-overview' element={<FaqOverview />} />
            <Route path='/integration-matrix' element={<IntegrationMatrix />} />
            <Route path='/partnerships' element={<Partnerships />} />
            <Route path='/currency-encyclopedia' element={<Currency />} />{' '}
            <Route
              path='/currency-encyclopedia/:country'
              element={<CurrencyEncyclopediaDetail />}
            />
            <Route path='/terms' element={<TermsAndConditions />} />
            <Route path='/press' element={<Press />} />
            <Route path='/press/news' element={<PressNews />} />
            <Route path='/press/article' element={<Article />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/about' element={<About />} />
            <Route path='/partnerships/affiliate' element={<Affiliate />} />
            <Route path='/partnerships/referral' element={<Referral />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/complaint' element={<FileAComplaint />} />
            {/* adding complaint form route */}
            <Route path='/complaint/form' element={<FileAComplaintForm />} />
            <Route path='/teams' element={<Teams />} />
            <Route path='/api' element={<Api />} />
            <Route path='/bod' element={<BoardOfDirectors />} />
            {/* Adding  get in touch route*/}
            <Route path='/get-in-touch' element={<GetInTouch />} />
            <Route
              path='/historical-currency-exchange'
              element={<HistoricalCurrencyExchange />}
            />
            <Route path='/fraud-report' element={<FraudReport />} />
            <Route path='/Cookie-policy' element={<CookiePolicy />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/glossary' element={<Glossary />} />
            <Route path='/advertising' element={<OnlineAdvertising />} />
            <Route path='/apply-to-advertise' element={<ApplyToAdvertise />} />
            <Route path='/ambassadors' element={<Ambassadors />} />
            <Route
              path='/ambassadors/student-ambassador'
              element={<StudentAmbassador />}
            />
            <Route
              path='/ambassadors/entrepreneur-ambassador'
              element={<EntrepreneurAmbassador />}
            />
            <Route
              path='/ambassadors/apply-to-become-entrepreneur-ambassador'
              element={<EntrepreneurFrom />}
            />
            <Route
              path='/student-ambassador/apply-to-become-student-ambassador'
              element={<StudentAmbassadorForm />}
            />
            <Route path='/ddff' element={<ErrorPage />} />
            <Route path='/*' element={<ErrorPage />} />
            <Route path='*' element={<Navigate to={'/ddff'} />} />
            {/*---==== end of Contents Sections  ====---*/}
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}
// export default App;
export default Sentry.withProfiler(App);
