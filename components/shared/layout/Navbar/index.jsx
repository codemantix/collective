"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { navLinks } from "@/components/shared/ui/Navlinks";
import { motion, AnimatePresence } from "framer-motion";
import SearchToggle from "@/components/shared/ui/SearchToggle";
import SearchBox from "@/components/shared/ui/SearchBox";
import styles from "./Navbar.module.css";

const ProfessionalNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => { setIsSidebarOpen(false); }, [pathname]);

  const toggleSidebar = useCallback(() => setIsSidebarOpen((v) => !v), []);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);
  const isActiveLink = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const navBg = isScrolled
    ? "linear-gradient(180deg, #1e3a8a 0%, #162d72 100%)"
    : "linear-gradient(180deg, #1e3a8a 0%, #1a3278 100%)";

  const screwStyle = {
    background: "radial-gradient(circle at 38% 38%, #6b7fa0 0%, #3a4560 55%, #1a2040 100%)",
    boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.6), inset -1px -1px 1px rgba(255,255,255,0.1)",
  };

  const sidebarDivider = {
    borderBottom: "2px solid transparent",
    borderImage: "linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0.02) 1px, rgba(255,255,255,0.02) 2px) 1",
  };

  return (
    <>
      {/* ── Industrial Status Bar — Dark Navy ── */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={styles.topBar}
        style={{
          background: "linear-gradient(180deg, #0a1533 0%, #0e1f4a 100%)",
          borderBottom: "1px solid rgba(59,130,246,0.2)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
        }}
      >
        {/* Vent pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(180deg, transparent 0px, transparent 3px, rgba(255,255,255,0.06) 3px, rgba(255,255,255,0.06) 4px)",
          }}
        />
        <div className="container-custom relative">
          <div className="flex items-center justify-between gap-6 w-full py-2 text-xs">
            {/* Contact links */}
            <div className="flex min-w-0 items-center gap-4">
              <Link
                href="tel:+2348123121369"
                className="flex items-center gap-2 font-bold uppercase tracking-widest text-blue-200 transition-colors hover:text-white"
                style={{ fontFamily: "ui-monospace, 'Fira Code', monospace", letterSpacing: "0.12em" }}
              >
                <div
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500 animate-led-blink"
                  style={{ boxShadow: "0 0 4px #f97316, 0 0 8px rgba(249,115,22,0.6)" }}
                />
                <Phone size={11} className="flex-shrink-0 opacity-70" />
                <span className="mobile:hidden">+234 812 312 1369</span>
                <span className="tablet:hidden laptop:hidden">Call Us</span>
              </Link>
              <Link
                href="mailto:codemantixcollective@gmail.com"
                className="mobile:hidden flex items-center gap-2 font-bold uppercase tracking-widest text-blue-200 transition-colors hover:text-white"
                style={{ fontFamily: "ui-monospace, 'Fira Code', monospace", letterSpacing: "0.12em" }}
              >
                <div
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500"
                  style={{ boxShadow: "0 0 4px #f97316, 0 0 8px rgba(249,115,22,0.6)" }}
                />
                <Mail size={11} className="flex-shrink-0 opacity-70" />
                codemantixcollective@gmail.com
              </Link>
              
            </div>
            
            {/* Tagline: hidden on mobile */}
            <div
              className="mobile:hidden font-black uppercase tracking-[0.2em] text-blue-300 opacity-80"
              style={{ fontFamily: "ui-monospace, 'Fira Code', monospace", fontSize: "0.65rem" }}
            >
              Professional IT Solutions &amp; Digital Innovation
            </div>
          </div>
        </div>
        {/* Bottom groove */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "rgba(59,130,246,0.3)" }} />
      </motion.div>

      {/* ── Main Navigation Panel — Blue Dominant ── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-50 transition-all duration-500"
        style={{
          background: navBg,
          borderBottom: "1px solid rgba(59,130,246,0.2)",
          boxShadow: isScrolled
            ? "0 4px 0 #060e26, 5px 5px 16px rgba(0,0,0,0.35)"
            : "0 2px 0 #0a1533, 3px 3px 10px rgba(0,0,0,0.25)",
        }}
      >
        {/* Top white ridge line */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(255,255,255,0.12)" }} />
        {/* Bottom indicator: orange → white */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #f97316 30%, rgba(255,255,255,0.25) 70%, transparent 100%)",
            opacity: 0.7,
          }}
        />

        {/* Screw corners */}
        <div
          className="absolute top-2.5 left-3 h-2.5 w-2.5 rounded-full hidden lg:block opacity-60"
          style={screwStyle}
        />
        <div
          className="absolute top-2.5 right-3 h-2.5 w-2.5 rounded-full hidden lg:block opacity-60"
          style={screwStyle}
        />

        <div className="container-custom">
          <div className="flex h-[68px] items-center justify-between gap-3">
            {/* Logo — always white on blue bg */}
            <motion.div className="relative  flex-shrink-0" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/" className="relative flex items-center space-x-3">
                <Image
                  src="/WhiteLogo.png"
                  width={180}
                  height={180}
                  alt="Codemantix Collective — Industrial IT Solutions"
                  className="h-11 w-auto lg:h-13"
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden min-w-0 flex-1 items-center justify-evenly gap-1 lg:flex xl:gap-2">
              <ul className="flex items-center gap-0.5 xl:gap-1">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: mounted ? 1 : 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`group relative flex items-center gap-1.5 rounded-md px-3 py-2 text-[13px] font-bold uppercase tracking-[0.07em] transition-all duration-150 xl:px-4 xl:text-sm ${
                        isActiveLink(link.href) ? "text-white" : "text-blue-200 hover:text-white"
                      }`}
                      style={{
                        background: isActiveLink(link.href) ? "rgba(255,255,255,0.12)" : "transparent",
                        boxShadow: isActiveLink(link.href)
                          ? "inset 2px 2px 4px rgba(0,0,0,0.25), inset -1px -1px 3px rgba(255,255,255,0.06)"
                          : "none",
                        fontFamily: "ui-monospace, 'Fira Code', monospace",
                      }}
                    >
                      {/* LED active dot */}
                      <span
                        className={`h-1.5 w-1.5 rounded-full flex-shrink-0 transition-all duration-200 ${
                          isActiveLink(link.href)
                            ? "bg-orange-500 animate-led-pulse"
                            : "bg-blue-400/50 group-hover:bg-blue-300"
                        }`}
                        style={
                          isActiveLink(link.href)
                            ? { boxShadow: "0 0 4px #f97316, 0 0 10px rgba(249,115,22,0.6)" }
                            : {}
                        }
                      />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Separator groove */}
              <div
                className="mx-2 h-8 w-px"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.15) 60%, transparent)",
                }}
              />

              <div className="flex-shrink-0">
                <SearchToggle />
              </div>

              {/* CTA — Tactile Orange Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="flex-shrink-0">
                <Link
                  href="/contact"
                  className="btn-orange inline-flex items-center gap-2 px-5 py-2.5 text-xs xl:px-6 xl:text-sm"
                >
                  Connect
                  <ArrowUpRight className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <motion.button
                onClick={toggleSidebar}
                className="rounded-lg p-2 text-blue-100 transition-all duration-150"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.93 }}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {isSidebarOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Sidebar — Blue Panel ── */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={closeSidebar}
            />

            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-76 max-w-[85vw] flex-col"
              style={{
                background: "linear-gradient(175deg, #1e3a8a 0%, #0e1f4a 55%, #060e26 100%)",
                borderLeft: "1px solid rgba(59,130,246,0.2)",
                boxShadow: "-5px 0 24px rgba(0,0,0,0.4)",
              }}
            >
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />

              {/* Screw corners */}
              <div className="absolute top-3 left-3 h-2.5 w-2.5 rounded-full opacity-60" style={screwStyle} />
              <div className="absolute top-3 right-3 h-2.5 w-2.5 rounded-full opacity-60" style={screwStyle} />

              {/* Header */}
              <div className="relative flex items-center justify-between p-5 pt-6" style={sidebarDivider}>
                <div className="flex items-center gap-2">
                  <div
                    className="h-2 w-2 rounded-full bg-orange-500 animate-led-pulse"
                    style={{ boxShadow: "0 0 4px #f97316, 0 0 10px rgba(249,115,22,0.6)" }}
                  />
                  <span
                    className="text-base font-black uppercase tracking-[0.18em] text-white"
                    style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                  >
                    Menu
                  </span>
                </div>
                <button
                  onClick={closeSidebar}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-200 transition-colors hover:text-white"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.3)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="relative flex-1 overflow-y-auto p-4">
                <motion.ul
                  className="space-y-2"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                    closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.li
                      key={link.name}
                      variants={{
                        open: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                        closed: { y: 30, opacity: 0 },
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeSidebar}
                        className="group flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-100"
                        style={{
                          background: isActiveLink(link.href)
                            ? "rgba(255,255,255,0.12)"
                            : "transparent",
                          boxShadow: isActiveLink(link.href)
                            ? "inset 2px 2px 5px rgba(0,0,0,0.25), inset -1px -1px 3px rgba(255,255,255,0.05)"
                            : "none",
                          border: isActiveLink(link.href)
                            ? "1px solid rgba(255,255,255,0.1)"
                            : "1px solid transparent",
                        }}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                              isActiveLink(link.href)
                                ? "bg-orange-500"
                                : "bg-blue-400/40 group-hover:bg-blue-300"
                            }`}
                            style={
                              isActiveLink(link.href)
                                ? { boxShadow: "0 0 4px #f97316, 0 0 10px rgba(249,115,22,0.6)" }
                                : {}
                            }
                          />
                          <span
                            className={`text-sm font-bold uppercase tracking-wider ${
                              isActiveLink(link.href) ? "text-white" : "text-blue-200 group-hover:text-white"
                            }`}
                            style={{ fontFamily: "ui-monospace, 'Fira Code', monospace", letterSpacing: "0.1em" }}
                          >
                            {link.name}
                          </span>
                        </div>
                        {isActiveLink(link.href) && (
                          <div
                            className="h-5 w-5 rounded-full flex items-center justify-center"
                            style={{
                              background: "linear-gradient(145deg, #f97316, #ea6d0e)",
                              boxShadow: "0 2px 0 #c2520c, 0 0 6px rgba(249,115,22,0.5)",
                            }}
                          >
                            <div className="h-2 w-2 rounded-full bg-white" />
                          </div>
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Search */}
                <div
                  className="mt-4 px-1 pt-4"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400/70 px-1"
                    style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                  >
                    Search
                  </div>
                  <SearchBox placeholder="Search..." className="w-full" />
                </div>

                {/* Contact info */}
                <div
                  className="mt-5 space-y-3 px-1 pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400/70"
                    style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                  >
                    Get in Touch
                  </div>
                  {[
                    { icon: Phone, text: "+234 812 312 1369", link: "tel:+2348123121369" },
                    {
                      icon: Mail,
                      text: "codemantixcollective@gmail.com",
                      link: "mailto:codemantixcollective@gmail.com",
                    },
                  ].map(({ icon: Icon, text, link }, i) => (
                    <div key={i} className="group flex items-center gap-3">
                      <div
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.07)",
                          boxShadow: "inset 1px 1px 3px rgba(0,0,0,0.3)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <Icon size={14} className="text-blue-300" />
                      </div>
                      <Link
                        href={link}
                        onClick={closeSidebar}
                        className="text-xs font-medium text-blue-200 transition-colors hover:text-white"
                        style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}
                      >
                        {text}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div
                className="relative p-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Link
                  href="/contact"
                  onClick={closeSidebar}
                  className="btn-orange flex w-full items-center justify-center gap-2 py-3"
                >
                  Connect
                  <ArrowUpRight size={16} />
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
