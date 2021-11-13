import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './nonsecure/Components/LandingPage';
import DashBoard from './secure/DashBoard/DashBoard';
import AboutUs from './nonsecure/Components/AboutUs/AboutUs'
import ContactUs from './nonsecure/Components/ContactUs/ContactUs'
import Services from './nonsecure/Components/Services/Services'
import Login from './nonsecure/Components/Login/Login';
import ForgotPassword from './nonsecure/Components/forgotpwd/ForgotPassword';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} >
        <Route path= "" element={<Login/>}/>
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="services" element={<Services />} />
        <Route path="forgot" element={<ForgotPassword />} />
      </Route>
      <Route path="dashboard" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
