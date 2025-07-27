import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Users, CreditCard, BarChart3, Brain, Smartphone, QrCode, TrendingUp } from 'lucide-react';

const Features: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: Brain,
      title: "Smart Location Recommendations",
      description: "Our AI analyzes foot traffic, demographics, and historical performance data to suggest the best spots for your act. Never guess where to perform again.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Audience Discovery",
      description: "Let people find you! Audiences can discover live performances happening nearby in real-time, complete with performer profiles and show details.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: QrCode,
      title: "Digital Tipping",
      description: "Support performers instantly with QR codes or in-app payments. No cash? No problem. Secure, fast, and convenient for everyone.",
      color: "text-green-500",
      bgColor: "bg-green-50",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Data Insights",
      description: "Track your performance metrics, earnings, and audience engagement. Learn which locations work best and optimize your street performance strategy.",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      gradient: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {" "}Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            StreetFlow combines cutting-edge technology with street performance culture 
            to create the ultimate platform for performers and audiences alike.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional stats section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              className="text-4xl font-bold text-primary-600 mb-2"
            >
              10,000+
            </motion.div>
            <p className="text-gray-600">Active Performers</p>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
              className="text-4xl font-bold text-accent-600 mb-2"
            >
              500+
            </motion.div>
            <p className="text-gray-600">Premium Locations</p>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              className="text-4xl font-bold text-green-600 mb-2"
            >
              $2M+
            </motion.div>
            <p className="text-gray-600">Tips Processed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;