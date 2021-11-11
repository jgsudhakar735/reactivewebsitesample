import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './nonsecure/Components/LandingPage';
import DashBoard from './secure/DashBoard/DashBoard';
import AboutUs from './nonsecure/Components/AboutUs/AboutUs'
import ContactUs from './nonsecure/Components/ContactUs/ContactUs'
import Services from './nonsecure/Components/Services/Services'
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} >
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;
