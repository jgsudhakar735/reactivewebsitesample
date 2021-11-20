import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './nonsecure/Components/LandingPage';
import DashBoard from './secure/Components/DashBoard/DashBoard';
import AboutUs from './nonsecure/Components/AboutUs/AboutUs'
import ContactUs from './nonsecure/Components/ContactUs/ContactUs'
import Services from './nonsecure/Components/Services/Services'
import Login from './nonsecure/Components/Login/Login';
import ForgotPassword from './nonsecure/Components/forgotpwd/ForgotPassword';
import Users from './secure/Components/Users/Users';
import Home from './secure/Components/Home/Home';
import Registration from './secure/Components/Registration/Registration';
import ChangePassword from './secure/Components/ChangePassword/ChangePassword';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} >
        <Route path="" element={<Login />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="services" element={<Services />} />
        <Route path="forgot" element={<ForgotPassword />} />
      </Route>
      
      <Route path="dashboard" element={<DashBoard />} >
         <Route path="" element={<Home></Home>} />
         <Route path= "home" element= {<Home></Home>}></Route>
         <Route path= "users" element= {<Users/>}></Route>
         <Route path= "registration" element= {<Registration/>}></Route>
         <Route path="chgpwd" element = {<ChangePassword/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
