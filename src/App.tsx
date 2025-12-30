import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { TechStack } from "./components/TechStack";
import { AllProjects } from "./components/AllProjects";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";

import Youtube from "./pages/Youtube";

export default function App(){
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />

        <main>
          <Routes>
            {/* ===== HOME PAGE ===== */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ProjectsGrid />
                  <TechStack />
                  <Education />
                  <Experience />
                  <AllProjects />
                  <ContactSection />
                </>
              }
            />

            {/* ===== YOUTUBE PAGE ===== */}
            <Route path="/youtube" element={<Youtube />} />
          </Routes>
        </main>

        <FooterSection />
      </div>
    </Router>
  );
}
