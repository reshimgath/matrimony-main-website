import './App.css';
import Home from './Components/Home';
import Register from './Components/Auth/Register';
import Footer from './Footer';
import Login from './Components/Auth/Login';
import BasicInfo from './Components/Details/BasicInfo';
import FamilyInfo from './Components/Details/FamilyInfo';
import HoroscopInfo from './Components/Details/HoroscopInfo';

function App() {
  return (
    <>
      <Home />
      <Register />
      <Login />
      <BasicInfo />
      <FamilyInfo />
      <HoroscopInfo />
      <Footer />
    </>
  );
}

export default App;
