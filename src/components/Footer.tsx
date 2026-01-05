import { Github, Linkedin, Mail, Heart } from "lucide-react";
import "../css/footer.css"
export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/alexchen",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/alexchen",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:alex.chen@example.com",
      label: "Email"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-bg border-t">
      <div className="container mx-auto px-4 py-12 footer-bg">
        

        <div className=" mt-8 pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Somnath Paul. Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}