import React from 'react';
import { motion } from 'framer-motion';
import { Music, MapPin, Users, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const musicNoteVariants = {
    animate: {
      y: [0, -30, 0],
      x: [0, 10, 0],
      rotate: [0, 10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg city-skyline">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating music notes */}
        <motion.div
          variants={musicNoteVariants}
          animate="animate"
          className="absolute top-20 left-20 text-white/20"
        >
          <Music size={48} />
        </motion.div>
        
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-40 right-32 text-white/15"
        >
          <Music size={36} />
        </motion.div>
        
        <motion.div
          variants={musicNoteVariants}
          animate="animate"
          className="absolute bottom-40 left-32 text-white/20"
          style={{ animationDelay: '2s' }}
        >
          <Music size={42} />
        </motion.div>

        {/* Floating map pins */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-32 right-20 text-white/25"
          style={{ animationDelay: '1s' }}
        >
          <MapPin size={32} />
        </motion.div>
        
        <motion.div
          variants={musicNoteVariants}
          animate="animate"
          className="absolute bottom-32 right-40 text-white/20"
          style={{ animationDelay: '3s' }}
        >
          <MapPin size={38} />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-accent-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Find Your Stage.
            <br />
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              Own the Street.
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            StreetFlow uses real data to help performers pick the perfect spots to shine, 
            while letting audiences discover live performances near them.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users className="inline-block mr-2" size={20} />
            Join as a Performer
          </motion.button>
          
          <motion.button 
            className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin className="inline-block mr-2" size={20} />
            Discover Performers
          </motion.button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.div 
            className="glass-card p-6 text-white"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <MapPin className="w-8 h-8 mb-3 mx-auto text-accent-400" />
            <h3 className="font-semibold mb-2">Smart Locations</h3>
            <p className="text-sm text-white/80">AI-powered spot recommendations</p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 text-white"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Users className="w-8 h-8 mb-3 mx-auto text-primary-400" />
            <h3 className="font-semibold mb-2">Live Discovery</h3>
            <p className="text-sm text-white/80">Find performances happening now</p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 text-white"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Zap className="w-8 h-8 mb-3 mx-auto text-yellow-400" />
            <h3 className="font-semibold mb-2">Instant Tips</h3>
            <p className="text-sm text-white/80">Digital payments made easy</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;