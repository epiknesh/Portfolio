export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-white dark:bg-gray-800 p-10 mb-8 rounded-xl shadow-md transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-400 mb-4 border-l-4 border-gray-400 dark:border-gray-600 pl-3">
          Resume
        </h2>
        <p>
          <a
            href="/SeanDavidBartolome_Resume.pdf"
            target="_blank"
            className="text-green-900 dark:text-green-300 hover:underline"
          >
            Download my resume (PDF)
          </a>
        </p>
      </div>
    </section>
  );
}
