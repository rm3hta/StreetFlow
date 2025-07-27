import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Music, 
  MapPin, 
  Users, 
  Heart,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';

const Footer: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const footerLinks = {
    Platform: [
      { name: "For Performers", href: "#" },
      { name: "For Audiences", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Features", href: "#" }
    ],
    Support: [
      { name: "Help Center", href: "#" },
      { name: "Safety Guidelines", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Community", href: "#" }
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  };

  return (
    <footer ref={ref} className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 text-white/5">
          <Music size={120} />
        </div>
        <div className="absolute bottom-20 right-20 text-white/5">
          <MapPin size={100} />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/3">
          <Users size={200} />
        </div>
      </div>

      {/* Main CTA Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-6xl font-bold mb-6">
              Ready to Find Your
              <br />
              <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                Perfect Stage?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join StreetFlow today and transform your street performance experience. 
              Connect with audiences, earn more, and take your talent to the next level.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <Users className="inline-block mr-2" size={20} />
                Sign Up Free
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary border-white/30 text-white hover:bg-white hover:text-gray-900"
              >
                <ExternalLink className="inline-block mr-2" size={20} />
                Learn More
              </motion.button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-400 text-sm mt-6"
            >
              No credit card required • Start earning in minutes • Join 10,000+ performers
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center mb-4">
                <Music className="w-8 h-8 text-primary-400 mr-2" />
                <span className="text-2xl font-bold">StreetFlow</span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering street performers worldwide with data-driven insights, 
                digital payments, and audience discovery.
              </p>

              {/* Contact info */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-400 text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@streetflow.com
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  1-800-STREET-1
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <IconComponent size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Footer link columns */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + categoryIndex * 0.1, duration: 0.6 }}
              >
                <h3 className="text-white font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2024 StreetFlow. All rights reserved. Made with{" "}
              <Heart className="inline w-4 h-4 text-red-500" />{" "}
              for street performers worldwide.
            </p>
            
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Cookies
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;