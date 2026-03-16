"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ContactCTASection() {
  const textVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#1E3A8A] to-[#1E40AF] py-20 text-white"
      id="contact-cta"
    >
      {/* Floating/Parallax Shapes */}
      <motion.div
        className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#10B981]/30 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-[#F97316]/30 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 top-1/2 h-24 w-24 rounded-full bg-[#64748B]/20 blur-2xl"
        animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Container */}
      <div className="container relative mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">
          {/* Left Column: Image */}
          <motion.div
            className="flex justify-center lg:w-1/2"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full rounded-3xl bg-white shadow-xl">
              <Image
                src="/Images/Contact.jpg"
                alt="Contact illustration"
                width={800}
                height={800}
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column: Text & CTA */}
          <motion.div
            className="text-center lg:w-1/2 lg:text-left"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="mb-4 text-4xl font-bold leading-tight md:text-4xl lg:text-[45px]">
              Let’s Bring Your Vision to Life
            </h2>
            <p className="mb-6 text-lg text-gray-100 md:text-xl">
              Have a project in mind or just want to chat? Our team is ready to help you create
              solutions that make an impact.
            </p>
            <Link
              href="/contact"
              className="inline-block transform rounded-md bg-[#F97316] px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[#F75A16]"
            >
              Reach Out Today
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
