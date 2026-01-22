import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Intro from "./components/Intro";
import ScrollToTop from "./components/ScrollToTop";
import DarkModeToggle from "./components/DarkModeToggle";
import Footer from "./components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Always start in light mode
    document.documentElement.classList.remove("dark");
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent flash before mode is applied

  return (
    <>
      <DarkModeToggle />
      {showIntro ? (
        <Intro onRun={() => setShowIntro(false)} />
      ) : (
        <div className="bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Header />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <About />
            <TechStack />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
          </motion.div>

          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;
