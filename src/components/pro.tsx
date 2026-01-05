import { Card } from "./ui/card";
import { Button } from "./ui/button";
import "../css/project.css";
import "../css/pro.css";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export function Pro() {
  const [projects, setProjects] = useState([]);

  // 🔥 FETCH PROJECTS FROM FIREBASE (UNCHANGED)
  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(collection(db, "projects"));
      const projectList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectList);
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-20 px-6 project-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            PERSONAL PROJECTS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            All projects I've worked on
          </h2>
        </div>

        {/* 🔁 GRID — UNCHANGED */}
        <div className="grid md:grid-cols-2 gap-4 m-auto widthx ">

          {/* ✅ CARD 1 (FROM Pro.tsx STYLE) */}
          <Card className="pro-card">
            <div className="pro-card-header">
              <span className="pro-role">Founder and Developer</span>
              <span className="pro-year">2025</span>
            </div>

            <h3 className="pro-title">DeepSite</h3>

            <p className="pro-description">
              The new AI Vibe Coding Platform. Develop and deploy AI-powered
              applications in minutes.
            </p>

            <div>
              <p className="pro-tech-label">TECH STACK</p>
              <div className="pro-tech-list">
                <span className="pro-tech-item">TypeScript</span>
                <span className="pro-tech-item">React</span>
                <span className="pro-tech-item">Node.js</span>
              </div>
            </div>

            <a href="#" className="pro-link">
              Visit Project →
            </a>
          </Card>

          {/* ✅ CARD 2 (FROM Pro.tsx STYLE) */}
          <Card className="pro-card">
            <div className="pro-card-header">
              <span className="pro-role">Founder and Developer</span>
              <span className="pro-year">2023</span>
            </div>

            <h3 className="pro-title">DiscoTools.xyz</h3>

            <p className="pro-description">
              A comprehensive toolkit for managing and enhancing Discord
              communities and servers.
            </p>

            <div>
              <p className="pro-tech-label">TECH STACK</p>
              <div className="pro-tech-list">
                <span className="pro-tech-item">TypeScript</span>
                <span className="pro-tech-item">React</span>
                <span className="pro-tech-item">Node.js</span>
              </div>
            </div>

            <a href="#" className="pro-link">
              Visit Project →
            </a>
          </Card>

        </div>
      </div>
    </section>
  );
}