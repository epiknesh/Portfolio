import { useEffect, useState } from "react";

export default function Intro({ onRun }) {
  const codeLines = [
    'function insertClicheHelloWorldOpener() {',
    '  console.log("Hello, World");',
    '  console.log("I\'m Sean David Bartolome");',
    '  console.log("and I like technology (duh)");',
    '}',
  ];

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [typingFinished, setTypingFinished] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (lineIndex >= codeLines.length) {
      setTypingFinished(true);
      return;
    }

    const timeout = setTimeout(() => {
      const currentLine = codeLines[lineIndex];
      const prevLine = displayedLines[lineIndex] || "";

      const nextLine = prevLine + currentLine[charIndex];
      const newDisplayed = [...displayedLines];
      newDisplayed[lineIndex] = nextLine;
      setDisplayedLines(newDisplayed);

      if (charIndex + 1 === currentLine.length) {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      } else {
        setCharIndex((prev) => prev + 1);
      }
    }, 40);

    return () => clearTimeout(timeout);
  }, [lineIndex, charIndex, displayedLines]);

  const handleRunClick = () => {
    // Trigger fade-out first
    setFadeOut(true);
    setTimeout(() => onRun(), 800); // wait for fade animation to finish
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 p-4 transition-opacity duration-700 bg-gray-900 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="bg-gray-800 w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
        {/* Top bar like VS Code */}
        <div className="bg-gray-700 h-8 flex items-center px-3 space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-300 ml-4 text-sm">intro.js</span>
        </div>

        {/* Code content */}
        <div className="p-4 text-gray-100">
          {displayedLines.map((line, idx) => {
            if (!line) return <div key={idx}>&nbsp;</div>;
            return (
                <div key={idx} className="text-lg font-mono whitespace-pre">
                {line
                    .split(/(function|console\.log)/g)
                    .map((part, i) => {
                    if (part === "function") return <span key={i} className="text-blue-400">{part}</span>;
                    if (part === "console.log") return <span key={i} className="text-yellow-300">{part}</span>;
                    if (/".*"/.test(part)) return <span key={i} className="text-green-400">{part}</span>;
                    return part;
                    })}
                </div>
            );
            })}

          {!typingFinished && <span className="animate-blink">|</span>}

          {/* Run button appears after typing */}
          <div className="mt-6 text-center">
            <button
                onClick={handleRunClick}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition-colors cursor-pointer"
            >
                {/* Run Icon: right-pointing triangle */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                >
                <path d="M4.5 3.5v13l11-6.5-11-6.5z" />
                </svg>
                Run
            </button>
            <p className="mt-2 text-gray-400 text-sm italic">
                (Clicking this will actually run the portfolio… shocker!)
            </p>
            </div>
        </div>
      </div>

      <style>
        {`
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
