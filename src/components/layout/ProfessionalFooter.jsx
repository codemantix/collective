"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61582103190408",
    icon: "facebook",
  },
  { name: "Twitter", href: "https://x.com/codemantix", icon: "twitter" },
  { name: "Instagram", href: "https://www.instagram.com/codemantix/", icon: "instagram" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/codemantix/", icon: "linkedin" },
];

const services = [
  { name: "Web Development", href: "/services" },
  { name: "Data Analytics", href: "/services" },
  { name: "UI/UX Design", href: "/services" },
  { name: "Graphics Design", href: "/services" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/portfolio" },
];

const resources = [
  { name: "Documentation", href: "/docs" },
  { name: "API Reference", href: "/api" },
  { name: "Support Center", href: "/support" },
  { name: "Community", href: "/community" },
  { name: "White Papers", href: "/resources" },
  { name: "Webinars", href: "/webinars" },
];

export default function ProfessionalFooter() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <footer
      ref={elementRef}
      className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-gray-900 to-slate-900 text-white"
    >
      {/* Enhanced Background Pattern with Codemantix Brand */}
      <div className="absolute inset-0">
        {/* Optimized gradient orbs - only animate when visible */}
        <motion.div
          animate={
            isVisible
              ? {
                  scale: [1, 1.05, 1],
                  opacity: [0.15, 0.25, 0.15],
                }
              : {}
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="to-primary-600/8 absolute left-0 top-0 h-96 w-96 -translate-x-48 -translate-y-48 transform rounded-full bg-gradient-to-br from-accent-500/10 blur-3xl"
        />
        <motion.div
          animate={
            isVisible
              ? {
                  scale: [1, 0.95, 1],
                  opacity: [0.1, 0.2, 0.1],
                }
              : {}
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="from-secondary-500/8 absolute bottom-0 right-0 h-[32rem] w-[32rem] translate-x-48 translate-y-48 transform rounded-full bg-gradient-to-br to-accent-500/10 blur-3xl"
        />
        <motion.div
          animate={
            isVisible
              ? {
                  scale: [1, 1.08, 1],
                  opacity: [0.03, 0.08, 0.03],
                }
              : {}
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-br from-primary-700/5 to-accent-600/5 blur-3xl"
        />

        {/* Optimized floating particles - only show when visible and reduced count */}
        {isVisible &&
          [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.4, 0.1],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              className="absolute h-1 w-1 rounded-full bg-accent-400/30"
              style={{
                left: `${10 + i * 15}%`,
                top: `${15 + (i % 3) * 30}%`,
              }}
            />
          ))}

        {/* Optimized static grid pattern */}
        <div
          className="opacity-3 absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(16,185,129,0.2) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Enhanced Company Info */}
          <motion.div
            
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            {/* Enhanced Logo Section */}
            <div className="mb-8">
              <motion.div whileHover={{ scale: 1.05 }} className="relative inline-block">
                {/* Glowing background effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary-400/20 via-accent-400/20 to-secondary-400/20 blur-xl"
                />

                <Link href="/" className="relative flex items-center space-x-3">
                  <div className="relative">
                    {/* White glass background for light mode */}
                    <div
                      className="absolute inset-0 rounded-2xl bg-white/90 opacity-100 shadow-lg backdrop-blur-md transition-opacity duration-300 dark:opacity-0"
                      style={{
                        margin: "-8px",
                        padding: "8px",
                      }}
                    />

                    <Image
                      src="/Images/nav.png"
                      width={160}
                      height={160}
                      alt="Codemantix Collective - Professional IT Solutions"
                      className="theme-adaptive-logo relative z-10 h-14 w-auto transition-all duration-300"
                      priority
                    />
                  </div>
                </Link>

                {/* Removed sparkle effect for better performance */}
              </motion.div>
            </div>

            <motion.p
              className="mb-10 text-xl mobile:text-sm leading-relaxed text-gray-300"
             
             
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transforming businesses through{" "}
              <motion.span
                className="font-semibold text-accent-400"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(16,185,129,0)",
                    "0 0 10px rgba(16,185,129,0.3)",
                    "0 0 0px rgba(16,185,129,0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                innovative technology solutions
              </motion.span>
              . We deliver enterprise-grade software, data analytics, and digital transformation
              services.
            </motion.p>

            {/* Enhanced Contact Info */}
            <div className="space-y-5">
              {[
                { icon: EnvelopeIcon, text: "info@codemantixcollective.com", delay: 0.3 },
                { icon: PhoneIcon, text: "+234 812 312 1369", delay: 0.4 },
                { icon: MapPinIcon, text: "Nigeria.", delay: 0.5 },
              ].map(({ icon: Icon, text, delay }, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center space-x-4"
                 
                  transition={{ duration: 0.6, delay }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-500/20 to-secondary-500/20 backdrop-blur-sm"
                  >
                    <Icon className="h-5 w-5 text-accent-400" />
                  </motion.div>
                  <span className="text-gray-300 transition-colors duration-300 group-hover:text-white mobile:text-sm">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
           
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-6 text-lg font-semibold">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-sm text-slate-300 transition-colors duration-300 hover:text-accent-400"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
           
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-6 text-lg font-semibold">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-300 transition-colors duration-300 hover:text-accent-400"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
           
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-6 text-lg font-semibold">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-sm text-slate-300 transition-colors duration-300 hover:text-accent-400"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Enhanced Newsletter Section */}
        <motion.div
         
         
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative border-t border-slate-700/50 py-16"
        >
          {/* Glowing border effect */}
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/50 to-transparent"
          />

          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
            
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.h4
                className="mb-4 bg-gradient-to-r from-white via-accent-200 to-secondary-200 bg-clip-text text-3xl font-bold text-transparent"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(16,185,129,0)",
                    "0 0 20px rgba(16,185,129,0.2)",
                    "0 0 0px rgba(16,185,129,0)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                Stay Updated
              </motion.h4>
              <p className="text-lg mobile:text-sm text-gray-300">
                Get the latest insights on technology trends, best practices, and industry updates
                delivered to your inbox.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
             
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-600/50 bg-slate-800/50 px-6 py-4 text-white placeholder-slate-400 backdrop-blur-sm transition-all duration-300 focus:border-accent-400/50 focus:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-accent-400/20"
                />
                {/* Input glow effect */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-400/10 to-secondary-400/10 opacity-0 transition-opacity duration-300 focus-within:opacity-100" />
              </div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                {/* Button glow effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-500 opacity-60 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

                <button className="relative rounded-2xl bg-gradient-to-r from-primary-800 to-accent-600 px-8 py-4 font-bold text-white shadow-2xl transition-all duration-300 hover:from-primary-900 hover:to-accent-700">
                  Subscribe
                </button>

                {/* Shimmer effect */}
                <motion.div
                  animate={{ x: [-100, 100] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 3,
                  }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  style={{ transform: "skewX(-20deg)" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Bottom Footer */}
        <motion.div
         
         
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative flex flex-col items-center justify-between border-t border-slate-700/50 py-10 md:flex-row"
        >
          {/* Glowing top border */}
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/3 right-1/3 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/50 to-transparent"
          />

          <motion.div
            className="mb-6 text-gray-400 md:mb-0"
           
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="text-sm">© 2025</span>{" "}
            <motion.span
              className="font-semibold text-white"
              animate={{
                textShadow: [
                  "0 0 0px rgba(16,185,129,0)",
                  "0 0 5px rgba(16,185,129,0.3)",
                  "0 0 0px rgba(16,185,129,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Codemantix Collective
            </motion.span>
            <span className="text-sm">. All rights reserved.</span>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            className="flex space-x-4"
           
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="group relative text-slate-400 transition-colors duration-300 hover:text-accent-400"
                aria-label={social.name}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                {/* Glowing background */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-400/20 to-secondary-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/50 backdrop-blur-sm transition-all duration-300 group-hover:border group-hover:border-accent-400/30 group-hover:bg-slate-700/70">
                  {social.icon === "facebook" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {social.icon === "twitter" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}

                  {/* Hover sparkle effect */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-1 -top-1 h-1 w-1 rounded-full bg-accent-400 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
