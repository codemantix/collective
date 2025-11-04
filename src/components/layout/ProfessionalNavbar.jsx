"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Moon, Sun, ArrowUpRight, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { navLinks } from "../ui/Navlinks";
import { motion, AnimatePresence } from "framer-motion";
import SearchToggle from "../ui/SearchToggle";
import SearchBox from "../ui/SearchBox";

const ProfessionalNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar on desktop resize and route change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const toggleSidebar = useCallback(() => setIsSidebarOpen(!isSidebarOpen), [isSidebarOpen]);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Enhanced Top Contact Bar - Professional Touch with Codemantix Brand */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative hidden overflow-hidden bg-gradient-to-r from-primary-900 via-primary-800 to-accent-900 py-3 text-white lg:block"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container-custom relative">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-8">
              <div>
                <Link href="tel:+2348123121369" className="flex items-center gap-2">
                  <Phone size={14} className="text-accent-400" />
                  <span className="font-medium">+234 812 312 1369</span>
                </Link>
              </div>
              <div>
                <Link
                  href="mailto:info@codemantixcollective.com"
                  className="flex items-center gap-2"
                >
                  <Mail size={14} className="text-accent-400" />
                  <span className="font-medium">info@codemantixcollective.com</span>
                </Link>
              </div>
            </div>
            <div className="font-semibold text-gray-200">
              Professional IT Solutions & Digital Innovation
            </div>
          </div>
        </div>

        {/* Subtle glow effects */}
        <div className="absolute left-0 top-0 h-1 w-1/3 bg-gradient-to-r from-accent-400/50 to-transparent blur-sm" />
        <div className="absolute right-0 top-0 h-1 w-1/3 bg-gradient-to-l from-secondary-400/50 to-transparent blur-sm" />
      </motion.div>

      {/* Enhanced Main Navigation */}
      <motion.nav
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 z-50 transition-all duration-700 ${isScrolled
            ? "border-b border-primary-200/30 bg-white/95 shadow-2xl backdrop-blur-2xl dark:border-primary-700/30 dark:bg-primary-900/95"
            : "bg-white/90 backdrop-blur-xl dark:bg-primary-900/90"
          }`}
      >
        {/* Animated gradient border */}
        <motion.div
          animate={{
            background: isScrolled
              ? "linear-gradient(90deg, rgba(30,58,138,0.3) 0%, rgba(16,185,129,0.3) 50%, rgba(249,115,22,0.3) 100%)"
              : "linear-gradient(90deg, rgba(30,58,138,0.1) 0%, rgba(16,185,129,0.1) 50%, rgba(249,115,22,0.1) 100%)",
          }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 h-0.5 w-full"
        />

        {/* Removed floating particles for better performance */}
        <div className="container-custom">
          <div className="laptop-md:gap-3 flex h-20 items-center justify-between gap-2 xl:gap-4">
            {/* Enhanced Logo */}
            <motion.div
              className="relative flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Simplified static glow effect */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary-400/10 via-accent-400/10 to-secondary-400/10 opacity-50 blur-lg" />

              <Link href="/" className="relative flex items-center space-x-3">
                <motion.div
                  animate={{
                    filter: [
                      "drop-shadow(0 0 0px rgba(16,185,129,0))",
                      "drop-shadow(0 0 10px rgba(16,185,129,0.3))",
                      "drop-shadow(0 0 0px rgba(16,185,129,0))",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/Images/nav.png"
                    width={180}
                    height={180}
                    alt="Codemantix Collective - Professional IT Solutions"
                    className="theme-adaptive-logo h-12 w-auto lg:h-14"
                    priority
                  />
                </motion.div>
              </Link>

              {/* Removed sparkle effect for better performance */}
            </motion.div>

            {/* Desktop Navigation */}
            <div className="laptop-md:space-x-2.5 hidden min-w-0 flex-1 items-center justify-end space-x-2 lg:flex xl:space-x-6">
              <ul className="laptop-md:space-x-2.5 flex items-center space-x-2 xl:space-x-6">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: mounted ? 1 : 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <Link
                      href={link.href}
                      className={`laptop-md:px-1.5 laptop-md:text-sm group relative px-1.5 py-2 text-sm font-semibold transition-all duration-300 xl:px-4 xl:text-base ${isActiveLink(link.href)
                          ? "text-primary-800 dark:text-accent-400"
                          : "text-gray-700 hover:text-primary-800 dark:text-gray-300 dark:hover:text-accent-400"
                        }`}
                    >
                      {link.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-800 to-accent-500 transition-all duration-300 ${isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Professional Search Toggle */}
              <div className="flex-shrink-0">
                <SearchToggle />
              </div>

              {/* Theme Toggle */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center">
                <motion.button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle theme"
                  style={{ opacity: mounted ? 1 : 0 }}
                >
                  {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
                  {!mounted && <div className="h-5 w-5" />}
                </motion.button>
              </div>

              {/* Enhanced CTA Button */}
              <motion.div
                initial={{ opacity: mounted ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex-shrink-0"
              >
                {/* Glowing background effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-500 opacity-60 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

                <Link
                  href="/contact"
                  className="laptop-md:min-w-[90px] laptop-md:gap-1 laptop-md:px-3 laptop-md:py-2 laptop-md:text-xs relative inline-flex min-w-[90px] items-center justify-center gap-1 rounded-2xl bg-gradient-to-r from-primary-800 to-accent-500 px-3 py-2 text-xs font-bold text-white shadow-2xl transition-all duration-300 hover:from-primary-900 hover:to-accent-600 xl:min-w-[140px] xl:gap-2 xl:px-8 xl:py-4 xl:text-base"
                >
                  <span>Get Quote</span>
                  <motion.div
                    animate={{
                      x: [0, 3, 0],
                      y: [0, -1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowUpRight className="laptop-md:h-4 laptop-md:w-4 h-3 w-3 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 xl:h-5 xl:w-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              {/* Mobile Theme Toggle */}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center">
                <motion.button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                  style={{ opacity: mounted ? 1 : 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle theme"
                >
                  {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
                  {!mounted && <div className="h-[18px] w-[18px]" />}
                </motion.button>
              </div>

              <motion.button
                onClick={toggleSidebar}
                className="rounded-lg p-2 text-gray-700 transition-all duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {isSidebarOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={closeSidebar}
            />

            {/* Enhanced Sidebar */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.2 },
              }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-76 max-w-[85vw] flex-col border-l border-primary-200/30 bg-gradient-to-br from-white/95 via-white/90 to-primary-50/80 shadow-2xl backdrop-blur-2xl dark:border-primary-700/30 dark:from-slate-900/95 dark:via-slate-900/90 dark:to-primary-900/80"
            >
              {/* Simplified static background - removed animations for performance */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Static gradient orbs only */}
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-gradient-to-br from-accent-400/20 to-secondary-400/20 blur-2xl" />
                <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-20 translate-y-20 rounded-full bg-gradient-to-br from-primary-400/15 to-accent-400/15 blur-2xl" />
              </div>

              {/* Enhanced Header */}
              <div className="relative flex items-center justify-between border-b border-primary-200/30 p-4 dark:border-primary-700/30">
                {/* Static glow effect */}
                <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent-400/30 to-transparent" />

                {/* Brand text instead of logo */}
                <div
                  className="relative"
                >
                  <h2 className="bg-gradient-to-r from-primary-700 via-accent-500 to-secondary-500 bg-clip-text text-lg font-bold text-transparent dark:from-white dark:via-accent-400 dark:to-secondary-400">
                    Menu
                  </h2>

                  {/* Static accent dot */}
                  <div className="absolute -right-5 -top-1 h-1.5 w-1.5 rounded-full bg-accent-400" />
                </div>

                {/* Enhanced close button */}
                <button
                  onClick={closeSidebar}
                  className="relative rounded-lg bg-gray-100/80 p-2 text-gray-600 backdrop-blur-sm transition-all duration-300 hover:bg-gray-200/80 hover:scale-110 dark:bg-gray-800/80 dark:text-gray-400 dark:hover:bg-gray-700/80"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Enhanced Navigation */}
              <div className="relative flex-1 overflow-y-auto px-4 py-5">
                <motion.ul
                  className="space-y-2.5"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 },
                    },
                  }}
                >
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      variants={{
                        open: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            y: { stiffness: 1000, velocity: -100 },
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        },
                        closed: {
                          y: 50,
                          opacity: 0,
                          transition: {
                            y: { stiffness: 1000 },
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <div className="group relative transition-all duration-300">
                        {/* Static glowing background effect */}
                        <div
                          className={`absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 ${isActiveLink(link.href)
                              ? "bg-gradient-to-r from-primary-400/30 to-accent-400/30"
                              : "bg-gradient-to-r from-accent-400/20 to-secondary-400/20"
                            }`}
                        />

                        <Link
                          href={link.href}
                          onClick={closeSidebar}
                          className={`relative flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold backdrop-blur-sm transition-all duration-300 ${isActiveLink(link.href)
                              ? "bg-gradient-to-r from-primary-100/80 to-accent-50/80 text-primary-800 shadow-lg dark:from-primary-900/40 dark:to-accent-900/40 dark:text-accent-400"
                              : "text-gray-700 hover:bg-white/60 dark:text-gray-300 dark:hover:bg-slate-800/60"
                            }`}
                        >
                          <span>{link.name}</span>

                          {/* Simple active indicator - no animation */}
                          {isActiveLink(link.href) ? (
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg">
                              <div className="h-2.5 w-2.5 rounded-full bg-white" />
                            </div>
                          ) : (
                            <div className="h-5 w-5 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 opacity-30 dark:from-gray-600 dark:to-gray-700 transition-all duration-300 group-hover:opacity-50" />
                          )}
                        </Link>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Search Box in Mobile Menu */}
                <div className="relative border-t border-primary-200/30 px-4 py-4 dark:border-primary-700/30">
                  {/* Static glow effect */}
                  <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/20 to-transparent" />

                  <div className="space-y-1.5">
                    <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400">Search</h3>
                    <SearchBox placeholder="Search..." className="w-full" />
                  </div>
                </div>

                {/* Enhanced Contact Info in Mobile Menu */}
                <div className="relative mt-6 space-y-4 border-t border-primary-200/30 pt-5 dark:border-primary-700/30">
                  {/* Static glow effect */}
                  <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/20 to-transparent" />

                  <div className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                    Get in Touch
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        icon: Phone,
                        text: "+234 812 312 1369",
                        link: "tel:+2348123121369",
                      },
                      {
                        icon: Mail,
                        text: "info@codemantixcollective.com",
                        link: "mailto:info@codemantixcollective.com",
                      },
                    ].map(({ icon: Icon, text, link }, index) => (
                      <div key={index} className="group flex items-center gap-3 transition-all duration-300">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent-400/20 to-secondary-400/20 backdrop-blur-sm transition-all duration-300 group-hover:from-accent-400/40 group-hover:to-secondary-400/40">
                          <Icon className="h-4 w-4 text-accent-500" />
                        </div>
                        <Link href={link} onClick={closeSidebar} className="flex-1">
                          <span className="text-xs font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-200">
                            {text}
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Footer CTA */}
              <div className="relative border-t border-primary-200/30 p-4 dark:border-primary-700/30">
                {/* Static glowing border */}
                <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/30 to-transparent" />

                <Link href="/contact" onClick={closeSidebar}>
                  <div className="group relative">
                    {/* Static glowing background effect */}
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-500 opacity-40 blur-lg transition-opacity duration-300 group-hover:opacity-70" />

                    <span className="relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-800 to-accent-600 px-6 py-3.5 font-bold text-white shadow-2xl transition-all duration-300 hover:from-primary-900 hover:to-accent-700 hover:shadow-accent-500/50">
                      <span className="text-base">Get Your Quote</span>
                      <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfessionalNavbar;
