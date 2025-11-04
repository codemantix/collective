"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const contactMethods = [
  {
    icon: EnvelopeIcon,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "codemantixcollective@gmail.com",
    color: "from-primary-500 to-primary-600",
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    description: "Speak with our team",
    contact: "+234 812 312 1369",
    color: "from-accent-500 to-accent-600",
  },
  {
    icon: MapPinIcon,
    title: "Visit Us",
    description: "Our office location",
    contact: "Nigeria",
    color: "from-secondary-500 to-secondary-600",
  },
  {
    icon: ClockIcon,
    title: "Business Hours",
    description: "Mon - Fri",
    contact: "9:00 AM - 5:00 PM WAT",
    color: "from-primary-700 to-accent-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function ContactHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-accent-900/95" />

        {/* Static Floating Orbs */}
        <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-accent-400/20 to-secondary-400/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-gradient-to-l from-primary-400/15 to-accent-400/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <div className="mb-16 text-center">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-2 text-sm font-semibold text-accent-300">
                <ChatBubbleLeftRightIcon className="h-4 w-4" />
                Let's Connect
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-bold leading-tight text-white md:text-7xl"
            >
              Get In{" "}
              <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-3xl text-xl mobile:text-sm leading-relaxed text-gray-300 md:text-2xl"
            >
              Ready to transform your digital vision into reality? Let's start a conversation and
              explore how we can help you achieve your goals.
            </motion.p>
          </div>

          {/* Contact Methods Grid */}
          <motion.div
            variants={containerVariants}
            className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative"
                >
                  <div className="relative h-full rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                    {/* Icon */}
                    <div
                      className={`h-12 w-12 bg-gradient-to-r ${method.color} mb-4 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="mb-2 text-lg  font-semibold text-white">{method.title}</h3>
                    <p className="mb-3 text-sm  text-gray-300">{method.description}</p>
                    <p className="text-sm font-medium text-accent-300">{method.contact}</p>

                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-500/5 to-secondary-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-300">
              <GlobeAltIcon className="h-4 w-4" />
              <span>Available worldwide for remote projects</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
