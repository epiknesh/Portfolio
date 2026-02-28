import { useState } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useEffect } from "react";


const projects = [
  {
    title: "E-Portfolio",
    date: "2026",
    shortDesc: "A responsive developer portfolio built with React and Vite, featuring animated UI, dark mode, and dynamic project rendering.",

    longDesc:
      "This very E-Portfolio you're currently on is a modern single-page web application designed to showcase projects, technical skills, and professional background in a clean, interactive format. Built using React and Vite, the application emphasizes performance, modular component architecture, and responsive UI design. It includes animated transitions, dark mode support, searchable tech stack filtering, and structured project data rendering for scalability and maintainability.",

    features: [
      "Fully responsive layout optimized for desktop and mobile",
      "Dark mode toggle with root-level class switching",
      "Animated UI transitions powered by Framer Motion",
      "Dynamic project rendering from structured JavaScript data objects",
      "Searchable and interactive tech stack component",
      "Smooth scroll navigation across sections",
      "Intro/landing animation screen",
      "Reusable modular component architecture",
      "Optimized build and fast HMR via Vite",
      "Clean UI built with utility-first Tailwind CSS"
    ],

    techDetails:
      "The application is built using React with Vite as the development and build tool for fast hot module replacement and optimized production builds. Tailwind CSS provides a utility-first styling approach for responsive and maintainable design. Framer Motion handles animations and smooth UI transitions. The architecture follows a modular component structure, separating layout components, UI sections, and data configuration files. State management is handled using React hooks, and theme switching is implemented through class-based dark mode toggling at the root document level.",

    images: [
      "/img/e-portfolio.png",
    ],

    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
      "HTML",
      "CSS"
    ]
  },
  {
    title: "TapTap",
    date: "2025",
    shortDesc: "A full-stack media sharing platform with cloud-based uploads, albums, reactions, and real-time messaging.",
    
    longDesc:
      "TapTap is a tech startup making using of 3D printed NFC tags as souvenirs in events like weddings featuring a full-stack cloud-based media sharing platform where users can upload photos and videos, organize them into albums, react to content, and interact through a built-in messaging system. The platform integrates Cloudinary for secure media storage and MongoDB for scalable data management. It supports featured tagging, reaction tracking, album management, and real-time media synchronization between the cloud and database.",

    features: [
      "Cloudinary-based image and video uploads with secure signature generation",
      "Automatic Cloudinary-to-MongoDB media synchronization",
      "Featured media tagging via Cloudinary tags",
      "Reaction (like) system with atomic increment updates",
      "Album (folder) creation and media grouping",
      "Duplicate-safe album media insertion logic",
      "Media deletion (Cloudinary + MongoDB sync removal)",
      "Dynamic gallery rendering from database",
      "Real-time messaging system with timestamp sorting",
      "Upload confirmation modal with preview system",
      "Featured photo carousel using Swiper.js",
      "Responsive Bootstrap-based UI"
    ],

    techDetails:
      "The backend is built using Node.js and Express.js, connected to MongoDB. Media storage is handled by Cloudinary, with secure upload signatures generated server-side to prevent credential exposure. A synchronization function fetches Cloudinary resources and mirrors them into MongoDB, preserving metadata such as dimensions, format, size, tags, and featured status. RESTful endpoints manage media retrieval, album relationships, likes, deletions, and messaging. The frontend is built using HTML, CSS, Bootstrap 5, and vanilla JavaScript, with Swiper.js powering the featured carousel and dynamic DOM updates for gallery rendering, modals, and upload confirmations.",

    images: [
      "/img/taptap.png",
      "/img/taptap2.png",
      "/img/taptap3.png",
      "/img/taptap4.png",
      "/img/taptap5.png"
    ],

    tech: [
      "HTML",
      "CSS",
      "Bootstrap 5",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "REST API",
      "Swiper.js"
    ]
  },
  {
    title: "Vinyl Vault",
    date: "2025",
    shortDesc: "A full-stack vinyl record e-commerce platform with cart management and multi-currency support.",
    longDesc:
      "Vinyl Vault is a full-stack web-based vinyl record store developed for my Database Management class where users can browse records, filter and sort products, add items to their personal crate (cart), and place orders. The system supports multi-currency conversion, featured and new arrival tagging, stored-procedure-based order processing, and dynamic cart updates.",

    features: [
      "Dynamic product listing from MySQL database",
      "Live search, sorting (A–Z, price, featured, new), and price filtering",
      "Crate (cart) system with quantity management",
      "Stored procedure-based add-to-crate and order placement",
      "Multi-currency support with real-time conversion",
      "User-specific crate count and order history",
      "Featured and New Arrival product tagging",
      "Persistent currency preference using localStorage",
      "Secure backend API endpoints using Express.js"
    ],

    techDetails:
      "The backend is built using Node.js and Express.js, connected to a MySQL database using a connection pool for efficient query handling. Core operations such as adding to crate and placing orders are implemented using MySQL stored procedures. RESTful API endpoints handle product retrieval, crate management, currency fetching, and order history. The frontend uses vanilla JavaScript for dynamic DOM rendering, live search, sorting, filtering, and multi-currency price conversion. Currency preferences are stored in localStorage, and asynchronous fetch requests power all real-time updates between frontend and backend.",

    images: [
      "/img/vinylvault.png",
      "/img/vinylvault2.png",
    ],

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "RESTful API",
    ]
  },
  {
    title: "BusMate",
    date: "2024 – 2025",
    shortDesc: "A real-time public utility fleet management dashboard.",
    longDesc:
      "For my group's capstone project, we developed BusMate, a real-time public utility bus fleet management system. It provides live vehicle tracking, passenger load monitoring, and operational dashboards for the company and a mobile-optimized web app for commuters.",
    features: [
      "Real-time bus GPS tracking",
      "Passenger load monitoring using camera sensors",
      "Dashboard-based live fleet dispatching",
      "Channel-based chatting with voice messages and mentioning",
      "Notification system for important updates (dashboard popups and email)",
      "Maintenance appointment setting and monitoring",
      "Fuel consumption tracking",
      "Secure income logging",
      "Data analysis and reporting",
      "Live feed for commuters with ETA estimation",
      "Secure role-based access",
    ],
    techDetails:
    "The frontend was built using HTML, CSS, JavaScript, and Bootstrap to deliver a responsive user interface. The backend is powered by Node.js with Express and WebSocket, enabling real-time communication between the system and onboard devices. Data is stored in a MongoDB database, while Cloudinary is integrated for managing image and audio media assets. On the hardware side, an onboard Raspberry Pi is equipped with a Neo-6M GPS module and a Raspberry Pi camera. Python and OpenCV are used on the device to process passenger detection and transmit live passenger count and GPS coordinate data to the backend.",
    images: [
      "/img/busmate.png",
      "/img/busmate2.png",
      "/img/busmate3.png",
      "/img/busmate4.png",
      "/img/busmate5.png",
      "/img/busmate6.png",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Bootstrap", "RESTful API", "Python", "OpenCV", "GPS"],
  },
  {
    title: "DigiSkillsPH",
    date: "2024",
    shortDesc:
      "A high-fidelity platform prototype designed to bridge digital skills education and employment opportunities.",

    longDesc:
      "DigiSkillsPH was conceptualized for an Innovation and Technology Management course as a scalable digital platform aimed at addressing unemployment and underemployment in the Philippines. The project focuses on empowering individuals—particularly those in underserved and rural communities—by providing access to relevant digital skills training and direct employer connections within a single integrated ecosystem. Designed as an interactive high-fidelity prototype in Figma, the platform combines online learning, AI-powered recommendations, and built-in job matching features. The goal is to reduce the gap between education and employment by ensuring that skill acquisition directly translates into career opportunities. DigiSkillsPH aligns with the objectives of Sustainable Development Goal 9 by promoting inclusive digital infrastructure and innovation-driven growth.",

    features: [
      "Personalized user dashboards with progress tracking",
      "Gamification elements including badges and achievement tracking",
      "Synchronous and asynchronous course delivery options",
      "Assessment tests for learning validation",
      "Two-tier subscription model (Basic and Premium plans)",
    ],

    techDetails:
      "DigiSkillsPH was developed as a high-fidelity interactive prototype using Figma. The project included user flow mapping, wireframing, system architecture planning, pricing model structuring, and business scalability analysis. The platform integrates core edtech and HR-tech concepts by combining structured online courses with real-time job matching. AI-driven recommendation systems were designed to personalize both course suggestions and employment opportunities based on user progress and skill acquisition.",
    images: [
      "/img/digiskills.png",
      "/img/digiskills2.png",
      "/img/digiskills3.png",
      "/img/digiskills4.png",
      "/img/digiskills5.png",
      "/img/digiskills6.png",
    ],

    tech: [
      "Figma",
    ]
  },
  {
    title: "EZRetro",
    date: "2024",
    shortDesc: "A subscription-based retro video game hub.",
    longDesc:
      "EZRetro, a web-based subscription platform for retro video games, was a project for my Business Application Development class. It offers users access to a curated library of classic games via an emulator and community forums to meet other people sharing the same interests.",
    features: [
      "User authentication and subscription management",
      "Retro game library from old arcade systems",
      "Vintage collection of console games",
      "Mutliplayer capabilities with other EZRetro users",
      "Community forums for discussions and game recommendations",
    ],
    techDetails:
    "EZRetro was built as a full-stack web application using Node.js and Express.js, with server-side rendering handled through EJS templates. MongoDB was used as the primary database, with Mongoose for schema modeling and data queries. User authentication and session management were implemented using Passport.js and express-session, enabling secure login, registration, and subscription-based access control. The application follows an MVC-style architecture, separating routes, models, and views for better maintainability. Frontend styling was done with HTML, CSS, and vanilla JavaScript, while pagination, search functionality, and subscription logic were handled on the server side.",
    images: ["/img/ezretro.png"],
    tech: ["HTML", "CSS", "Javascript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Live Nation Prototype",
    date: "2024",
    shortDesc:
      "An academic project featuring a high-fidelity UI/UX redesign prototype improving Live Nation’s user experience.",

    longDesc:
      "The Live Nation Prototype was developed for a Human-Computer Interaction course with the objective of improving an existing large-scale event platform’s usability and conversion flow. The project focused on redesigning Live Nation’s interface to modernize its visual identity and eliminate user friction caused by external ticketing redirects. A fully integrated seat booking system was conceptualized within the platform, allowing users to browse events, view complete event details, and select seats dynamically based on the chosen venue. The redesign emphasized clearer information hierarchy, improved event discovery, ticket purchasing flow, and a more cohesive brand experience from browsing to checkout.",

    features: [
      "Complete UI redesign with improved visual hierarchy and modernized layout",
      "Built-in seat booking system prototype (no external ticket redirects)",
      "Dynamic seat map that adapts based on selected venue",
      "Detailed event pages with time, date, artist information, and extended descriptions",
      "Improved event discovery and browsing experience",
    ],

    techDetails:
      "The project was designed and prototyped entirely in Figma as a high-fidelity interactive prototype. User flows, wireframes, and interface components were first structured to address usability issues in the existing Live Nation experience, particularly the disruption caused by redirecting users to third-party ticketing platforms. The redesigned system integrates a native seat selection interface where seating layouts dynamically change depending on the event venue. Component-based design systems were used to maintain visual consistency across event listings, detail pages, and booking interfaces. The prototype focuses on HCI principles such as consistency, feedback, affordance, accessibility, and reduced cognitive load throughout the ticket purchasing process.",

    images: [
      "/img/livenation.png",
      "/img/livenation2.png",
      "/img/livenation3.png",
      "/img/livenation4.png",
    ],

    tech: [
      "Figma",
    ]
  },
  {
    title: "ExploreMore",
    date: "2024",
    shortDesc: "A mobile travel guide Android app for the Philippines.",
    longDesc:
      "For my Mobile Application Development class, my group created ExploreMore, a mobile travel guide designed to help users discover destinations, attractions, and cultural highlights across the Philippines.",
    features: [
      "GPS-based location detection",
      "Nearby attractions, tours, hotels, malls, and restaurants results",
      "Offline access to guides",
      "Adding locations to favorites",
      "Profile customization",
      "Location guide, descriptions, and images",
      "Viewing, adding, and liking of star-based reviews",
      "Attaching of images to reviews",
    ],
    techDetails:
      "All in-app functions were made using Kotlin and Java for Android. Firebase was used for the user account storage and authentication while SQLite was used for storing location info and user reviews. The app follows MVC principles and integrates local storage for offline content.",
    images: ["/img/exploremore.png"],
    tech: ["Kotlin", "Java", "Android", "Firebase", "SQLite"],
  },
  {
    title: "Archers’ Reservation Hub",
    date: "2023",
    shortDesc: "A web application for DLSU computer laboratory room and seat reservations.",
    longDesc:
      "The Archers' Reservation Hub, created for my Web Application Development class, is a web application allowing DLSU student to reserve computer laboratory seats in vacant rooms for self or group studying. DLSU faculty and staff can also reserve entire rooms for classes or events outside of the regular academic schedules.",
    features: [
      "Role-based access (e.g reserving rooms only for faculty/staff)",
      "Room and seat availability viewing",
      "Staff reservation management (viewing, adding, editing, deleting)",
      "Profile customization and viewing",
      "Visual view of room layouts and seat arrangements",
      "Staff reservation for student groups",
    ],
    techDetails:
    "Archers’ Reservation Hub was developed as a full-stack web application using Node.js and Express.js, following a RESTful API architecture. MongoDB Atlas served as the primary database, with Mongoose handling data modeling for accounts, reservations, and session records. The backend implements role-based access control to differentiate student, faculty, and staff permissions, along with custom authentication and session management. CRUD operations were exposed through REST endpoints for room and seat reservations, profile management, and administrative actions. The frontend was built using HTML, CSS, Bootstrap, and JavaScript, enabling responsive interfaces for viewing room layouts, seat availability, and managing reservations.",
    images: ["/img/archers.png", "/img/archers2.png", "/img/archers3.png"],
    tech: ["HTML", "CSS", "Bootstrap", "Javascript", "Node.js", "Express.js", "MongoDB", "RESTful API"],
  },
  {
    title: "Animeow",
    date: "2023",
    shortDesc:
      "An e-commerce pet supplies website featuring product catalog browsing, secure checkout, and structured online selling policies.",

    longDesc:
      "Animeow is a fully designed e-commerce website concept made for my System Requirements Analysis and Quality Assurance class, focused on providing pet owners with a seamless and reliable online shopping experience. The platform was developed with clear product transparency, structured purchasing workflows, and defined customer service policies in mind. It showcases a well-organized product catalog for dogs and cats, secure payment processing, shipping logistics, return policies, and strong visual branding inspired by De La Salle University's iconic green color scheme.",

    features: [
      "Structured product catalog with detailed descriptions and specifications",
      "Clear online ordering workflow (Browse → Cart → Checkout → Confirmation)",
      "Secure payment integration (Credit/Debit Cards and PayPal)",
      "Shipping method selection with estimated delivery dates",
      "Order tracking functionality",
      "Defined returns and refund policy system",
      "Search functionality for product discovery",
      "Category-based navigation (Shop All, Dogs, Cats, Contacts)",
      "Integrated social media links (Instagram, Facebook, YouTube)",
    ],

    techDetails:
      "Animeow was first conceptualized and designed as an interactive high-fidelity prototype in Figma, where the complete user flow, content hierarchy, and visual branding were structured before development. The prototype focused on intuitive navigation, clear product presentation, and conversion-driven layout design. After finalizing the UI/UX design, the website was developed and deployed using WordPress as the content management system. WordPress enabled dynamic product listings, category management, secure checkout functionality, and payment gateway integration. The platform supports credit/debit card payments and PayPal, structured shipping options with estimated delivery timelines, and a defined returns and refund policy system. The implementation emphasizes usability, strong brand identity inspired by De La Salle University's green theme, clear call-to-action placement, search functionality, and scalable content management through CMS-driven architecture.",

    images: [
      "/img/animeow.png",
      "/img/animeow2.png",
      "/img/animeow3.png"
    ],

    tech: [
      "Figma",
      "WordPress",
      "HTML",
      "CSS"
  ]
  },
  {
    title: "Restaurant Ordering and Inventory System",
    date: "2023",
    shortDesc: "A web-based food ordering system with dynamic combo creation and real-time price calculation",
    longDesc:
      "This project is a web-based food ordering system developed for an Integrative Programming class. It allows users to build custom meal combos following a fixed sequence (Main, Side, and Drink), automatically applying discounts based on predefined combo recommendations. The system dynamically updates item quantities, prices, and discounted totals in real time using client-side logic. A checkout and payment flow validates user input before submitting order details to the backend, where transactions are stored in structured XML format for record-keeping and order management.",
    features: [
      "Guided combo creation following a Main–Side–Drink pattern",
      "Real-time item quantity adjustment and price recalculation",
      "Dynamic display of unfinished, created, and recommended combos",
      "Client-side payment validation to prevent insufficient payments",
      "Checkout and order submission using AJAX",
      "XML-based order storage via backend PHP scripts",
    ],
    techDetails:
    "Built with HTML, CSS, and JavaScript, the application uses dynamic DOM manipulation to manage combo-based ordering, real-time price calculations, and discount application. PHP handles backend order processing, with orders sent via AJAX and stored in XML format. Client-side validation ensures correct payment handling and smooth checkout flow.",
    images: ["/img/restaurant.png"],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "AJAX", "XML"],
  },
  {
    title: "myFarm",
    date: "2022",
    shortDesc: "A Java Swing-based day-by-day farming simulator game with tile-based crop management, inventory systems, and player progression.",
    longDesc:
      "myFarm, created for my Object-Oriented Programming, is a Java-based desktop farming simulation game where players manage a virtual farm by plowing land, planting crops, watering and fertilizing them, harvesting produce, and clearing obstacles like rocks. The game uses a tile-based farm layout, with each tile tracking its own state, including crop growth, plow status, withering, and rocks. Players earn in-game currency and experience points to level up and unlock higher farmer titles. A Java Swing-based graphical interface provides interactive menus, farm visuals, inventory management, and a shop system. Background music and sound effects enhance the overall experience.",
    features: [
      "Tile-based farm system with individual tile states (plowed, occupied, withered, rocky)",
      "Interactive crop lifecycle management (planting, watering, fertilizing, harvesting)",
      "In-game shop for purchasing seeds and upgrading farmer types",
      "Inventory system for seeds bought from the shop",
      "Player progression system with experience points, levels, and farmer titles",
      "Economy system using in-game currency for purchases and harvest sales",
      "Background music and sound effects for enhanced immersion",
    ],
    techDetails:
    "myFarm was developed in Java using the Swing framework for the graphical user interface. Core gameplay logic follows object-oriented principles, with classes representing players, crops, tiles, and game actions. The farm uses a 2D tile array where each tile tracks its own state, and user interactions are handled via event-driven programming with action and mouse listeners. Audio playback for music and sound effects is integrated through custom sound player classes, and UI flow is managed through panel switching and state updates.",
    images: ["/img/myFarm.png", "img/myfarm2.png", "img/myfarm3.png", "img/myfarm4.png"],
    tech: ["Java", "Java Swing", "Object-Oriented Programming"],
  },
  {
    title: "Translasean",
    date: "2021",
    shortDesc: "A C-based basic syntax language identifier and translator",
    longDesc:
      "Translasean is a console-based application built in C for my Programming with Structured Data Types class. It allows users to manage a collection of language-translation pairs. Users can add new entries, modify existing ones, delete entries or specific translations, search by language, translation, or exact pair, and navigate through entries using a next/previous interface. The program supports importing entries from text files and exporting them for external use. Each entry can hold up to 10 pairs, and entries are alphabetically arranged for easy reference.",
    features: [
      "Add, modify, and delete language-translation entries",
      "Search by language, translation, or exact pair",
      "Import entries from and export entries to text files",
    ],
    techDetails:
    "The project is written in C using standard libraries like stdio.h and string.h. Core data structures include arrays and structs to represent language-translation pairs and track multiple entries.",
    images: ["/img/translasean.png"],
    tech: ["C"],
  },
  {
  title: "Property Property!",
  date: "2021",
  shortDesc: "A monopoly-inspired C-based console board game simulating property ownership, dice rolls, and player balance management.",
  longDesc:
    "Property Property! is a console application in C where players navigate a 10-position board, roll dice, buy properties, pay for owned properties, and manage their balance. Each property has ownership tracking, prices, and optional renovations. The game features interactive menus, turn-based player actions, and decision prompts for property purchases and other events.",
  features: [
    "10-position board with named properties",
    "Dice roll mechanic for player movement",
    "Property ownership tracking with two players",
    "Buy, renovate, and manage properties",
    "Balance management and transaction prompts",
    "Turn-based gameplay with interactive console prompts"
  ],
  techDetails:
    "Developed in C using standard libraries (stdio.h, stdlib.h). The game uses arrays and integers to track board positions, property ownership, and player balances. Functions handle displaying the board, rolling dice, checking property ownership, processing property actions, and managing player turns. Input validation ensures proper player interaction, and modular functions simplify code management.",
  images: ["/img/property_board_game.png"],
  tech: ["C"],
},
];

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 text-left
                   font-semibold text-green-900 dark:text-green-300"
      >
        {title}

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <FaChevronDown />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
            className="px-4 pb-4 text-gray-700 dark:text-gray-200 text-sm
                      text-justify leading-relaxed"
          >
            {children}
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const [imageViewer, setImageViewer] = useState({
    open: false,
    images: [],
    index: 0,
  });

  useEffect(() => {
    const handleKey = (e) => {
      if (!imageViewer.open) return;

      if (e.key === "Escape") {
        setImageViewer({ open: false, images: [], index: 0 });
      }

      if (e.key === "ArrowRight") {
        setImageViewer((prev) => ({
          ...prev,
          index: (prev.index + 1) % prev.images.length,
        }));
      }

      if (e.key === "ArrowLeft") {
        setImageViewer((prev) => ({
          ...prev,
          index:
            (prev.index - 1 + prev.images.length) %
            prev.images.length,
        }));
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [imageViewer.open]);

  return (
    <>
      {/* PROJECTS GRID */}
      <section
        id="projects"
        className="bg-white dark:bg-gray-800 p-10 mb-8 rounded-xl shadow-md"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-green-900 dark:text-green-400 mb-6 border-l-4 border-gray-400 pl-3">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div
                key={proj.title}
                onClick={() => setSelectedProject(proj)}
                className="cursor-pointer bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md
                           hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                <img
                  src={proj.images[0]}
                  alt={proj.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />

                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-300">
                    {proj.title} ({proj.date})
                  </h3>

                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    {proj.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full
                                   bg-green-100 text-green-900
                                   dark:bg-green-900/30 dark:text-green-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  <AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}   // 👈 close when clicking overlay
    >
      <motion.div
        className="bg-white dark:bg-gray-800 max-w-3xl w-full max-h-[90vh]
                   overflow-y-auto rounded-xl shadow-xl p-6 space-y-5"
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}   // 👈 prevent closing when clicking inside
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-green-900 dark:text-green-300">
            {selectedProject.title}
          </h3>

          <button
            onClick={() => setSelectedProject(null)}
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Accordions */}
        <Accordion title={`What is ${selectedProject.title}?`}>
          {selectedProject.longDesc}
        </Accordion>

        <Accordion title="Features">
          <ul className="list-disc list-inside space-y-1">
            {selectedProject.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Accordion>

        <Accordion title="Behind the Code">
          {selectedProject.techDetails}
        </Accordion>

        <Accordion title="Images">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {selectedProject.images.map((img, i) => (
              <img
                key={img}
                src={img}
                alt=""
                onClick={() =>
                  setImageViewer({
                    open: true,
                    images: selectedProject.images,
                    index: i,
                  })
                }
                className="rounded-lg shadow-md cursor-pointer
                          hover:scale-105 hover:shadow-xl
                          transition-all duration-300"
              />
            ))}
          </div>
        </Accordion>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

<AnimatePresence>
  {imageViewer.open && (
    <motion.div
      className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() =>
        setImageViewer({ open: false, images: [], index: 0 })
      }
    >
      {/* VIEWER CONTAINER */}
      <motion.div
        className="relative w-full max-w-6xl h-[85vh] flex items-center justify-center"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* IMAGE */}
        <img
          src={imageViewer.images[imageViewer.index]}
          alt=""
          className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
        />

        {/* LEFT ARROW */}
        {imageViewer.images.length > 1 && (
          <button
            onClick={() =>
              setImageViewer((prev) => ({
                ...prev,
                index:
                  (prev.index - 1 + prev.images.length) %
                  prev.images.length,
              }))
            }
            className="absolute left-6 top-1/2 -translate-y-1/2
              w-14 h-14
              flex items-center justify-center
              rounded-full
              bg-green-500/10 backdrop-blur-md
              text-green-400
              transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]
              hover:bg-green-500/20
              hover:text-green-300
              hover:scale-110
              hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]
              active:scale-95"
          >
            <FaChevronLeft size={22} />
          </button>
        )}

        {/* RIGHT ARROW */}
        {imageViewer.images.length > 1 && (
          <button
            onClick={() =>
              setImageViewer((prev) => ({
                ...prev,
                index:
                  (prev.index + 1) %
                  prev.images.length,
              }))
            }
            className="absolute right-6 top-1/2 -translate-y-1/2
              w-14 h-14
              flex items-center justify-center
              rounded-full
              bg-green-500/10 backdrop-blur-md
              text-green-400
              transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]
              hover:bg-green-500/20
              hover:text-green-300
              hover:scale-110
              hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]
              active:scale-95"
          >
            <FaChevronRight size={22} />
          </button>
        )}

        {/* CLOSE BUTTON */}
        <button
          onClick={() =>
            setImageViewer({ open: false, images: [], index: 0 })
          }
          className="absolute top-6 right-6
            w-12 h-12
            flex items-center justify-center
            rounded-full
            bg-white/10 backdrop-blur-md
            text-white text-2xl
            transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]
            hover:bg-red-500
            hover:scale-110
            hover:rotate-90
            hover:shadow-[0_0_25px_rgba(255,0,0,0.4)]
            active:scale-95"
        >
          <FaTimes />
        </button>

        {/* IMAGE COUNTER */}
        <div className="absolute bottom-6
                        bg-black/50 text-white px-4 py-1
                        rounded-full text-sm">
          {imageViewer.index + 1} / {imageViewer.images.length}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}
