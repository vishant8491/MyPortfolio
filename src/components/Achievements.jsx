import { motion } from "framer-motion";
import { FaTrophy, FaCode, FaHackerrank, FaRocket } from "react-icons/fa";

const achievements = [
  {
    icon: <FaCode className="text-cyan-400 text-4xl" />,
    title: "Problem Solver",
    description:
      "Solved 260+ DSA Problems across LeetCode, GeeksforGeeks",
    color: "border-cyan-500/50",
    glow: "cyan",
  },
  {
    icon: <FaCode className="text-cyan-400 text-4xl" />,
    title: "TCS CODEVITA",
    description:
      "Secured Rank 4562 in TCS CodeVita Season 12 Round 1 out of 537,000+ global participants",
    color: "border-cyan-500/50",
    glow: "cyan",
  }
];

const profiles = [
  {
    name: "LeetCode",
    icon: <FaCode />,
    link: "https://leetcode.com/u/iamvishupal/",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 bg-black cyber-section relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border border-cyan-500/20 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 border border-pink-500/10 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-block">
            <div className="font-mono text-xs text-cyan-400 mb-2 tracking-wider">
              {"// SYSTEM.ACHIEVEMENTS"}
            </div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              ACHIEVEMENTS
            </motion.h2>
            <div className="flex items-center justify-center">
              <div className="h-px w-12 bg-cyan-500 mr-3"></div>
              <div className="font-mono text-xs text-cyan-400 tracking-wider">
                DATA.LOADED
              </div>
              <div className="h-px w-12 bg-cyan-500 ml-3"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className={`cyber-card p-6 text-center relative ${achievement.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: `0 0 20px var(--${achievement.glow}-glow)`,
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-pink-400"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-pink-400"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-400"></div>

              {/* Status indicator */}
              <div className="absolute top-2 right-2 flex items-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mr-1 animate-pulse"></div>
                <div className="text-xs font-mono text-cyan-400">ACTIVE</div>
              </div>

              <div className="flex justify-center mb-6 relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
                  style={{
                    animation: "scan 2s ease-in-out infinite",
                    backgroundSize: "100% 4px",
                  }}
                ></div>
                <div className="relative z-10 p-4 rounded-full border border-cyan-500/30 bg-black">
                  {achievement.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 font-mono tracking-wider">
                <span className="text-cyan-400">&gt;</span> {achievement.title}
              </h3>

              <p className="text-gray-400 font-mono text-sm">
                {achievement.description}
              </p>

              {/* Data visualization */}
              <div className="mt-4 pt-4 border-t border-cyan-500/20">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-gray-500">STATUS</span>
                  <span className="text-cyan-400">VERIFIED</span>
                </div>
                <div className="w-full bg-gray-800 h-1 mt-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 w-full"
                    style={{ animation: "pulse 2s infinite" }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {profile.icon}
              <span className="ml-2">View_My_{profile.name}</span>
            </a>
          ))}
        </motion.div>

        {/* Additional futuristic elements */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"></div>
          <div className="relative z-10 p-6 border border-cyan-500/20 rounded-md bg-black/50 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <FaRocket className="text-pink-500 mr-3 text-xl" />
              <h3 className="text-xl font-mono text-cyan-400">
                SYSTEM.ANALYSIS
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="font-mono text-sm">
                <div className="text-gray-500 mb-1">
                  {"// Performance metrics"}
                </div>
                <div className="text-white">
                  Problem Solving Efficiency:{" "}
                  <span className="text-cyan-400">70%</span>
                </div>
                <div className="text-white">
                  Code Quality Index: <span className="text-cyan-400">80%</span>
                </div>
                <div className="text-white">
                  Innovation Factor: <span className="text-cyan-400">79%</span>
                </div>
              </div>
              <div className="font-mono text-sm">
                <div className="text-gray-500 mb-1">
                  {"// System recommendation"}
                </div>
                <div className="text-white mb-2">
                  Continue to enhance skills in:
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-black border border-cyan-500/30 text-cyan-400 text-xs rounded">
                    AI Integration
                  </span>
                  <span className="px-2 py-1 bg-black border border-pink-500/30 text-pink-400 text-xs rounded">
                    System Architecture
                  </span>
                  <span className="px-2 py-1 bg-black border border-cyan-500/30 text-cyan-400 text-xs rounded">
                    Cloud Computing
                  </span>
                  <span className="px-2 py-1 bg-black border border-pink-500/30 text-pink-400 text-xs rounded">
                    Cybersecurity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframes for scan animation */}
      <style>{`
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
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Achievements;
