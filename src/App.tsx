import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import Home from './pages/Home';
import Textile from './pages/Textile';
import Optical from './pages/Optical';
import RealEstate from './pages/RealEstate';
import Philanthropy from './pages/Philanthropy';
import Contact from './pages/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-cream selection:bg-gold selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          {/* <CustomCursor /> */}
          <Navbar />

          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/textile" element={<PageWrapper><Textile /></PageWrapper>} />
              <Route path="/optical" element={<PageWrapper><Optical /></PageWrapper>} />
              <Route path="/real-estate" element={<PageWrapper><RealEstate /></PageWrapper>} />
              <Route path="/philanthropy" element={<PageWrapper><Philanthropy /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </AnimatePresence>

          <Footer />
        </>
      )}
    </div>
  );
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">

      {/* Enter/Exit Curtain */}
      {/* <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '-100%' }}
        exit={{ y: '0%' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[5000] bg-olive flex items-center justify-center pointer-events-none"
      >
        <span className="text-4xl text-cream cormorant font-medium">IDG</span>
      </motion.div> */}

      <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
