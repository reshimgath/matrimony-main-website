import './App.css';
import Home from './Components/Home';
import Register from './Components/Auth/Register';
import Footer from './Footer';
import Login from './Components/Auth/Login';
import Logout from './Components/Auth/Logout';
import BasicInfo from './Components/Details/BasicInfo';
import FamilyInfo from './Components/Details/FamilyInfo';
import HoroscopInfo from './Components/Details/HoroscopInfo';
import PartnerPref from './Components/Details/PartnerPref';
import AdvanceSearch from './Components/AdvanceSearch';
import Plans from './Components/Plans'
import { Routes, Route } from 'react-router-dom'
import AuthState from './ContextCreation/AuthContext/AuthState';
import MyProfile from './Components/Details/MyProfile';
import Contact from './Contact';
// import Singlepageprofile from './Components/Details/Singlepageprofile';

function App() {
  return (
    <>
      <AuthState>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={localStorage.getItem('datatoken') ? (<Home />) : (<Login />)} />
          <Route path="/register" element={localStorage.getItem('datatoken') ? (<Home />) : (<Register />)} />
          <Route path="/basicinfo" element={<BasicInfo />} />
          <Route path="/familyinfo" element={<FamilyInfo />} />
          <Route path="/horoscopeinfo" element={<HoroscopInfo />} />
          <Route path="/partnerpref" element={<PartnerPref />} />
          <Route path="/advancesearch" element={<AdvanceSearch />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/plans" element={< Plans />} />
          <Route path="/myprofile" element={< MyProfile />} />
          <Route path="/contact" element={< Contact />} />
          {/* <Route path="/profile" element={< Singlepageprofile />} /> */}

        </Routes>
      </AuthState>
      <Footer />
    </>
  );
}

export default App;
