import { useState, useRef, useEffect } from "react";
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiVite, SiTailwindcss, SiBootstrap, 
         SiNodedotjs, SiDotnet, SiKotlin, SiAndroid, SiMongodb, SiGithub, SiOpencv,
         SiRaspberrypi, SiPython, SiPhp, SiWordpress, SiTypescript, SiOpenstreetmap,
         SiGooglemaps, SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si";
import { RiJavaLine, RiFirebaseFill  } from "react-icons/ri";
import { TbBrandCSharp, TbBrandMysql } from "react-icons/tb";
import { CgFigma } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";

export default function TechStack() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const techs = [
    // Frontend / UI
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "React", icon: <SiReact /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Figma", icon: <CgFigma /> },
    { name: "Wordpress", icon: <SiWordpress /> },

    // Programming Languages
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Java", icon: <RiJavaLine /> },
    { name: "C#", icon: <TbBrandCSharp /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "Kotlin", icon: <SiKotlin /> },
    { name: "Python", icon: <SiPython /> },

    // Backend / Server
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "Firebase", icon: <RiFirebaseFill /> },

    // Databases / Data
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <TbBrandMysql /> },

    // Dev Tools / Hardware
    { name: "Github", icon: <SiGithub /> },
    { name: "Raspberry Pi", icon: <SiRaspberrypi /> },

    // APIs / Mapping / CV
    { name: "OpenCV", icon: <SiOpencv /> },
    { name: "OpenStreetMap", icon: <SiOpenstreetmap /> },
    { name: "Google Maps API", icon: <SiGooglemaps /> },

    // Multimedia
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Adobe Premiere Pro", icon: <SiAdobepremierepro /> },
  ];

   // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
        setSearchTerm("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchRef]);

  return (
    <section className="bg-white dark:bg-gray-800 p-10 mb-8 rounded-xl shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title + search container */}
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl font-bold text-green-900 dark:text-green-400 border-l-4 border-gray-400 dark:border-gray-600 pl-3">
            Technical Focus
          </h2>

          {/* Search icon + input inline */}
          <div
            ref={searchRef}
            className={`flex items-center transition-all duration-300 rounded-full
              ${searchOpen ? "w-64 px-3 h-8" : "w-10 h-8 px-2"}
              bg-gray-200 dark:bg-gray-700`}
            onMouseEnter={() => setSearchOpen(true)}
          >
            <FaSearch className="text-gray-700 dark:text-gray-200 text-lg" />
            {searchOpen && (
              <input
                type="text"
                placeholder="Search tech..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
                className="ml-2 bg-transparent outline-none text-gray-900 dark:text-gray-100 w-full"
              />
            )}
          </div>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-3">
          {techs.map((tech) => {
            const match = searchTerm
              ? tech.name.toLowerCase().includes(searchTerm.toLowerCase())
              : false;
            return (
              <span
                key={tech.name}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors duration-300
                  ${match
                    ? "bg-green-200 dark:bg-green-600 text-green-900 dark:text-green-100"
                    : "bg-gray-200 dark:bg-gray-700 text-green-900 dark:text-green-300"}`}
              >
                {tech.icon && <span className="text-lg">{tech.icon}</span>}
                {tech.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
