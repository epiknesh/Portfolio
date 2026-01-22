import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false); // prevent flash

  useEffect(() => {
    // Get saved mode from localStorage
    const saved = localStorage.getItem("darkMode");
    const initialMode = saved ? JSON.parse(saved) : false;

    setDarkMode(initialMode);

    // Apply the class immediately
    if (initialMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent flash before mode is applied

  const toggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 bg-gray-200 dark:bg-gray-800 p-2 rounded-full shadow-md text-gray-800 dark:text-gray-200 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
