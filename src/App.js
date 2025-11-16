'use client';

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Portfolio = () => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
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
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden relative" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Background - Using the old slate-950 as accent */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.12),transparent_70%)]" />
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-slate-900/15 to-slate-800/12 rounded-full blur-3xl"
          style={{ animation: 'float 20s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-slate-700/10 to-slate-900/15 rounded-full blur-3xl"
          style={{ animation: 'float 25s ease-in-out infinite reverse' }}
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
      `}</style>

      {/* Larger Glass Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4"
      >
        <motion.div 
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 25px 70px rgba(15, 23, 42, 0.15)' 
          }}
          className="backdrop-blur-2xl bg-white/40 border border-slate-200/50 rounded-full px-6 sm:px-8 md:px-12 py-4 shadow-2xl shadow-slate-900/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/8 via-slate-300/5 to-slate-900/8" />
          <div className="flex gap-4 sm:gap-6 md:gap-10 items-center relative z-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, color: '#0f172a' }}
                whileTap={{ scale: 0.95 }}
                className="text-sm sm:text-base font-semibold text-slate-700 hover:text-slate-900 transition-colors relative whitespace-nowrap"
                style={{ letterSpacing: '-0.01em' }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/3 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-6xl mx-auto relative z-10"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/40 border border-slate-200/50 rounded-full px-5 py-2 mb-8 shadow-xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-2 h-2 bg-gradient-to-r from-slate-900 to-slate-700 rounded-full"
            />
            <span className="text-sm font-medium text-slate-700">Available for freelance work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 tracking-tighter"
          >
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Anes L
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-xl sm:text-2xl md:text-3xl mb-4 font-light text-slate-700"
          >
            Web Developer & Digital Creator
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-sm sm:text-base md:text-lg mb-12 max-w-3xl mx-auto text-slate-600 leading-relaxed px-4"
          >
            Crafting pixel-perfect digital experiences with cutting-edge technologies. 
            Specialized in React, WordPress, and creating interfaces that users love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => handleScroll(e, '#projects')}
              className="px-8 py-4 backdrop-blur-xl bg-white/40 border border-slate-200/50 rounded-full font-semibold text-slate-700 hover:bg-white/60 transition-all"
            >
              View My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(15, 23, 42, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => handleScroll(e, '#contact')}
              className="px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-full font-semibold text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Me</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1.2 }}
            className="mt-20 relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative max-w-5xl mx-auto"
            >
              <div className="backdrop-blur-2xl bg-gradient-to-br from-white/40 to-slate-50/40 border border-slate-200/50 rounded-3xl p-8 shadow-2xl shadow-slate-900/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-slate-300/5" />
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  
                  <div className="backdrop-blur-xl bg-slate-100/50 rounded-xl p-6 font-mono text-sm text-left">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                      className="text-slate-700"
                    >
                      <span className="text-slate-900">const</span> developer = {'{'}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.7, duration: 0.5 }}
                      className="text-slate-700 pl-4"
                    >
                      name: <span className="text-slate-900">'Anes Lachachi'</span>,
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.9, duration: 0.5 }}
                      className="text-slate-700 pl-4"
                    >
                      skills: <span className="text-slate-800">['React', 'WordPress', 'UI/UX']</span>,
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.1, duration: 0.5 }}
                      className="text-slate-700 pl-4"
                    >
                      passion: <span className="text-yellow-600">∞</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.3, duration: 0.5 }}
                      className="text-slate-700"
                    >
                      {'}'};
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 -right-6 w-24 h-24 backdrop-blur-xl bg-slate-900/10 rounded-2xl border border-slate-200/50 shadow-xl"
                />
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-32 h-32 backdrop-blur-xl bg-slate-800/10 rounded-full border border-slate-200/50 shadow-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Section id="projects" title="Featured Work">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* PWA Project */}
          <ProjectCardVertical
            delay={0.2}
            title="React Delivery App"
            description="Progressive Web App for managing food deliveries to stores and small businesses. Built with React and Firebase, it features real-time order tracking, product management, invoice generation in PDF, and a seamless mobile-first experience for both clients and admins. Optimized for speed, responsiveness, and smooth interactions."
            tags={['React', 'PWA', 'Firebase', 'Mobile-First']}
            isMobile={true}
          />

          {/* WordPress Project */}
          <ProjectCardVertical
            delay={0.4}
            title="YouThink Club Website"
            description="Corporate website for the YouThink student club in Tlemcen. Built with WordPress and Divi, it features responsive design, custom animations, dynamic content loading, and an intuitive user interface. Optimized for performance and seamless browsing across devices."
            tags={['WordPress', 'Divi', 'PHP', 'UI/UX']}
            isMobile={false}
          />
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills & Technologies">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-2xl bg-white/30 border border-slate-200/50 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Frontend Dev', icon: '⚡', color: 'from-yellow-400 to-orange-400' },
                { name: 'WordPress', icon: '📝', color: 'from-slate-900 to-slate-700' },
                { name: 'UI/UX Design', icon: '🎨', color: 'from-slate-800 to-slate-900' },
                { name: 'Marketing', icon: '📊', color: 'from-slate-700 to-slate-900' }
              ].map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Let's Work Together">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedCard delay={0.2}>
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/40 to-slate-50/40 border border-slate-200/50 rounded-3xl p-12 shadow-2xl">
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                Have a project in mind? Let's create something amazing together.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(15, 23, 42, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-gradient-to-r from-slate-900 to-slate-800 rounded-full font-bold text-lg text-white shadow-2xl shadow-slate-900/20 mb-10 relative overflow-hidden group"
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <div className="flex gap-6 justify-center">
                {[
                  { icon: '𝕏', label: 'Twitter' },
                  { icon: 'in', label: 'LinkedIn' },
                  { icon: '<>', label: 'GitHub' },
                  { icon: '✉', label: 'Email' }
                ].map((social, i) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 backdrop-blur-xl bg-white/40 border border-slate-200/50 rounded-full flex items-center justify-center text-xl hover:bg-white/60 hover:text-slate-900 transition-all shadow-lg text-slate-700"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-16 text-center relative z-10">
        <div className="backdrop-blur-xl bg-white/40 border border-slate-200/50 rounded-full px-8 py-4 inline-block shadow-lg">
          <p className="text-slate-600 text-sm">
            © 2024 Anes Lachachi • Designed & Developed with 🖤
          </p>
        </div>
      </footer>
    </div>
  );
};

const Section = ({ id, title, children }) => {
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
          <div className="inline-block backdrop-blur-xl bg-white/40 border border-slate-200/50 rounded-full px-8 py-3 shadow-xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent tracking-tight">
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

const ProjectCardVertical = ({ title, description, tags, delay, isMobile }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-700 to-slate-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-500" />
      <div className="relative backdrop-blur-2xl bg-white/30 border border-slate-200/50 rounded-3xl p-8 lg:p-12 shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          {/* Mockup */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="order-2 lg:order-1"
          >
            {isMobile ? (
              // Mobile Mockup
              <div className="relative mx-auto w-72 h-[580px]">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-full h-full"
                >
                  <div className="absolute inset-0 backdrop-blur-xl bg-slate-100/80 rounded-[3rem] border-8 border-slate-300 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-white rounded-b-3xl z-10" />
                    <div className="absolute inset-4 bg-gradient-to-br from-slate-900/12 to-slate-900/15 rounded-[2rem] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/8 to-transparent" />
                      <div className="p-6 space-y-4">
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="h-12 bg-slate-200/50 backdrop-blur-md rounded-xl"
                        />
                        <div className="space-y-3">
                          {[1, 2, 3, 4].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                              className="h-16 bg-slate-100/40 backdrop-blur-md rounded-xl"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : (
              // Desktop Mockup - LARGER
              <div className="relative w-full max-w-4xl mx-auto">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="backdrop-blur-xl bg-slate-100/80 rounded-2xl border border-slate-300 shadow-2xl overflow-hidden">
                    <div className="bg-white/80 border-b border-slate-300 p-4 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 mx-4 h-7 bg-slate-100/50 rounded-md" />
                    </div>
                    
                    <div className="aspect-video bg-gradient-to-br from-slate-900/8 to-slate-900/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/5 to-transparent" />
                      <div className="p-8 space-y-6">
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="h-16 bg-slate-200/40 backdrop-blur-md rounded-xl"
                        />
                        <div className="grid grid-cols-3 gap-4">
                          {[1, 2, 3].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                              className="h-32 bg-slate-100/30 backdrop-blur-md rounded-xl"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: delay + 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
              
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="px-3 py-1 backdrop-blur-xl bg-white/40 border border-slate-200/50 rounded-full text-xs text-slate-800 font-medium">
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

const SkillCard = ({ skill, delay }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="backdrop-blur-xl bg-white/30 border border-slate-200/50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all cursor-pointer group"
    >
      <motion.div
        whileHover={{ rotate: 10, scale: 1.1 }}
        className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-3xl shadow-lg`}
      >
        {skill.icon}
      </motion.div>
      <p className="text-sm font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
        {skill.name}
      </p>
    </motion.div>
  );
};

export default Portfolio;