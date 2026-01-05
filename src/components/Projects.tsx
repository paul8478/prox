import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import "../css/pro.css";

export function Projects() {
  
  return (
     <section id="projects" className="pro-section">
      <div className="pro-container">
        <div className="pro-wrapper">

          {/* ===== SECTION LABEL ===== */}
          <p className="pro-label">Personal Projects</p>

          {/* ===== HEADING ===== */}
          <h2 className="pro-heading">
            All projects I've worked on
          </h2>

          {/* ===== PROJECT GRID ===== */}
          <div className="pro-grid">

            {/* ===== PROJECT CARD 1 ===== */}
            <Card className="pro-card">
              <div className="pro-card-header">
                <span className="pro-role">Founder and Developer</span>
                <span className="pro-year">2025</span>
              </div>

              <h3 className="pro-title">DeepSite</h3>

              <p className="pro-description">
                The new AI Vibe Coding Platform. Develop and deploy your AI
                applications in minutes.
              </p>

              <div className="pro-tech">
                <p className="pro-tech-label">TECH STACK</p>
                <div className="pro-tech-list">
                  {["TypeScript", "React", "Node.js"].map((tech) => (
                    <span key={tech} className="pro-tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="ghost" className="pro-link">
                Visit Project <ExternalLink size={16} />
              </Button>
            </Card>

            {/* ===== PROJECT CARD 2 ===== */}
            <Card className="pro-card">
              <div className="pro-card-header">
                <span className="pro-role">Founder and Developer</span>
                <span className="pro-year">2023</span>
              </div>

              <h3 className="pro-title">DiscoTools.xyz</h3>

              <p className="pro-description">
                A comprehensive set of tools for Discord servers and communities.
              </p>

              <div className="pro-tech">
                <p className="pro-tech-label">TECH STACK</p>
                <div className="pro-tech-list">
                  {["TypeScript", "React", "Node.js"].map((tech) => (
                    <span key={tech} className="pro-tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="ghost" className="pro-link">
                Visit Project <ExternalLink size={16} />
              </Button>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}