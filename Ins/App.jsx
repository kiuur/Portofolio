import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const pages = {
    home: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <div className="text-4xl md:text-6xl font-bold space-y-2">
          <h1>Hi! My name is</h1>
          <h1 className="text-zinc-400">INS</h1>
        </div>
        <p className="text-xl text-zinc-400">Learn JavaScript</p>
        <motion.img 
          src="https://avatars.githubusercontent.com/u/153608709?v=4"
          alt="Profile"
          className="w-64 h-64 rounded-lg shadow-xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    ),
    about: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8 max-w-2xl"
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-lg text-zinc-300 leading-relaxed">
          Hello! My name is INS. I'm a beginner currently learning JavaScript, based in South Sulawesi, Indonesia. As a beginner, I'm interested in JavaScript because of its simplicity and its potential for creating engaging user experiences. I enjoy learning and exploring ways to build interfaces that are simple yet beautiful.
        </p>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">My Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-800 p-4 rounded-lg">JavaScript</div>
            <div className="bg-zinc-800 p-4 rounded-lg">HTML/CSS</div>
          </div>
        </div>
      </motion.div>
    ),
    works: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold">Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p className="text-zinc-400">Coming soon...</p>
          </div>
        </div>
      </motion.div>
    ),
    contact: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold">Contact</h2>
        <div className="space-y-4">
          <a href="mailto:harzharisa@gmail.com" className="flex items-center space-x-3 text-lg hover:text-zinc-400">
            <MdEmail className="text-2xl" />
            <span>harzharisa@gmail.com</span>
          </a>
          <a href="https://wa.me/6289652162xx" className="flex items-center space-x-3 text-lg hover:text-zinc-400">
            <FaWhatsapp className="text-2xl" />
            <span>+62 896-5216-2xx</span>
          </a>
          <a href="https://github.com/INsITdeveloper" className="flex items-center space-x-3 text-lg hover:text-zinc-400">
            <FaGithub className="text-2xl" />
            <span>github.com/INsITdeveloper</span>
          </a>
          <a href="https://www.instagram.com/insinfixity" className="flex items-center space-x-3 text-lg hover:text-zinc-400">
            <FaInstagram className="text-2xl" />
            <span>instagram.com/insinfixity</span>
          </a>
        </div>
      </motion.div>
    )
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <div className="container mx-auto px-6 py-12">
        <nav className="flex justify-end mb-12">
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-2">
            {['Home', 'About', 'Works', 'Contact'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page.toLowerCase())}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === page.toLowerCase()
                    ? 'bg-zinc-700 text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </nav>

        <main className="mt-12">
          {pages[currentPage]}
        </main>
      </div>
    </div>
  );
}

export default App;
