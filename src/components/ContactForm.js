import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = ({ isDark, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await emailjs.send(
        'service_3gtjo4n',     // À remplacer
        'template_h1w9daf',    // À remplacer
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Anes',
        },
        '814bDGDC4CwvgY3_Y'      // À remplacer
      );
      
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2500);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Oops! Something went wrong. Please try again or contact me directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isDark ? 'bg-black/60' : 'bg-slate-900/40'}`}
      style={{ backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          opacity: { duration: 0.2 }
        }}
        className={`relative w-full max-w-xl backdrop-blur-2xl ${isDark ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50' : 'bg-gradient-to-br from-white/90 to-slate-50/90 border-slate-200/50'} border rounded-3xl shadow-2xl overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative gradient orbs */}
        <div className={`absolute -top-20 -right-20 w-60 h-60 ${isDark ? 'bg-purple-500/20' : 'bg-purple-400/15'} rounded-full blur-3xl`} />
        <div className={`absolute -bottom-20 -left-20 w-60 h-60 ${isDark ? 'bg-blue-500/20' : 'bg-blue-400/15'} rounded-full blur-3xl`} />

        {/* Close button */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute top-6 right-6 z-20 p-2 rounded-full backdrop-blur-xl ${isDark ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white' : 'bg-white/50 text-slate-600 hover:bg-white/70 hover:text-slate-900'} transition-all duration-200 border ${isDark ? 'border-slate-600/50' : 'border-slate-200/50'}`}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </motion.button>

        <div className="relative z-10 p-8 md:p-10">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-8"
              >
                <h2 className={`text-3xl md:text-4xl font-black mb-3 ${isDark ? 'bg-gradient-to-r from-slate-100 via-purple-200 to-blue-200' : 'bg-gradient-to-r from-slate-900 via-purple-700 to-blue-800'} bg-clip-text text-transparent`}>
                  Let's Connect
                </h2>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Tell me about your project and let's create something amazing together
                </p>
              </motion.div>

              {/* Form */}
              <div className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label htmlFor="name" className={`block mb-2 text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl backdrop-blur-xl ${isDark ? 'bg-slate-700/50 text-white placeholder-slate-400 border-slate-600/50 focus:border-purple-500/50' : 'bg-white/50 text-slate-900 placeholder-slate-500 border-slate-300/50 focus:border-purple-500/50'} border-2 focus:ring-4 ${isDark ? 'focus:ring-purple-500/20' : 'focus:ring-purple-400/20'} outline-none transition-all duration-200`}
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className={`block mb-2 text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl backdrop-blur-xl ${isDark ? 'bg-slate-700/50 text-white placeholder-slate-400 border-slate-600/50 focus:border-purple-500/50' : 'bg-white/50 text-slate-900 placeholder-slate-500 border-slate-300/50 focus:border-purple-500/50'} border-2 focus:ring-4 ${isDark ? 'focus:ring-purple-500/20' : 'focus:ring-purple-400/20'} outline-none transition-all duration-200`}
                    placeholder="john@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <label htmlFor="message" className={`block mb-2 text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 rounded-xl backdrop-blur-xl ${isDark ? 'bg-slate-700/50 text-white placeholder-slate-400 border-slate-600/50 focus:border-purple-500/50' : 'bg-white/50 text-slate-900 placeholder-slate-500 border-slate-300/50 focus:border-purple-500/50'} border-2 focus:ring-4 ${isDark ? 'focus:ring-purple-500/20' : 'focus:ring-purple-400/20'} outline-none transition-all duration-200 resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-8 py-4 ${isDark ? 'bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500' : 'bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600'} text-white rounded-xl font-bold shadow-xl ${isDark ? 'shadow-purple-500/30' : 'shadow-purple-600/30'} relative overflow-hidden group transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <span className="relative z-10">Send Message</span>
                    <Send className="w-5 h-5 relative z-10" />
                    <motion.div
                      className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500' : 'bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600'}`}
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>
              </div>
            </>
          ) : (
            // Success state
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${isDark ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20' : 'bg-gradient-to-br from-emerald-400/20 to-teal-400/20'} mb-6`}
              >
                <CheckCircle className={`w-12 h-12 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-2xl font-bold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}
              >
                Message Sent!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}
              >
                Thank you for reaching out. I'll get back to you soon!
              </motion.p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;