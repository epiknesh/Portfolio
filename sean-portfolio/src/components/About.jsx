import { FaBirthdayCake, FaMapMarkerAlt, FaUniversity, FaGraduationCap, FaAward, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section
  id="about"
  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-10 mb-8 rounded-xl shadow-md transition-colors duration-300"
>
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
        {/* Left: Image */}
        <div className="flex-1 max-w-xs rounded-xl overflow-hidden shadow-lg">
          <img
            src="/img/pfp.jpg"
            alt="Sean David R. Bartolome"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right: Intro & Info */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Greeting */}
          <div>
  <h2 className="text-2xl font-bold text-green-700 mb-2 border-l-4 border-gray-300 pl-3 dark:text-green-400 transition-colors duration-300">
    Nice to meet you!
  </h2>
  <p className="text-gray-800 dark:text-gray-100 text-lg transition-colors duration-300">
    My name is <span className="font-semibold dark:text-gray-100 transition-colors duration-300">Sean David Bartolome</span>, 
    but you can call me <span className="font-semibold dark:text-gray-100 transition-colors duration-300">Sean</span>.
  </p>
</div>

{/* Info Blocks */}
<div className="grid grid-cols-2 gap-4 text-gray-800 dark:text-gray-100 text-sm md:text-base transition-colors duration-300">
  <div className="flex items-center gap-2">
    <FaBirthdayCake className="text-green-500 dark:text-green-400 transition-colors duration-300" />
    <span className="dark:text-gray-100 transition-colors duration-300">22 years old</span>
  </div>
  <div className="flex items-center gap-2">
    <FaMapMarkerAlt className="text-green-500 dark:text-green-400 transition-colors duration-300" />
    <span className="dark:text-gray-100 transition-colors duration-300">Quezon City, Philippines</span>
  </div>
  <div className="flex items-center gap-2">
    <FaUniversity className="text-green-500 dark:text-green-400 transition-colors duration-300" />
    <span className="dark:text-gray-100 transition-colors duration-300">De La Salle University</span>
  </div>
  <div className="flex items-center gap-2">
    <FaGraduationCap className="text-green-500 dark:text-green-400 transition-colors duration-300" />
    <span className="dark:text-gray-100 transition-colors duration-300">Bachelor of Information Technology</span>
  </div>
  <div className="flex items-center gap-2">
    <FaAward className="text-green-500 dark:text-green-400 transition-colors duration-300" />
    <span className="dark:text-gray-100 transition-colors duration-300">Cum Laude, 2 Thesis Awards</span>
  </div>
  <div className="flex items-center gap-2">
    <FaLaptopCode className="text-green-500 dark:text-green-400 transition-colors duration-300" />
    <span className="dark:text-gray-100 transition-colors duration-300">Full-stack web & systems development</span>
  </div>
</div>

{/* Longer Description */}
<div className="mt-4 text-gray-800 dark:text-gray-100 text-justify transition-colors duration-300">
  <p>
    I enjoy building applications that solve real-world problems, from backend logic and system architecture to clean, intuitive user interfaces.
    I’ve applied these skills in my academic projects; most notably, my group’s capstone project, which was recognized with the Eduardo M. Cojuangco Jr. Excellence Award for Leadership and Research Innovation and the Special Department Award for Innovative Work. I also gained professional experience as a Software Developer Intern at Navitaire, an Amadeus Company, where I worked closely with and presented to developers and QAs from both the Manila and US teams.
  </p>
  <p className="mt-2">
    My academic and project experience has strengthened my foundation in network security, database management, and scalable system design. 
    I am highly motivated to continue learning, adapting to new technologies, and contributing meaningfully to my development teams as a professional IT practitioner.
  </p>
</div>

        </div>
      </div>
    </section>
  );
}
