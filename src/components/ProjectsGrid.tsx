import { Card } from "./ui/card";
import "../css/home.css";
import somnath from "../images/somnath.jpg";
import github from "../images/github.png";

export function ProjectsGrid() {
  const socialIcons = [
    "https://cdn-icons-png.flaticon.com/512/174/174857.png",   // Instagram
    "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", // WhatsApp
    "https://cdn-icons-png.flaticon.com/512/733/733547.png",   // Facebook
    "https://cdn-icons-png.flaticon.com/512/733/733553.png"    // GitHub
  ];

  return (
    <section className="py-20 px-6 home-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">

          {/* ================= SOCIAL MEDIA CARD ================= */}
          <Card className="
            group relative aspect-square
            bg-white/10 backdrop-blur-xl
            border border-white/20 text-white
            transition-all duration-500
            hover:scale-[1.06] hover:-translate-y-2
            hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]
            overflow-hidden
          ">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition" />

            <div className="relative z-10 p-6 h-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 p-6 border border-white/20 rounded-xl">
                {socialIcons.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="social"
                    className="w-12 h-12 mx-auto floating hover:scale-125 transition"
                  />
                ))}
              </div>
            </div>
          </Card>

          {/* ================= PROFILE CARD ================= */}
          <Card className="
            group relative
            bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500
            border-none text-white overflow-hidden
            transition-all duration-500
            hover:scale-[1.05] hover:-translate-y-2
            hover:shadow-[0_0_60px_rgba(99,102,241,0.6)]
            md:col-span-2 md:row-span-2
          ">
            <div className="absolute inset-0 shimmer" />

            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div className="flex-1 bg-black/30 rounded-xl mb-4 flex items-center justify-center">
                <img
                  src={somnath}
                  alt="Somnath Paul"
                  className="w-40 h-40 object-cover rounded-xl
                             transition duration-500 group-hover:scale-110"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold">Somnath Paul</h3>
                <p className="text-white/80 text-sm">
                  An Enthusiastic & Passionate Developer
                </p>
              </div>
            </div>
          </Card>

          {/* ================= DETAILS CARD ================= */}
          <Card className="
            group relative aspect-square
            bg-white/10 backdrop-blur-xl
            border border-white/20 text-white
            transition-all duration-500
            hover:scale-[1.06] hover:-translate-y-2
            hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]
            overflow-hidden
          ">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition" />

            <div className="relative z-10 p-6 h-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 p-6 border border-white/20 rounded-xl">
                {socialIcons.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="detail"
                    className="w-12 h-12 mx-auto floating hover:scale-125 transition"
                  />
                ))}
              </div>
            </div>
          </Card>

          {/* ================= YOUTUBE CARD ================= */}
          <Card className="
            group relative aspect-square
            bg-white/10 backdrop-blur-xl
            border border-white/20 text-white
            transition-all duration-500
            hover:scale-[1.06] hover:-translate-y-2
            hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]
            overflow-hidden
          ">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition" />
            <div className="relative z-10 p-6 h-full flex items-center justify-center">

            <div className=" relative gap-6 p-6 border border-white/20 rounded-xl flex items-center justify-center">
              <img
                src="https://yt3.googleusercontent.com/goYPVOiLvw_fjsdx8-8qi9yG6uxyrCmisx2HB_lsvpopM-58Lrz7U-IOOXzJLhOyNaw_0hJ7Jg=s160-c-k-c0x00ffffff-no-rj"
                className="w-20 h-20 rounded-full transition group-hover:scale-125"
              />
            </div>
          </div>
          </Card>

          {/* ================= GITHUB CARD ================= */}
          <Card className="
             group relative aspect-square
            bg-white/10 backdrop-blur-xl
            border border-white/20 text-white
            transition-all duration-500
            hover:scale-[1.06] hover:-translate-y-2
            hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]
            overflow-hidden
          ">
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition" />
            <div className="relative z-10 p-6 h-full flex items-center justify-center">

            <div className="relative gap-6 p-6 border border-white/20 rounded-xl flex items-center justify-center">
              <img
                src={github}
                className="w-12 h-12 transition group-hover:scale-125 group-hover:rotate-12"
              />
            </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}
