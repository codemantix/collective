"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  ChartBarIcon,
  SwatchIcon,
  UsersIcon,
  HeartIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const teamHighlights = [
  {
    icon: CodeBracketIcon,
    title: "Full-Stack Developers",
    description: "Expert engineers building scalable solutions",
    color: "from-primary-500 to-primary-600",
  },
  {
    icon: PaintBrushIcon,
    title: "UI/UX Designers",
    description: "Creative minds crafting intuitive experiences",
    color: "from-accent-500 to-accent-600",
  },
  {
    icon: SwatchIcon,
    title: "Graphics Designers",
    description: "Visual storytellers bringing brands to life",
    color: "from-secondary-500 to-secondary-600",
  },
  {
    icon: ChartBarIcon,
    title: "Data Analysts",
    description: "Insight experts turning data into strategy",
    color: "from-primary-700 to-accent-500",
  },
];

export default function AboutTeamSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
              radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 60px 60px",
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 80, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-accent-400/20 to-secondary-400/30 blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 70, -50, 0],
            scale: [1.1, 0.9, 1.3, 1.1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-primary-400/20 to-accent-400/20 blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Content */}
          <div className="space-y-8">
            <motion.div variants={textVariants}>
              <span className="inline-flex items-center gap-2 bg-accent-500/10 text-accent-300 px-4 py-2 rounded-full text-sm font-semibold border border-accent-500/20 mb-6">
                <UsersIcon className="w-4 h-4" />
                Meet Our Team
              </span>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Working With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Experts
                </span>
              </h2>
            </motion.div>

            <motion.div variants={textVariants} className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                At Codemantix Collective, our team is a fusion of creativity, strategy, 
                and technical excellence. We unite designers, developers, and analysts 
                under one vision: to craft innovative digital solutions that empower 
                businesses and inspire users.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Whether it's building seamless interfaces, designing actionable data 
                solutions, or creating impactful experiences, our collective ensures 
                your ideas become transformative realities.
              </p>
            </motion.div>

            {/* Team Stats */}
            <motion.div variants={textVariants} className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">25+</div>
                <div className="text-gray-300 text-sm">Expert Team Members</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">4</div>
                <div className="text-gray-300 text-sm">Core Specializations</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image and Highlights */}
          <div className="space-y-8">
            {/* Team Image */}
            <motion.div
              variants={imageVariants}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/Images/Teampicture.jpg"
                  alt="Our Amazing Team"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px] transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent"></div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 right-4 w-16 h-16 bg-accent-500/80 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                >
                  <HeartIcon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute bottom-4 left-4 w-16 h-16 bg-secondary-500/80 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                >
                  <RocketLaunchIcon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 -z-10"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20"
        >
          <motion.div variants={textVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Expertise
              </span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Meet the specialists who bring your digital vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative"
                >
                  <div className="relative h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {highlight.title}
                    </h4>
                    
                    <p className="text-gray-300 text-sm">
                      {highlight.description}
                    </p>
                    
                    {/* Hover line */}
                    <div className="w-0 h-1 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-full group-hover:w-full transition-all duration-300 mt-4"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}