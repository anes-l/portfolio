import React from 'react';
import { motion } from 'framer-motion';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { 
    y: "0",
    opacity: 1,
    transition: { delay: 0.2, duration: 0.5, type: "spring", stiffness: 120 }
  },
};

const formElement = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const ContactForm = ({ isDark, onClose }) => {
  return (
    <motion.div
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl ${isDark ? 'bg-black/50' : 'bg-white/50'}`}
      onClick={onClose}
    >
      <motion.div
        variants={modal}
        className={`relative w-full max-w-lg mx-4 p-8 rounded-3xl shadow-2xl ${isDark ? 'bg-slate-800/40 border-slate-700/60' : 'bg-white/40 border-slate-200/60'} border`}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.h2 variants={formElement} className={`text-3xl font-bold text-center mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Contact Me</motion.h2>
        <motion.form
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div variants={formElement} className="mb-4">
            <label htmlFor="name" className={`block mb-2 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Name</label>
            <input type="text" id="name" name="name" className={`w-full p-3 rounded-lg ${isDark ? 'bg-slate-700/50 text-white' : 'bg-white/50 text-slate-900'} border ${isDark ? 'border-slate-600' : 'border-slate-300'} focus:ring-2 ${isDark ? 'focus:ring-purple-500' : 'focus:ring-purple-600'} outline-none transition`} />
          </motion.div>
          <motion.div variants={formElement} className="mb-4">
            <label htmlFor="email" className={`block mb-2 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Email</label>
            <input type="email" id="email" name="email" className={`w-full p-3 rounded-lg ${isDark ? 'bg-slate-700/50 text-white' : 'bg-white/50 text-slate-900'} border ${isDark ? 'border-slate-600' : 'border-slate-300'} focus:ring-2 ${isDark ? 'focus:ring-purple-500' : 'focus:ring-purple-600'} outline-none transition`} />
          </motion.div>
          <motion.div variants={formElement} className="mb-6">
            <label htmlFor="message" className={`block mb-2 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Message</label>
            <textarea id="message" name="message" rows="4" className={`w-full p-3 rounded-lg ${isDark ? 'bg-slate-700/50 text-white' : 'bg-white/50 text-slate-900'} border ${isDark ? 'border-slate-600' : 'border-slate-300'} focus:ring-2 ${isDark ? 'focus:ring-purple-500' : 'focus:ring-purple-600'} outline-none transition`}></textarea>
          </motion.div>
          <motion.div variants={formElement}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className={`w-full px-8 py-4 ${isDark ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'} rounded-full font-semibold shadow-lg ${isDark ? 'shadow-purple-500/30' : 'shadow-purple-600/30'} transition-all duration-300`}
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
        <motion.button
          variants={formElement}
          onClick={onClose}
          whileHover={{ scale: 1.2, rotate: 90 }}
          className={`absolute top-4 right-4 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'} transition`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
