import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaEye,
  FaCode,
  FaRobot,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative bg-black text-white py-20 cyber-section overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-block">
              <div className="font-mono text-xs text-cyan-400 mb-2 tracking-wider">
                // SYSTEM.INIT
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                <span className="gradient-text">VISHANT PAL</span>
              </h1>
              <div className="flex items-center justify-center md:justify-start">
                <div className="h-px w-12 bg-cyan-500 mr-3"></div>
                <div className="font-mono text-xs text-cyan-400 tracking-wider">
                  V.2.5.0
                </div>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-mono text-cyan-400 mb-6 glitch">
              MERN Stack Developer
            </h2>

            <p className="text-gray-400 mb-8 max-w-lg font-mono text-sm leading-relaxed">
              <span className="text-pink-500">function</span>{" "}
              <span className="text-cyan-400">buildExceptionalApps</span>(){" "}
              {"{"}
              <br />
              &nbsp;&nbsp;return{" "}
              <span className="text-yellow-400">
                "Creating innovative solutions with modern technologies"
              </span>
              ;
              <br />
              {"}"}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/vishant_pal 81.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button group"
              >
                <FaEye className="inline mr-2 group-hover:text-cyan-400 transition-colors" />
                <span>View_Resume</span>
              </a>
              <a
                href="/vishant_pal 81.pdf"
                download
                className="cyber-button group"
                style={{ borderColor: "var(--secondary)" }}
              >
                <FaFileDownload className="inline mr-2 group-hover:text-pink-400 transition-colors" />
                <span>Download_Resume</span>
              </a>
              <a
                href="https://github.com/vishant8491"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button group"
              >
                <FaGithub className="inline mr-2 group-hover:text-cyan-400 transition-colors" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vishant-pal-42a9a9293/"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button group"
                style={{ borderColor: "var(--secondary)" }}
              >
                <FaLinkedin className="inline mr-2 group-hover:text-pink-400 transition-colors" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 max-w-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Animated rings */}
              <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,240,255,0.3) 0%, rgba(0,0,0,0) 70%)",
                  animation: "pulse 2s infinite",
                }}
              ></div>

              <div
                className="absolute -inset-4 rounded-full animate-spin-slow"
                style={{
                  border: "1px dashed rgba(0,240,255,0.5)",
                  animation: "spin 20s linear infinite",
                }}
              ></div>

              <div
                className="absolute -inset-8 rounded-full animate-spin-slow"
                style={{
                  border: "1px dashed rgba(255,0,255,0.3)",
                  animation: "spin 30s linear infinite reverse",
                }}
              ></div>

              {/* Hexagon frame */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-pink-500/30 rounded-full blur-xl opacity-70"></div>
                <div className="relative w-full aspect-square overflow-hidden rounded-full border-2 border-cyan-500/50">
                  <img
                    className="w-full h-full object-cover"
                    src="/photu.jpg"
                    alt="Vansh Tyagi"
                  />

                  {/* Scan effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
                    style={{
                      animation: "scan 3s ease-in-out infinite",
                      backgroundSize: "100% 10px",
                    }}
                  ></div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-pink-400"></div>
                  <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-pink-400"></div>
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-cyan-400"></div>
                </div>
              </div>

              {/* Tech icons floating around */}
              <div className="absolute -top-4 -right-4 bg-black p-2 rounded-full border border-cyan-500 animate-float">
                <FaCode className="text-cyan-400 text-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-black p-2 rounded-full border border-pink-500 animate-float-delay">
                <FaRobot className="text-pink-400 text-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),rgba(0,0,0,0.2))]">
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/* Add some random tech-looking elements */}
        <div className="absolute bottom-10 left-10 w-20 h-20 border border-cyan-500/30 rounded-lg rotate-45"></div>
        <div className="absolute top-20 right-20 w-32 h-10 border border-pink-500/20 rounded-md"></div>

        {/* Binary code background */}
        <div className="absolute inset-0 opacity-5 text-[8px] text-cyan-500 overflow-hidden font-mono leading-tight select-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Array.from({ length: 100 }).map((_, j) => (
                <span key={j}>{Math.round(Math.random())}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Add keyframes for new animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes scan {
          0%,
          100% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(100%);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 3s ease-in-out 1.5s infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
