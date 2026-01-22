export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-800 p-10 mb-8 rounded-xl shadow-md transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-400 mb-4 border-l-4 border-gray-400 dark:border-gray-600 pl-3">
          Contact
        </h2>
        <p className="text-gray-800 dark:text-gray-100">Email: seandavidbartolome@gmail.com</p>
        <p className="text-gray-800 dark:text-gray-100">
          Facebook:{" "}
          <a
            href="https://www.facebook.com/helloimsean/"
            target="_blank"
            className="text-green-900 dark:text-green-300 hover:underline"
          >
            facebook.com/helloimsean/
          </a>
        </p>
        <p className="text-gray-800 dark:text-gray-100">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sean-david-bartolome-37897b312/"
            target="_blank"
            className="text-green-900 dark:text-green-300 hover:underline"
          >
            linkedin.com/in/sean-david-bartolome-37897b312/
          </a>
        </p>
        <p className="text-gray-800 dark:text-gray-100">
          GitHub:{" "}
          <a
            href="https://github.com/epiknesh"
            target="_blank"
            className="text-green-900 dark:text-green-300 hover:underline"
          >
            github.com/epiknesh
          </a>
        </p>

        <h3 className="mt-4 mb-2 font-semibold text-gray-900 dark:text-gray-100">Let's connect!</h3>
        <form
          action="https://formspree.io/f/mqaqjydz"
          method="POST"
          className="max-w-md mx-auto flex flex-col gap-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="border p-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          />
          <input
            type="email"
            name="_replyto"
            placeholder="Your Email"
            required
            className="border p-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            className="border p-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          ></textarea>
          <button
            type="submit"
            className="bg-green-900 dark:bg-green-700 text-white py-2 rounded hover:bg-green-800 dark:hover:bg-green-600 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
