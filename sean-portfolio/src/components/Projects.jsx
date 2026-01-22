const projects = [
  { title: "Translasean (2021)", desc: "A basic syntax language identifier and translator created using C", img: "/img/translasean.png" },
  { title: "myFarm (2022)", desc: "A Java-based day-by-day farming simulator game supplied with a GUI interface", img: "/img/myFarm.png" },
  { title: "Restaurant Ordering and Inventory System (2023)", desc: "A menu-based combo meal ordering system developed using HTML, CSS, JavaScript, PHP, and XML", img: "/img/restaurant.png" },
  { title: "Archers’ Reservation Hub (2023)", desc: "A deployed web application for computer laboratory reservation using HTML, CSS, JavaScript, and Node.js", img: "/img/archers.png" },
  { title: "ExploreMore (2024)", desc: "A mobile travel guide Android app for the Philippines developed using Kotlin and Java", img: "/img/exploremore.png" },
  { title: "EZRetro (2024)", desc: "A deployed subscription-based retro video game hub created with HTML, CSS, and JavaScript", img: "/img/ezretro.png" },
  { title: "BusMate (2024 - Present)", desc: "A real-time public utility fleet management dashboard using HTML, CSS, JavaScript, Node.js, OpenCV, and GPS made for Capstone", img: "/img/busmate.png" }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-gray-800 p-10 mb-8 rounded-xl shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-400 mb-6 border-l-4 border-gray-400 dark:border-gray-600 pl-3">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md overflow-hidden hover:translate-y-[-5px] transition-transform transition-colors duration-300"
            >
              <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <strong className="text-green-900 dark:text-green-300 text-lg">{proj.title}</strong>
                <p className="text-gray-700 dark:text-gray-200">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
