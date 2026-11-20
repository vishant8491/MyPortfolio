import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaDocker, FaAws,
  FaPython, FaDatabase, FaServer, FaRobot, FaBrain, FaLink, FaGoogle
} from 'react-icons/fa';
import {
  SiCplusplus, SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss,
  SiExpress, SiSpringboot, SiHibernate, SiApachekafka, SiSocketdotio,
  SiJsonwebtokens, SiMysql, SiPostgresql, SiMongodb, SiRedis,
  SiGithubactions, SiPostman, SiVercel
} from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "JavaScript", icon: <TbBrandJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "Python", icon: <FaPython className="text-yellow-300" /> },
      { name: "SQL", icon: <FaDatabase className="text-sky-400" /> },
    ]
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ]
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-100" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" /> },
      { name: "Hibernate", icon: <SiHibernate className="text-amber-600" /> },
      { name: "REST APIs", icon: <FaServer className="text-gray-300" /> },
      { name: "Kafka", icon: <SiApachekafka className="text-gray-100" /> },
      { name: "Socket.IO", icon: <SiSocketdotio className="text-white" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-pink-400" /> },
    ]
  },
  {
    title: "Databases & Caching",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-sky-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "Pinecone", icon: <FaDatabase className="text-teal-400" /> },
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-blue-300" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ]
  },
  {
    title: "AI & Generative AI",
    skills: [
      { name: "Generative AI", icon: <FaBrain className="text-pink-400" /> },
      { name: "RAG", icon: <FaRobot className="text-purple-400" /> },
      { name: "LangChain", icon: <FaLink className="text-green-400" /> },
      { name: "OpenAI API", icon: <FaRobot className="text-emerald-400" /> },
      { name: "Gemini API", icon: <FaGoogle className="text-blue-400" /> },
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
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