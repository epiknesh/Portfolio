export default function Header() {
  return (
    <header className="bg-gradient-to-br from-bg-gray-100 to-bg-gray-200 dark:from-gray-800 dark:to-gray-900 p-14 text-center rounded-xl shadow-md transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-600 dark:text-gray-300 font-mono mb-2">Hello, World</p>

        <h1 className="text-4xl md:text-5xl font-bold text-green-900 dark:text-green-400 mb-3">
          I'm <span className="text-green-700 dark:text-green-300">Sean David R. Bartolome</span>
        </h1>

        <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
          Cum Laude BSIT Graduate | Full-Stack Developer | Future-Ready Professional
        </p>

        <p className="text-gray-800 dark:text-gray-200 text-lg mb-6">
          Full-stack developer building secure, scalable systems with real-world impact
        </p>

        <nav className="flex justify-center gap-6">
          {[
            { href: "#about", label: "About Me" },
            { href: "#projects", label: "Projects" },
            { href: "#resume", label: "Resume" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative font-medium text-green-900 dark:text-green-400
                         after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
                         after:w-0 after:bg-green-700 dark:after:bg-green-300 
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
