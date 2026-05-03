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
  useEffect(() => {
    // Security layer: Prevent context menu, devtools shortcuts, and dragging
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key.toLowerCase() === 'i' || e.key.toLowerCase() === 'j' || e.key.toLowerCase() === 'c')) || 
        (e.ctrlKey && e.key.toLowerCase() === 'u') ||
        (e.metaKey && e.altKey && (e.key.toLowerCase() === 'i' || e.key.toLowerCase() === 'j' || e.key.toLowerCase() === 'u')) // Mac support
      ) {
        e.preventDefault();
      }
    };

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    // Optional: detect devtools opening (basic) -> redirect or warn
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      if (widthThreshold || heightThreshold) {
        console.warn("%cSecurity Warning: DevTools detected.", "color: red; font-size: 20px; font-weight: bold;");
      }
    };
    
    window.addEventListener('resize', detectDevTools);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('resize', detectDevTools);
    };
  }, []);

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
