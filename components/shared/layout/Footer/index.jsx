"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./Footer.module.css";

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
  { name: "VIEW ALL", href: "/services" },
];

const company = [
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const resources = [
  { name: "Community", href: "/community" },
  { name: "Webinars", href: "/webinars" },
];

export default function ProfessionalFooter() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <footer
      ref={elementRef}
      className={`${styles.footer} text-white`}
      style={{
        background: "linear-gradient(175deg, #0e1f4a 0%, #0a1533 55%, #060e26 100%)",
        borderTop: "1px solid rgba(59,130,246,0.2)",
        boxShadow: "inset 0 3px 10px rgba(0,0,0,0.4)",
      }}
    >
      {/* Vent slots top decoration */}
      <div className="absolute top-0 left-0 right-0 h-6 opacity-20"
        style={{ backgroundImage: "repeating-linear-gradient(180deg, transparent 0px, transparent 3px, rgba(255,255,255,0.12) 3px, rgba(255,255,255,0.12) 4px)" }} />

      {/* Screw corners */}
      {[["top-4 left-4"], ["top-4 right-4"], ["bottom-4 left-4"], ["bottom-4 right-4"]].map(([pos], i) => (
        <div key={i} className={`absolute ${pos} h-3 w-3 rounded-full opacity-60`}
          style={{ background: "radial-gradient(circle at 38% 38%, #6b7fa0 0%, #3a4560 55%, #1a2040 100%)", boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.6), inset -1px -1px 1px rgba(255,255,255,0.1)" }} />
      ))}

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container-custom relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="mb-8 inline-block">
              <Image src="/WhiteLogo.png" width={160} height={160} alt="Codemantix Collective"
                className=" h-12 w-auto" priority />
            </Link>

            {/* Status indicator bar */}
            <div className="mb-6 flex items-center gap-3 rounded-lg px-3 py-2"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "inset 1px 1px 3px rgba(0,0,0,0.3)" }}>
              <span className="h-2 w-2 rounded-full bg-orange-500 flex-shrink-0 animate-led-pulse"
                style={{ boxShadow: "0 0 4px #f97316, 0 0 10px rgba(249,115,22,0.6)" }} />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300"
                style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}>
                Systems Online â€” Version 2.0
              </span>
            </div>

            <p className="mb-8 text-sm leading-relaxed text-slate-300 mobile:text-xs">
              Transforming businesses through{" "}
              <span className="font-semibold text-blue-400">innovative technology solutions</span>.
              Enterprise-grade software, data analytics, and digital transformation services.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              {[
                { icon: EnvelopeIcon, text: "codemantixcollective@gmail.com" },
                { icon: PhoneIcon, text: "+234 812 312 1369" },
                { icon: MapPinIcon, text: "Nigeria" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(59,130,246,0.2)", boxShadow: "inset 1px 1px 3px rgba(0,0,0,0.4)" }}>
                    <Icon className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-sm text-slate-300" style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" style={{ boxShadow: "0 0 4px #f97316" }} />
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-300"
                style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}>Services</h4>
            </div>
            <ul className="space-y-2.5">
              {services.slice(0, 4).map((item) => (
                <li key={item.name} className="group flex items-center gap-2 text-sm text-slate-300 transition-colors duration-150 ">
                    <span className="h-px w-3 bg-slate-600 transition-colors duration-150" />
                    {item.name}
                </li>
              ))}
              <li >
                  <Link href={services[4].href} className="group flex items-center gap-2 text-sm text-slate-300 font-bold transition-colors duration-150 hover:text-blue-400">
                    <span className="h-px w-3 bg-slate-600 transition-colors duration-150 group-hover:bg-blue-500" />
                    {services[4].name}
                  </Link>
                </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" style={{ boxShadow: "0 0 4px #3b82f6" }} />
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-300"
                style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}>Company</h4>
            </div>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group flex items-center gap-2 text-sm text-slate-300 transition-colors duration-150 hover:text-blue-400">
                    <span className="h-px w-3 bg-slate-600 transition-colors duration-150 group-hover:bg-blue-500" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" style={{ boxShadow: "0 0 4px #60a5fa" }} />
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-300"
                style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}>Resources</h4>
            </div>
            <ul className="space-y-2.5">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group flex items-center gap-2 text-sm text-slate-300 transition-colors duration-150 hover:text-blue-400">
                    <span className="h-px w-3 bg-slate-600 transition-colors duration-150 group-hover:bg-blue-500" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

       

        {/* Bottom Bar */}
        <div className="relative flex flex-col items-center justify-between gap-6 py-8 md:flex-row"
          style={{ borderTop: "2px solid transparent", borderImage: "linear-gradient(90deg, rgba(0,0,0,0) 0px, rgba(59,130,246,0.2) 1px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0.06) 2px) 1" }}>

          <div className="text-xs text-slate-400" style={{ fontFamily: "ui-monospace, 'Fira Code', monospace" }}>
            Â© {new Date().getFullYear()} Codemantix Collective. All rights reserved.
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition-all duration-150 hover:text-blue-400"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "inset 1px 1px 3px rgba(0,0,0,0.3)" }}>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  {social.icon === "facebook" && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />}
                  {social.icon === "twitter" && <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />}
                  {social.icon === "instagram" && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />}
                  {social.icon === "linkedin" && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />}
                </svg>
              </a>
            ))}
          </div>

          {/* System status chips */}
          <div className="flex items-center gap-2">
            {["Secure", "Uptime 99.9%", "v2.0"].map((label) => (
              <span key={label} className="flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-400"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", fontFamily: "ui-monospace, monospace" }}>
                <span className="h-1 w-1 rounded-full bg-blue-500" style={{ boxShadow: "0 0 3px #3b82f6" }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
