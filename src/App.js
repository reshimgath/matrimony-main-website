import './App.css';
import Home from './Components/Home';
import Register from './Components/Auth/Register';
import Footer from './Footer';
import Login from './Components/Auth/Login';
import BasicInfo from './Components/Details/BasicInfo';
import FamilyInfo from './Components/Details/FamilyInfo';

function App() {
  return (
    <>
      <Home />
      <Register />
      <Login />
      <BasicInfo />
      <FamilyInfo />
      <Footer />
    </>
  );
}

export default App;
