import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkWithMe from './pages/WorkWithMe';
import AboutPage from './pages/AboutPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-dark overflow-x-hidden">
        <div className="atmosphere-bg" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-with-me" element={<WorkWithMe />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
        
        {/* Global Motion Overlay Effect */}
        <div className="fixed inset-0 pointer-events-none z-[100] border-[8px] border-brand-red/[0.03]" />
      </div>
    </Router>
  );
}
