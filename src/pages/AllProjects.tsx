import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import "../css/project.css";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export function AllProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // 🔥 loader state

  // 🔥 FETCH PROJECTS FROM FIREBASE
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snapshot = await getDocs(collection(db, "projects"));
        const projectList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectList);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false); // ✅ stop loader
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-20 px-6 project-card min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            PERSONAL PROJECTS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            All projects I've worked on
          </h2>
        </div>

        {/* 🔄 LOADER */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-32 text-white">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
            <p className="text-white/70 tracking-wide">Loading projects...</p>
          </div>
        )}

        {/* 📦 PROJECT GRID */}
        {!loading && projects.length > 0 && (
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <Card
                key={project.id || index}
                className={`
                  bg-white/20 ${project.gradient}
                  border-none text-white overflow-hidden
                  hover:scale-105 transition-all duration-300 cursor-pointer
                  p-6
                `}
              >
                <div className="mb-4">
                  <div className="w-auto h-auto bg-white/20 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-contain w-70 h-70"
                      />
                    ) : (
                      <div className="w-70 h-70 flex items-center justify-center text-white/80">
                        No Image
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-white/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        )}

        {/* ❌ EMPTY STATE */}
        {!loading && projects.length === 0 && (
          <div className="text-center text-white/60 py-32">
            No projects found.
          </div>
        )}
      </div>
    </section>
  );
}
