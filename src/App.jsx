import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Trainers from './pages/Trainers';
import Classes from './pages/Classes';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import OnlineCoaching from './pages/OnlineCoaching';

// Scroll reset component on route change
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}


export default function App() {
  return (
    <Router>
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/online-coaching" element={<OnlineCoaching />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
