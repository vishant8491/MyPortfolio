import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const projects = [
  {
    title: "SEON",
    featured: true,
    description:
      "Real-time collaborative IDE with AI code generation, live code execution and team collaboration, supporting 15+ concurrent users.",
    tech: ["React", "Node.js", "Socket.IO", "Redis", "Gemini API"],
    github: "https://github.com/vishant8491/SEON.git",
    live: "https://seon-pi.vercel.app/",
    gradient: "from-purple-500 to-pink-500",
    border: "border-purple-500/40",
    glow: "hover:shadow-purple-500/30",
    chip: "bg-purple-500/10 text-purple-300 border border-purple-500/30",
  },
  {
    title: "HeritageAlly",
    featured: true,
    description:
      "Full-stack e-commerce platform with JWT authentication, Razorpay payments, admin dashboard and email notifications.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Razorpay"],
    github: "https://github.com/vishant8491/HeritageAlly.git",
    live: "https://heritageally-gahe.onrender.com",
    gradient: "from-cyan-400 to-blue-500",
    border: "border-cyan-500/40",
    glow: "hover:shadow-cyan-500/30",
    chip: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30",
  },
  {
    title: "ResearchMind",
    featured: true,
    description:
      "AI-powered research assistant that helps you search, understand and summarize information faster.",
    tech: ["React", "Node.js", "LangChain", "Gemini API"],
    github: "https://github.com/vishant8491/ResearchMind.git",
    live: "https://github.com/vishant8491/ResearchMind.git",
    gradient: "from-emerald-400 to-teal-500",
    border: "border-emerald-500/40",
    glow: "hover:shadow-emerald-500/30",
    chip: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30",
  },
  {
    title: "AI Video Assistant",
    featured: true,
    description:
      "AI assistant that understands video content and answers questions or generates summaries from it.",
    tech: ["React", "Node.js", "RAG", "Gemini API"],
    github: "https://github.com/vishant8491/AI-Video-Assistant.git",
    live: "https://github.com/vishant8491/AI-Video-Assistant.git",
    gradient: "from-orange-400 to-rose-500",
    border: "border-orange-500/40",
    glow: "hover:shadow-orange-500/30",
    chip: "bg-orange-500/10 text-orange-300 border border-orange-500/30",
  },
  {
    title: "Kawach",
    description:
      "Secure document-sharing app using MERN stack, Cloudinary and QR code encryption.",
    tech: ["React", "Node.js", "MongoDB", "Cloudinary", "QR Code"],
    github: "https://github.com/iamvtyagi/kawach.git",
    live: "https://kawach-git-main-sujal862s-projects.vercel.app/",
    gradient: "from-indigo-400 to-violet-500",
    border: "border-gray-700",
    glow: "hover:shadow-indigo-500/20",
    chip: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/30",
  },
  {
    title: "Khatabook",
    description: "Khatabook app using Node.js, Express.js and Tailwind CSS.",
    tech: ["Node.js", "Express.js", "Tailwind CSS"],
    github: "https://github.com/vishant8491/khatabook.git",
    live: "https://khatabook-bq4s.onrender.com",
    gradient: "from-yellow-400 to-amber-500",
    border: "border-gray-700",
    glow: "hover:shadow-yellow-500/20",
    chip: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/30",
  },
  {
    title: "Password Generator",
    description:
      "Client-side secure password generator with customizable length, character sets and real-time strength indicator.",
    tech: ["React", "Crypto", "API"],
    github: "https://github.com/vishant8491/Password-Generator.git",
    live: "https://password-generator-brown-iota.vercel.app/",
    gradient: "from-sky-400 to-indigo-500",
    border: "border-gray-700",
    glow: "hover:shadow-sky-500/20",
    chip: "bg-sky-500/10 text-sky-300 border border-sky-500/30",
  },
  {
    title: "Sidcup Family Golf",
    description: "Golf booking website using HTML, CSS, JavaScript and GSAP.",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/vishant8491/mini-project.git",
    live: "https://mini-project-ten-gamma.vercel.app/",
    gradient: "from-lime-400 to-green-500",
    border: "border-gray-700",
    glow: "hover:shadow-lime-500/20",
    chip: "bg-lime-500/10 text-lime-300 border border-lime-500/30",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative bg-gray-900 rounded-xl overflow-hidden border ${project.border} hover:scale-105 hover:shadow-xl ${project.glow} transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Colored top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

              {/* Featured badge */}
              {project.featured && (
                <span
                  className={`absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                >
                  <FaStar /> Featured
                </span>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 pr-24">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 text-sm rounded ${project.chip}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>
                      {project.live === project.github ? "View Repo" : "Live Demo"}
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;