import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, Music, Heart } from 'lucide-react';

const Testimonials: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Marcus Rodriguez",
      role: "Street Guitarist",
      location: "Brooklyn, NY",
      quote: "StreetFlow helped me find my best spots and double my tips! The data insights showed me which locations worked best for my style. I went from making $50 a day to $150+ consistently.",
      rating: 5,
      image: "🎸",
      earnings: "+200%"
    },
    {
      name: "Sofia Chen",
      role: "Violinist & Singer",
      location: "San Francisco, CA",
      quote: "As a classical musician, I wasn't sure street performing was for me. StreetFlow's audience discovery feature brought so many music lovers to my performances. I've even got regular followers now!",
      rating: 5,
      image: "🎻",
      earnings: "+150%"
    },
    {
      name: "DJ Thunder",
      role: "Electronic Music Producer",
      location: "Miami, FL",
      quote: "The digital tipping feature is a game-changer! No more carrying cash or worrying about safety. Young audiences love scanning QR codes, and I get payments instantly to my account.",
      rating: 5,
      image: "🎧",
      earnings: "+175%"
    },
    {
      name: "Luna Martinez",
      role: "Dance Performer",
      location: "Austin, TX",
      quote: "StreetFlow's spot reservation system eliminated all the drama of competing for locations. I can plan my week, know exactly where I'll perform, and focus on what I love most - dancing!",
      rating: 5,
      image: "💃",
      earnings: "+120%"
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Real Stories from
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {" "}Real Performers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how StreetFlow has transformed the lives and careers of street performers 
            across the country. Their success stories speak for themselves.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-gray-200 group-hover:text-primary-200 transition-colors duration-300">
                <Quote size={24} />
              </div>

              {/* Earnings badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {testimonial.earnings}
              </div>

              <div className="relative z-10">
                {/* Performer info */}
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-primary-600 font-semibold text-sm mb-1">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Background decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-accent-50 rounded-full transform translate-x-16 translate-y-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Join the Success Stories
            </h3>
            <p className="text-primary-100 text-lg">
              Thousands of performers are already earning more with StreetFlow
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { number: "95%", label: "Report Higher Earnings", icon: "💰" },
              { number: "4.9/5", label: "Average Rating", icon: "⭐" },
              { number: "50K+", label: "Tips Processed Daily", icon: "💳" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5, type: "spring" }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300"
            >
              <Heart className="inline-block mr-2" size={20} />
              Start Your Success Story
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;