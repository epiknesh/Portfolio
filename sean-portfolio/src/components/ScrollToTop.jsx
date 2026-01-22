import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50
        transition-all duration-300 ease-out
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <button
        onClick={scrollToTop}
        className="
          group flex items-center
          bg-green-600 hover:bg-green-700
          text-white font-medium
          px-3 py-3
          rounded-full shadow-lg
          transition-all duration-300
          cursor-pointer
          overflow-hidden
        "
        aria-label="Scroll to top"
      >
        {/* Icon */}
        <FaArrowUp className="shrink-0" />

        {/* Expanding text */}
        <span
          className="
            ml-0
            group-hover:ml-2
            max-w-0 overflow-hidden whitespace-nowrap
            group-hover:max-w-[120px]
            transition-all duration-300 ease-out
            text-sm
          "
        >
          Scroll to top
        </span>
      </button>
    </div>
  );
}
