'use client';

import React, { useState, Suspense, lazy, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaEnvelope, FaBolt, FaWordpress, FaPalette, FaChartBar } from 'react-icons/fa';
import ContactForm from './components/ContactForm';

// Lazy loading des composants lourds
const ProjectCardVertical = lazy(() => Promise.resolve({ default: ProjectCardVerticalComponent }));
const SkillCard = lazy(() => Promise.resolve({ default: SkillCardComponent }));

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [isContactFormOpen, setContactFormOpen] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);

  const openContactForm = () => {
    setContactFormOpen(true);
    setHeaderVisible(false);
  };

  const closeContactForm = () => {
    setContactFormOpen(false);
    setHeaderVisible(true);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Me', href: '#hero' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  // Smooth scroll handler
  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-slate-50'} ${isDark ? 'text-slate-100' : 'text-slate-900'} overflow-x-hidden relative transition-colors duration-500`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <AnimatePresence>
        {isContactFormOpen && <ContactForm isDark={isDark} onClose={closeContactForm} />}
      </AnimatePresence>
      {/* Enhanced Background with Colors */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.12),transparent_70%)]' : 'bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.12),transparent_70%)]'}`} />
        
        {/* Colored floating orbs */}
        <div 
          className={`absolute top-0 left-1/4 w-96 h-96 ${isDark ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/15' : 'bg-gradient-to-br from-purple-400/15 to-blue-400/10'} rounded-full blur-3xl`}
          style={{ animation: 'float 20s ease-in-out infinite' }}
        />
        <div 
          className={`absolute bottom-0 right-1/4 w-96 h-96 ${isDark ? 'bg-gradient-to-br from-emerald-500/15 to-teal-500/20' : 'bg-gradient-to-br from-emerald-400/10 to-teal-400/15'} rounded-full blur-3xl`}
          style={{ animation: 'float 25s ease-in-out infinite reverse' }}
        />
        <div 
          className={`absolute top-1/2 right-1/3 w-80 h-80 ${isDark ? 'bg-gradient-to-br from-pink-500/15 to-rose-500/10' : 'bg-gradient-to-br from-pink-400/10 to-rose-400/8'} rounded-full blur-3xl`}
          style={{ animation: 'float 30s ease-in-out infinite' }}
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
      `}</style>

      {/* Enhanced Navigation with Glassmorphism */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: isHeaderVisible ? 1 : 0, y: isHeaderVisible ? 0 : -100 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <motion.div 
          whileHover={{ 
            scale: 1.01,
            boxShadow: isDark ? '0 20px 50px rgba(139, 92, 246, 0.2), 0 10px 30px rgba(59, 130, 246, 0.15)' : '0 20px 50px rgba(139, 92, 246, 0.15), 0 10px 30px rgba(59, 130, 246, 0.1)'
          }}
          className={`backdrop-blur-2xl ${isDark ? 'bg-slate-800/30 border-slate-700/50' : 'bg-white/30 border-slate-200/50'} border rounded-full px-10 sm:px-12 md:px-16 py-4 shadow-xl ${isDark ? 'shadow-purple-500/10' : 'shadow-slate-900/10'} relative overflow-hidden transition-all duration-500`}
        >
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-purple-500/8 via-blue-500/4 to-purple-500/8' : 'bg-gradient-to-r from-purple-400/6 via-blue-400/3 to-purple-400/6'}`} />
          <div className="flex gap-4 sm:gap-6 md:gap-8 items-center relative z-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-200 hover:text-purple-300' : 'text-slate-900 hover:text-purple-600'} transition-colors relative whitespace-nowrap`}
                style={{ letterSpacing: '-0.01em' }}
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* Enhanced Dark Mode Toggle with Glassmorphism */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.15, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-1 p-1.5 rounded-full backdrop-blur-xl ${isDark ? 'bg-gradient-to-br from-amber-400/20 to-yellow-400/30 hover:from-amber-400/30 hover:to-yellow-400/40 border border-amber-400/30' : 'bg-gradient-to-br from-indigo-400/20 to-purple-400/30 hover:from-indigo-400/30 hover:to-purple-400/40 border border-indigo-400/30'} transition-all duration-500 shadow-lg ${isDark ? 'shadow-amber-400/20' : 'shadow-indigo-400/20'}`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="h-screen flex items-end justify-start p-4 md:p-16 pb-21 md:pb-6 lg:pb-8 relative">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-transparent via-purple-900/5 to-transparent' : 'bg-gradient-to-b from-transparent via-purple-100/30 to-transparent'}`} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-left max-w-6xl relative z-10"
        >
          {/* Enhanced Badge with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`inline-flex items-center gap-2 backdrop-blur-2xl ${isDark ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400/30' : 'bg-gradient-to-r from-emerald-400/20 to-teal-400/20 border-emerald-400/40'} border rounded-full px-5 py-2 mb-8 shadow-xl ${isDark ? 'shadow-emerald-500/20' : 'shadow-emerald-400/20'} transition-all duration-500`}
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full shadow-lg shadow-emerald-400/50"
            />
            <span className={`text-sm font-medium ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>Available for new projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-3 sm:mb-6 tracking-tighter"
          >
            <span className={`${isDark ? 'bg-gradient-to-r from-slate-100 via-purple-200 to-blue-200' : 'bg-gradient-to-r from-slate-900 via-purple-800 to-blue-900'} bg-clip-text text-transparent`}>
              Anes L
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className={`text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4 font-light ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
          >
            <span className={`${isDark ? 'text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text' : 'text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text'}`}>
              Passionate Developer
            </span> & Digital Experience Architect
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className={`text-xs sm:text-sm md:text-base mb-6 sm:mb-8 lg:mb-12 max-w-3xl ${isDark ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}
          >
            Beyond the code, I design experiences. My mission is to build digital spaces where elegance meets function, transforming simple visits into memorable, engaging experiences that truly captivate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-row gap-4 justify-start items-start"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: isDark ? '0 20px 50px rgba(139, 92, 246, 0.3)' : '0 20px 50px rgba(139, 92, 246, 0.2)' }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => handleScroll(e, '#projects')}
              className={`px-8 py-4 backdrop-blur-xl select-none ${isDark ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-400/40 text-purple-200 hover:from-purple-500/30 hover:to-blue-500/30' : 'bg-gradient-to-r from-purple-400/20 to-blue-400/20 border-purple-400/50 text-purple-700 hover:from-purple-400/30 hover:to-blue-400/30'} border rounded-full font-semibold transition-all duration-300 shadow-lg ${isDark ? 'shadow-purple-500/20' : 'shadow-purple-400/20'}`}
            >
              View My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: isDark ? '0 20px 60px rgba(168, 85, 247, 0.4)' : '0 20px 60px rgba(147, 51, 234, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => handleScroll(e, '#contact')}
              className={`px-8 py-4 select-none ${isDark ? 'bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 text-white' : 'bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white'} rounded-full font-semibold shadow-2xl ${isDark ? 'shadow-purple-500/30' : 'shadow-purple-600/30'} relative overflow-hidden group transition-all duration-500`}
            >
              <span className="relative z-10">Contact Me</span>
              <motion.div
                className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500' : 'bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600'}`}
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Work" isDark={isDark}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <Suspense fallback={<LoadingCard isDark={isDark} />}>
            <ProjectCardVertical
              delay={0.4}
              title="YouThink Club Website"
              description="Corporate website for the YouThink student club in Tlemcen. Built with WordPress and Divi, it features responsive design, custom animations, dynamic content loading, and an intuitive user interface. Optimized for performance and seamless browsing across devices."
              tags={['WordPress', 'Divi', 'PHP', 'UI/UX']}
              isMobile={false}
              isDark={isDark}
            />
          </Suspense>

          <Suspense fallback={<LoadingCard isDark={isDark} />}>
            <ProjectCardVertical
              delay={0.2}
              title="React Delivery App"
              description="Progressive Web App for managing food deliveries to stores and small businesses. Built with React and Firebase, it features real-time order tracking, product management, invoice generation in PDF, and a seamless mobile-first experience for both clients and admins. Optimized for speed, responsiveness, and smooth interactions."
              tags={['React', 'PWA', 'Firebase', 'Mobile-First']}
              isMobile={true}
              isDark={isDark}
            />
          </Suspense>
        </div>
      </Section>

      {/* Enhanced Skills Section */}
      <Section id="skills" title="Skills" isDark={isDark}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`backdrop-blur-2xl ${isDark ? 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/60' : 'bg-gradient-to-br from-white/40 to-slate-50/40 border-slate-200/60'} border rounded-3xl p-8 lg:p-12 shadow-2xl transition-all duration-500 relative overflow-hidden`}>
            {/* Colored glow effect */}
            <div className={`absolute -top-20 -right-20 w-60 h-60 ${isDark ? 'bg-purple-500/20' : 'bg-purple-400/15'} rounded-full blur-3xl`} />
            <div className={`absolute -bottom-20 -left-20 w-60 h-60 ${isDark ? 'bg-blue-500/20' : 'bg-blue-400/15'} rounded-full blur-3xl`} />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              <Suspense fallback={<LoadingSkill isDark={isDark} />}>
                {[
                  { name: 'Frontend Dev', icon: <FaBolt />, color: 'from-yellow-400 to-orange-400' },
                  { name: 'WordPress', icon: <FaWordpress />, color: 'from-blue-500 to-sky-500' },
                  { name: 'UI/UX Design', icon: <FaPalette />, color: 'from-purple-500 to-indigo-500' },
                  { name: 'Marketing', icon: <FaChartBar />, color: 'from-pink-500 to-rose-500' }
                ].map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} delay={i * 0.1} isDark={isDark} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </Section>

      {/* Enhanced Contact Section */}
      <Section id="contact" title="Let's Work" isDark={isDark}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedCard delay={0.2}>
            <div className={`backdrop-blur-2xl ${isDark ? 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/60' : 'bg-gradient-to-br from-white/40 to-slate-50/40 border-slate-200/60'} border rounded-3xl p-12 shadow-2xl transition-all duration-500 relative overflow-hidden`}>
              {/* Colored orbs */}
              <div className={`absolute top-0 right-0 w-40 h-40 ${isDark ? 'bg-gradient-to-br from-purple-500/30 to-transparent' : 'bg-gradient-to-br from-purple-400/20 to-transparent'} rounded-full blur-2xl`} />
              <div className={`absolute bottom-0 left-0 w-40 h-40 ${isDark ? 'bg-gradient-to-br from-blue-500/30 to-transparent' : 'bg-gradient-to-br from-blue-400/20 to-transparent'} rounded-full blur-2xl`} />
              
              <p className={`text-xl ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-8 leading-relaxed relative z-10`}>
                Have a project in mind? Let's create something amazing together.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: isDark ? '0 20px 60px rgba(168, 85, 247, 0.4)' : '0 20px 60px rgba(147, 51, 234, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                onClick={openContactForm}
                className={`px-10 py-5 select-none ${isDark ? 'bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 text-white' : 'bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white'} rounded-full font-bold text-lg shadow-2xl ${isDark ? 'shadow-purple-500/30' : 'shadow-purple-600/30'} mb-10 relative overflow-hidden group transition-all duration-500 z-10`}
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500' : 'bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600'}`}
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <div className="flex gap-6 justify-center relative z-10">
                {[
                  { icon: <FaWhatsapp />, label: 'WhatsApp', href: 'https://wa.me/+213658733860', color: isDark ? 'from-green-500/20 to-emerald-500/20' : 'from-green-400/20 to-emerald-400/20', hoverColor: isDark ? 'hover:border-green-400/50 hover:text-green-300 hover:shadow-green-500/30' : 'hover:border-green-400/50 hover:text-green-600 hover:shadow-green-400/30' },
                  { icon: <FaLinkedinIn />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aneslachachi/', color: isDark ? 'from-blue-600/20 to-indigo-600/20' : 'from-blue-500/20 to-indigo-500/20', hoverColor: isDark ? 'hover:border-blue-400/50 hover:text-blue-300 hover:shadow-blue-500/30' : 'hover:border-blue-400/50 hover:text-blue-600 hover:shadow-blue-400/30' },
                  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/anes-l', color: isDark ? 'from-slate-500/20 to-gray-500/20' : 'from-slate-400/20 to-gray-400/20', hoverColor: isDark ? 'hover:border-slate-400/50 hover:text-slate-100 hover:shadow-slate-500/30' : 'hover:border-slate-600/50 hover:text-slate-900 hover:shadow-slate-400/30' },
                  { icon: <FaEnvelope />, label: 'Email', href: 'mailto:aneslachachi@icloud.com', color: isDark ? 'from-red-500/20 to-rose-500/20' : 'from-red-400/20 to-rose-400/20', hoverColor: isDark ? 'hover:border-red-400/50 hover:text-red-300 hover:shadow-red-500/30' : 'hover:border-red-400/50 hover:text-red-600 hover:shadow-red-400/30' }
                ].map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 backdrop-blur-2xl bg-gradient-to-br ${social.color} ${isDark ? 'border-slate-700/50 text-slate-300' : 'border-slate-200/50 text-slate-700'} border rounded-full flex items-center justify-center text-xl transition-all shadow-lg ${social.hoverColor}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </Section>

      {/* Enhanced Footer */}
      <footer className="py-16 text-center relative z-10">
        <div className={`backdrop-blur-2xl ${isDark ? 'bg-gradient-to-r from-slate-800/40 to-slate-900/40 border-slate-700/60' : 'bg-gradient-to-r from-white/40 to-slate-50/40 border-slate-200/60'} border rounded-full px-8 py-4 inline-block shadow-lg transition-all duration-500`}>
          <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-sm`}>
            © 2025 Anes Lachachi • Designed & Developed with 🖤
          </p>
        </div>
      </footer>
    </div>
  );
};

// Loading Skeletons
const LoadingCard = ({ isDark }) => (
  <div className={`backdrop-blur-2xl ${isDark ? 'bg-slate-800/30 border-slate-700/50' : 'bg-white/30 border-slate-200/50'} border rounded-3xl p-8 lg:p-12 shadow-xl animate-pulse`}>
    <div className={`h-64 ${isDark ? 'bg-slate-700/50' : 'bg-slate-200/50'} rounded-xl`} />
  </div>
);

const LoadingSkill = ({ isDark }) => (
  <div className={`backdrop-blur-2xl ${isDark ? 'bg-slate-800/30 border-slate-700/50' : 'bg-white/30 border-slate-200/50'} border rounded-2xl p-6 animate-pulse`}>
    <div className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'bg-slate-700/50' : 'bg-slate-200/50'} rounded-xl`} />
    <div className={`h-4 ${isDark ? 'bg-slate-700/50' : 'bg-slate-200/50'} rounded`} />
  </div>
);

const Section = ({ id, title, children, isDark }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id={id} ref={ref} className="py-20 lg:py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-center mb-16">
          <div className={`inline-block backdrop-blur-2xl ${isDark ? 'bg-gradient-to-r from-slate-800/40 to-slate-900/40 border-slate-700/60' : 'bg-gradient-to-r from-white/40 to-slate-50/40 border-slate-200/60'} border rounded-full px-8 py-6 shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] relative overflow-hidden`}>
            {/* Glow effect on hover */}
            <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0' : 'bg-gradient-to-r from-purple-400/0 via-purple-400/8 to-purple-400/0'} opacity-0 hover:opacity-100 transition-opacity duration-500`} />
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black ${isDark ? 'bg-gradient-to-r from-slate-100 via-purple-200 to-blue-200' : 'bg-gradient-to-r from-slate-900 via-purple-700 to-blue-800'} bg-clip-text text-transparent tracking-tight relative z-10`}>
              {title}
            </h2>
          </div>
        </div>
        {children}
      </motion.div>
    </section>
  );
};

const AnimatedCard = ({ children, delay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCardVerticalComponent = ({ title, description, tags, delay, isMobile, isDark }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Slideshow logic for the PWA project
  const pwaImages = ['/img/bse1.png', '/img/bse2.png', '/img/bse3.png', '/img/bse4.png', '/img/bse5.png', '/img/bse6.png', '/img/bse7.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (title === "React Delivery App") {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pwaImages.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [title, pwaImages.length]);

  // Video playback logic
  const videoRef = React.useRef(null);
  const isVideoInView = useInView(videoRef, { margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className={`absolute -inset-0.5 ${isDark ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gradient-to-r from-purple-500 to-blue-500'} rounded-3xl blur opacity-20 transition duration-500`} />
      <div className={`relative backdrop-blur-2xl ${isDark ? 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/60' : 'bg-gradient-to-br from-white/40 to-slate-50/40 border-slate-200/60'} border rounded-3xl p-8 lg:p-12 shadow-xl overflow-hidden transition-all duration-500`}>
        <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-br from-purple-500/10 to-transparent' : 'bg-gradient-to-br from-purple-400/8 to-transparent'}`} />
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <motion.div
            transition={{ duration: 0.3 }}
            className="order-2 lg:order-1"
          >
            {isMobile ? (
              <div className="relative mx-auto w-72 h-[580px]">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-full h-full"
                >
                  <div className={`absolute inset-0 backdrop-blur-xl ${isDark ? 'bg-gradient-to-br from-slate-700/80 to-slate-800/80 border-slate-600' : 'bg-gradient-to-br from-slate-100/80 to-white/80 border-slate-300'} rounded-[3rem] border-8 shadow-2xl overflow-hidden transition-all duration-500`}>
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 ${isDark ? 'bg-slate-800' : 'bg-white'} rounded-b-3xl z-10`} />
                    <div className={`absolute inset-4 rounded-[2rem] overflow-hidden`}>
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          src={pwaImages[currentImageIndex]}
                          alt={`${title} screenshot ${currentImageIndex + 1}`}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : (
              <div className="relative w-full max-w-4xl mx-auto">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className={`backdrop-blur-xl ${isDark ? 'bg-gradient-to-br from-slate-700/80 to-slate-800/80 border-slate-600' : 'bg-gradient-to-br from-slate-100/80 to-white/80 border-slate-300'} rounded-2xl border shadow-2xl overflow-hidden transition-all duration-500`}>
                    <div className={`${isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white/80 border-slate-300'} border-b p-4 flex items-center gap-2`}>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400 shadow-lg shadow-red-400/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50" />
                        <div className="w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
                      </div>
                      <div className={`flex-1 mx-4 h-7 ${isDark ? 'bg-slate-700/50' : 'bg-slate-100/50'} rounded-md`} />
                    </div>
                    
                    <div className={`aspect-video ${isDark ? 'bg-gradient-to-br from-purple-500/8 to-blue-500/10' : 'bg-gradient-to-br from-purple-400/8 to-blue-400/10'} relative overflow-hidden`}>
                      <video
                        ref={videoRef}
                        src="/img/youthink.mp4"
                        loop
                        muted
                        playsInline
                        autoPlay
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: delay + 0.2, duration: 0.8 }}
            >
              <h3 className={`text-2xl lg:text-3xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'} mb-4`}>{title}</h3>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} mb-6 leading-relaxed`}>{description}</p>
              
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className={`px-3 py-1 backdrop-blur-xl ${isDark ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-400/30 text-purple-300' : 'bg-gradient-to-r from-purple-400/20 to-blue-400/20 border-purple-400/40 text-purple-700'} border rounded-full text-xs font-medium transition-all duration-300 hover:scale-105`}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillCardComponent = ({ skill, delay, isDark }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.05 }}
      className={`backdrop-blur-2xl ${isDark ? 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/60' : 'bg-gradient-to-br from-white/40 to-slate-50/40 border-slate-200/60'} border rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <motion.div
        whileHover={{ rotate: 10, scale: 1.1 }}
        className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-3xl shadow-lg relative z-10`}
      >
        {skill.icon}
      </motion.div>
      <p className={`text-sm font-semibold ${isDark ? 'text-slate-100 group-hover:text-purple-300' : 'text-slate-900 group-hover:text-purple-600'} transition-colors relative z-10`}>
        {skill.name}
      </p>
    </motion.div>
  );
};

export default Portfolio;