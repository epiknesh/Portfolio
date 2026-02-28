import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-white dark:bg-gray-800 p-10 mb-8 rounded-xl shadow-lg transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-400 mb-6 border-l-4 border-gray-400 dark:border-gray-600 pl-3">
          Resume
        </h2>

        <p className="mb-4 text-gray-700 dark:text-gray-200">
          Want a deeper look at what I’ve worked on and what I can do? You can download my resume below for a full breakdown of my background.
        </p>

        <a
          href="/SeanDavidBartolome_Resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 bg-green-900 text-white dark:bg-green-700 dark:text-gray-100 px-4 py-2 rounded-lg shadow-md hover:bg-green-800 dark:hover:bg-green-600 transition-colors duration-300 font-medium"
        >
          <FaDownload /> Download Resume
        </a>
      </div>
    </section>
  );
}
