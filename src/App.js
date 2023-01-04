import './App.css';
import Aim from './Components/Aim';
import Count from './Components/Count';
import Home from './Components/Home';
import MatchHome from './Components/MatchHome';
import Recent from './Components/Recent';
import Success from './Components/Success';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Home />
      <Aim />
      <MatchHome />
      <Recent />
      <Success />
      <Count />
      <Footer />
    </div>
  );
}

export default App;
