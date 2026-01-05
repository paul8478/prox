import React from "react";
import "../css/skills.css";

export function TechStack() {
  const aboutText =
    "Here are some of the technologies I currently work with:";

  const technologies = [
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },

    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },

    { name: "SQL (MySQL)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },

    { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },

    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ];

  return (
    <section className="py-20 skill-card">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Tech Stack
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          {aboutText}
        </p>

        {/* ===== TECH GRID ===== */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {technologies.map((tech, index) => (
            <div
              key={index}
              title={tech.name}
              className="
                tech-logo-card
                bg-white/90 backdrop-blur-md
                rounded-2xl p-4
                flex items-center justify-center
                hover:scale-110 hover:shadow-2xl
                transition-all duration-300
                cursor-pointer
                mb-6 z-50
              "
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-10 h-10 object-contain"
              />
            </div>
          ))}
        </div>

        {/* ===== GITHUB BUTTON ===== */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            bg-gradient-to-r from-orange-400 to-pink-500
            rounded-full px-6 py-3
            hover:scale-105 transition-all duration-300
            margin-bottom-150
            mt-8
          "
        >
          <span className="text-white font-medium">
            Check out my GitHub
          </span>
          <span className="text-white">→</span>
        </a>
      </div>

      {/* ===== SCROLLING BANNER ===== */}
      <div className="overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 py-4 mt-12">
        <div className="animate-scroll whitespace-nowrap text-white font-bold text-2xl md:text-4xl lg:text-6xl px-4 transform -rotate-2">
          TECHNOLOGY • SKILLS • DEVELOPMENT • MACHINE LEARNING • PROGRAMMING •
        </div>
      </div>
    </section>
  );
}
