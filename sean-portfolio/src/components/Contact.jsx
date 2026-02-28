import { FaEnvelope, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-800 p-10 mb-8 rounded-xl shadow-md transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-400 mb-4 border-l-4 border-gray-400 dark:border-gray-600 pl-3">
          Let’s Work Together
        </h2>

        <p className="text-gray-700 dark:text-gray-200 mb-10 max-w-2xl">
          Have a project in mind, a question, or just want to connect?  
          I’m always open to discussing opportunities, collaborations, or ideas.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="space-y-4">
            <ContactCard
              icon={<FaEnvelope />}
              label="Email"
              value="seandavidbartolome@gmail.com"
              href="mailto:seandavidbartolome@gmail.com"
            />
            <ContactCard
              icon={<FaLinkedin />}
              label="LinkedIn"
              value="linkedin.com/in/sean-david-bartolome"
              href="https://www.linkedin.com/in/sean-david-bartolome-37897b312/"
            />
            <ContactCard
              icon={<FaGithub />}
              label="GitHub"
              value="github.com/epiknesh"
              href="https://github.com/epiknesh"
            />
            <ContactCard
              icon={<FaFacebook />}
              label="Facebook"
              value="facebook.com/helloimsean"
              href="https://www.facebook.com/helloimsean/"
            />
          </div>

          {/* Right: Contact Form */}
          <form
            action="https://formspree.io/f/mqaqjydz"
            method="POST"
            className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-inner flex flex-col gap-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Send me a message
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="border p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <input
              type="email"
              name="_replyto"
              placeholder="Your email"
              required
              className="border p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your idea or inquiry"
              required
              className="border p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>

            <button
              type="submit"
              className="bg-green-900 dark:bg-green-700 text-white py-3 rounded-md hover:bg-green-800 dark:hover:bg-green-600 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* Contact Card Component */
function ContactCard({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
    >
      <div className="text-green-900 dark:text-green-400 text-xl">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-gray-900 dark:text-gray-100 font-medium">
          {value}
        </p>
      </div>
    </a>
  );
}
