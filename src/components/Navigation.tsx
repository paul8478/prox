import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        .nav-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
        }

        .nav-blur {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.3)
          );
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-content {
          position: relative;
          max-width: 1280px;
          margin: auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-link {
          padding: 8px 16px;
          font-size: 14px;
          color: white;
          border-radius: 8px;
          transition: background 0.3s ease;
          text-decoration: none;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .nav-link.youtube:hover {
          background: rgba(239, 68, 68, 0.2);
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="nav-container">
        {/* BLUR BACKGROUND */}
        <div className="nav-blur" />

        {/* CONTENT */}
        <div className="nav-content">
          {/* LOGO */}
          <div className="text-white text-lg font-semibold tracking-wide">
            Somnath Paul
          </div>

          {/* LINKS */}
          <div style={{ display: "flex", gap: "8px" }}>
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/allprojects" className="nav-link">
              Projects
            </Link>

            <Link to="/youtube" className="nav-link youtube">
              YouTube
            </Link>

            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
