import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import "../css/home.css";
import somnath from "../images/somnath.jpg";
import githubImg from "../images/github.png";

// ✅ IMPORT FUNCTION + TYPE (NOT DEFAULT)
import { getSocialLinks, SocialLinks } from "../Data/socialLinks";

export function ProjectsGrid() {

  // 🔥 Firestore-loaded social links
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({});

  useEffect(() => {
    getSocialLinks().then(setSocialLinks);
  }, []);

  // 🟪 BOX 1 → Instagram, LinkedIn, X, Facebook
  const socialBoxOne = [
    { key: "instagram", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
    { key: "linkedin", icon: "https://cdn-icons-png.flaticon.com/512/145/145807.png" },
    { key: "twitter", icon: "https://cdn-icons-png.flaticon.com/512/5969/5969020.png" },
    { key: "facebook", icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png", link: "https://facebook.com" },
  ] as const;

  // 🟦 BOX 2 → GitHub, Gmail, Discord, YouTube
  const socialBoxTwo = [
    { key: "github", icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png" },
    { key: "email", icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png" },
    { key: "discord", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png", link: "https://discord.com" },
    { key: "youtube", icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png" },
  ] as const;

  return (
    <section className="py-20 px-6 home-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">

          {/* ================= SOCIAL BOX 1 ================= */}
          <Card className="group relative aspect-square bg-white/10 backdrop-blur-xl border border-white/20 text-white overflow-hidden">
            <div className="relative p-6 h-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 p-6 border border-white/20 rounded-xl">
                {socialBoxOne.map((item, i) => (
                  <a
                    key={i}
                    href={socialLinks[item.key] || item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.icon} className="w-12 h-12 hover:scale-125 transition" />
                  </a>
                ))}
              </div>
            </div>
          </Card>

          {/* ================= PROFILE CARD ================= */}
          <Card className="group md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 text-white">
            <div className="p-6 h-full flex flex-col justify-between">
              <div className="flex-1 flex items-center justify-center">
                <img src={somnath} className="w-40 h-40 rounded-xl" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Somnath Paul</h3>
                <p className="text-white/80 text-sm">An Enthusiastic & Passionate Developer</p>
              </div>
            </div>
          </Card>

          {/* ================= SOCIAL BOX 2 ================= */}
          <Card className="group relative aspect-square bg-white/10 backdrop-blur-xl border border-white/20 text-white overflow-hidden">
            <div className="relative p-6 h-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 p-6 border border-white/20 rounded-xl">
                {socialBoxTwo.map((item, i) => (
                  <a
                    key={i}
                    href={socialLinks[item.key] || item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.icon} className="w-12 h-12 hover:scale-125 transition" />
                  </a>
                ))}
              </div>
            </div>
          </Card>

          {/* ================= YOUTUBE CARD ================= */}
          <Card className="group aspect-square bg-white/10 backdrop-blur-xl border border-white/20">
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="flex h-full items-center justify-center">
              <img
                src="https://yt3.googleusercontent.com/goYPVOiLvw_fjsdx8-8qi9yG6uxyrCmisx2HB_lsvpopM-58Lrz7U-IOOXzJLhOyNaw_0hJ7Jg=s160-c-k-c0x00ffffff-no-rj"
                className="w-20 h-20 rounded-full"
              />
            </a>
          </Card>

          {/* ================= GITHUB CARD ================= */}
          <Card className="group aspect-square bg-white/10 backdrop-blur-xl border border-white/20">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex h-full items-center justify-center">
              <img src={githubImg} className="w-12 h-12" />
            </a>
          </Card>

        </div>
      </div>
    </section>
  );
}
