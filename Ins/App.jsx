import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen p-8 md:p-16 lg:p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto space-y-12"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img 
            src="https://avatars.githubusercontent.com/u/153608709?v=4"
            alt="INS"
            className="w-48 h-48 rounded-full shadow-xl border-4 border-zinc-700"
          />
        </motion.div>

        {/* Header */}
        <header className="space-y-4 text-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Hello, I'm INS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg"
          >
            Full Stack Developer
          </motion.p>
        </header>

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert"
        >
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-zinc-300">
            I'm a passionate developer who loves creating beautiful and functional web applications.
            With experience in both frontend and backend development, I enjoy turning complex problems
            into simple, beautiful, and intuitive solutions.
          </p>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['React', 'Node.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Next.js'].map((tech) => (
              <div 
                key={tech}
                className="bg-zinc-800 p-4 rounded-lg text-center hover:bg-zinc-700 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Social Links */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-zinc-400 transition-colors">
            <FaGithub />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-zinc-400 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-zinc-400 transition-colors">
            <FaLinkedin />
          </a>
        </motion.section>
      </motion.div>
    </div>
  );
}

export default App;
