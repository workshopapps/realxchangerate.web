import NavComponent from './components/NavComponent';
import Footer from './components/Footer';
import Complaince from './Pages/Compliance';

function App() {
  return (
    <div>
      <NavComponent />
      {/* tested with this page in place of the react router component */}
      <Complaince />
      <Footer />
    </div>
  );
}

export default App;
