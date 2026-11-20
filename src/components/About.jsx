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
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I am a Full Stack Developer with a B.Tech in Computer Science from Shri Ram
            Group of Colleges, specializing in the MERN stack and Java. During a
            six-month internship at S O Infotech, I built a production billing system
            handling 50+ daily transactions, cutting manual invoice processing time by
            30%. Since then I have built HeritageAlly, an e-commerce platform with secure
            JWT authentication and Razorpay payments, and SEON, a real-time collaborative
            IDE with Gemini-powered AI assistance. I have solved 400+ DSA problems in
            Java, and I enjoy turning complex problems into clean, scalable products. I
            am currently looking for SDE roles where I can keep building and learning.
        </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
