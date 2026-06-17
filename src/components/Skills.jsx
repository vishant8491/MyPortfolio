import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus  , SiC } from "react-icons/si";
import { SiMongodb, SiRedis, SiSocketdotio, SiVercel, SiRender, SiWebrtc, SiTailwindcss, SiExpress } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <TbBrandJavascript className="text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "C", icon: <SiC className="text-blue-500" /> },
    ]
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ]
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-100" /> },
    ]
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Render", icon: <SiRender className="text-blue-400" /> },
      // { name: "Visual Studio Code", icon: <SiVisualstudiocode className="text-blue-500 text-2xl" /> },
    ]
  },
  {
    title: "Real-Time Technologies",
    skills: [
      { name: "WebRTC", icon: <SiWebrtc className="text-blue-500" /> },
      { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
