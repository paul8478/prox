import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      
      {/* BLUR LAYER */}
      <div className="
        absolute inset-0
        bg-black/40
        backdrop-blur-3xl
        border-b border-white/10
      " />

      {/* CONTENT */}
      <div className="
        relative
        flex items-center justify-between
        max-w-7xl mx-auto
        px-4 py-3
      ">
        {/* Logo */}
        <div className="text-white text-lg font-semibold tracking-wide">
          Somnath Paul
        </div>

        {/* Links */}
        <div className="flex space-x-2">
          <Link
            to="/"
            className="px-4 py-2 text-sm text-white rounded-lg hover:bg-white/10 transition"
          >
            Home
          </Link>

          <a
            href="/allprojects"
            className="px-4 py-2 text-sm text-white rounded-lg hover:bg-white/10 transition"
          >
            Projects
          </a>

          <Link
            to="/youtube"
            className="px-4 py-2 text-sm text-white rounded-lg hover:bg-red-500/20 transition"
          >
            YouTube
          </Link>

          <a
            href="/contact"
            className="px-4 py-2 text-sm text-white rounded-lg hover:bg-white/10 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
