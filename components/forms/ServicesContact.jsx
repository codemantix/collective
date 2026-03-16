"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function ContactCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 py-24">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 80, -60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl"
        />
      </div>

      <div className="container relative mx-auto flex flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Left content */}
        <div className="flex-1 p-5 lg:p-0">
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-left">
            Ready to Start Your Project?
          </h2>
          <p className="mb-6 text-center text-lg text-white md:text-xl lg:text-left">
            Let’s work together to bring your ideas to life. Reach out today and we’ll create
            something amazing.
          </p>
          <Link href="/contact">
            <button className="mx-auto block rounded-lg bg-[#F97316] px-6 py-3 text-center font-semibold text-white transition hover:bg-orange-600 lg:mx-0">
              Reach out to us
            </button>
          </Link>
        </div>

        {/* Right image */}
        <motion.div
          className="flex w-full flex-1 items-center justify-center lg:w-[600px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <motion.div
            animate={{ y: [0, -20, 0, 20, 0] }}
            transition={{
              delay: 2, // start floating after 2 seconds
              duration: 6, // full float cycle duration
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/Images/Reachme.jpg"
              alt="Contact illustration"
              width={400}
              height={400}
              className="rounded-2xl object-cover shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
