import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { title: "ABOUT", href: "#about", id: "about" },
    { title: "SKILLS", href: "#skills", id: "skills" },
    { title: "PROJECTS", href: "#projects", id: "projects" },
    { title: "ACHIEVEMENTS", href: "#achievements", id: "achievements" },
    { title: "CONTACT", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-black border-b border-cyan-500/30 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 relative">
        {/* Animated line */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

        <div className="flex justify-between items-center py-4">
          <div className="text-cyan-400 font-mono text-sm hidden md:block">
            <span className="text-pink-500">&lt;</span> SYSTEM.NAV{" "}
            <span className="text-pink-500">/&gt;</span>
          </div>

          <ul className="flex justify-center space-x-1 md:space-x-6">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <motion.li
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                  className="relative"
                >
                  <a
                    href={item.href}
                    className={`font-mono text-xs md:text-sm px-3 py-2 inline-block relative ${
                      isActive ? "text-cyan-400" : "text-gray-400"
                    } hover:text-cyan-400 transition-colors duration-300`}
                  >
                    <span className="relative z-10">{item.title}</span>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {/* Hover effect */}
                    <span className="absolute -bottom-px left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.li>
              );
            })}
          </ul>

          <div className="text-cyan-400 font-mono text-sm hidden md:block">
            <span className="text-pink-500 blink">_</span>
          </div>
        </div>
      </div>

      {/* Add blinking cursor animation */}
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
