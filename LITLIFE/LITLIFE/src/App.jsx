import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './comps/LandingPage';
import Courses from './comps/Courses';
import Login from './comps/login';
import DashboardLayout from './comps/DashboardLayout';
import Register from './comps/Register';
import AboutUs from './comps/AboutUs';
import { useEffect, useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={userInfo ? <DashboardLayout/> : <Login /> } />
        <Route path="/register" element={userInfo ? <DashboardLayout/> : <Register/> } />
        <Route path="/dashboard" element={userInfo ? <DashboardLayout/> : <Login/> } />
        <Route path="/about" element={<AboutUs/> } />
      </Routes>
    </Router>
  );
}

export default App;
