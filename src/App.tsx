import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { TechStack } from "./components/TechStack";
import { AllProjects } from "./pages/AllProjects";
import {Pro } from "./components/pro";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import {Details} from "./components/Detailsx";
import React from "react";


import Youtube from "./pages/Youtube";
import Contact from "./pages/Contact";

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
                  <Details/>
                  <TechStack />
                  <Education />
                  <Experience />
                  <Pro />
                  <ContactSection />

                </>
              }
            />

            {/* ===== YOUTUBE PAGE ===== */}
            <Route path="/youtube" element={<Youtube />} />
            {/* ===== CONTACT PAGE ===== */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/allprojects" element={<AllProjects />} />
          </Routes>
        </main>

        <Footer/>
      </div>
    </Router>
  );
}
