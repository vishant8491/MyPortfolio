import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
          I am a final-year B.Tech student in Computer Science and Engineering at Shri Ram Group of Colleges, 
          Muzaffarnagar. Passionate about full-stack web development, secure system design, and solving real-world 
          problems through code. I enjoy building production-ready applications using the MERN stack and continuously 
          improving my problem-solving skills through competitive programming on LeetCode and GeeksforGeeks.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
