import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserPlus, Map, Music, DollarSign, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up as a Performer",
      description: "Create your profile with your performance style, preferred genres, and availability. Tell your story and showcase your talent.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Map,
      title: "Browse the Map & Reserve Spots",
      description: "Explore our interactive map showing foot traffic data, earnings potential, and available time slots. Reserve your perfect spot.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Music,
      title: "Perform and Get Digital Tips",
      description: "Set up your QR code, start performing, and receive digital tips instantly. Track your audience engagement in real-time.",
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ];

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {" "}StreetFlow{" "}
            </span>
            Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting started is simple. Follow these three easy steps to transform 
            your street performance experience.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop connecting lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 transform -translate-y-1/2">
            <svg className="w-full h-8" viewBox="0 0 100 8" preserveAspectRatio="none">
              <motion.path
                d="M0,4 Q25,0 50,4 T100,4"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                variants={pathVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  {/* Step number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5, type: "spring" }}
                    className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full flex items-center justify-center font-bold text-sm z-10"
                  >
                    {index + 1}
                  </motion.div>

                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 ${step.borderColor} hover:shadow-2xl transition-all duration-500 group`}
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full transform translate-x-16 -translate-y-16 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`inline-flex p-4 rounded-2xl ${step.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-8 h-8 ${step.color}`} />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Action button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center text-sm font-semibold ${step.color} hover:underline`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </motion.button>
                    </div>

                    {/* Mobile connecting arrow */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-8">
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                          transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
                        >
                          <ArrowRight className="w-6 h-6 text-gray-400" />
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="btn-primary">
              <UserPlus className="inline-block mr-2" size={20} />
              Start Your Journey
            </button>
          </motion.div>
          
          <p className="text-gray-500 mt-4 text-sm">
            Join thousands of performers already using StreetFlow
          </p>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: "Setup Time", value: "< 5 min" },
            { label: "Commission", value: "5%" },
            { label: "Instant Tips", value: "Real-time" },
            { label: "Support", value: "24/7" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5, type: "spring" }}
              className="text-center p-6 bg-gray-50 rounded-2xl"
            >
              <div className="text-2xl font-bold text-primary-600 mb-1">
                {item.value}
              </div>
              <div className="text-gray-600 text-sm">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;