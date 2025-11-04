"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // sending/success/error

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-gray-100 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:gap-12 md:p-8 lg:grid-cols-2 lg:p-10">
        {/* Left - Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-600 dark:border-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
              <EnvelopeIcon className="h-4 w-4" />
              Get In Touch
            </span>
          </div>
          <h2 className="mb-6 text-center text-2xl font-bold leading-tight text-primary-900 dark:text-white sm:text-4xl md:text-5xl lg:text-left">
            Send Us a{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Message
            </span>
          </h2>
          <p className="text-lg mobile:text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">
            We would love to hear from you! Whether it's a project idea, a collaboration, or just to
            say hello, send us a message and we'll get back to you promptly.
          </p>

          {/* Contact Info Cards */}
          <div className="mt-8 space-y-4">
            <Link href="mailto:info@codemantixcollective.com" className="block">
              <div className="flex cursor-pointer items-center space-x-4 rounded-xl border border-primary-100 bg-primary-50 p-4 text-lg font-medium text-primary-900 transition-all duration-300 hover:border-primary-200 hover:bg-primary-100 hover:scale-105 dark:border-primary-700 dark:bg-primary-900/50 dark:text-white dark:hover:border-primary-600 dark:hover:bg-primary-800/50">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-secondary-500 to-secondary-600">
                  <EnvelopeIcon className="h-6 w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 text-sm  text-gray-600 dark:text-gray-400">Email us at</div>
                  <span className="break-all mobile:text-xs text-sm sm:text-base">
                    info@codemantixcollective.com
                  </span>
                </div>
              </div>
            </Link>

            <Link href="tel:+2348123121369" className="block">
              <div className="flex cursor-pointer items-center space-x-4 rounded-xl border border-accent-100 bg-accent-50 p-4 text-lg font-medium text-primary-900 transition-all duration-300 hover:border-accent-200 hover:bg-accent-100 hover:scale-105 dark:border-accent-700 dark:bg-accent-900/50 dark:text-white dark:hover:border-accent-600 dark:hover:bg-accent-800/50">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-accent-500 to-accent-600">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 text-sm text-gray-600 dark:text-gray-400">Call us at</div>
                  <span className="text-sm mobile:text-xs sm:text-base">+234 812 312 1369</span>
                </div>
              </div>
            </Link>
            <div className="flex cursor-pointer items-center space-x-4 rounded-xl border border-primary-100 bg-primary-50 p-4 text-lg font-medium text-primary-900 transition-all duration-300 hover:border-primary-200 hover:bg-primary-100 hover:scale-105 dark:border-primary-700 dark:bg-primary-900/50 dark:text-white dark:hover:border-primary-600 dark:hover:bg-primary-800/50">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700">
                <MapPinIcon className="h-6 w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 text-sm text-gray-600 dark:text-gray-400">Visit us at</div>
                <span className="text-sm mobile:text-xs sm:text-base">Enugu, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="space-y-6">
          <div className="mb-6">
            <h3 className="mb-2 text-xl font-bold text-primary-900 dark:text-white sm:text-2xl">
              Start the Conversation
            </h3>
            <p className="text-gray-600 mobile:text-sm dark:text-gray-300">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm mobile:text-xs font-semibold text-gray-700 dark:text-gray-300">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                placeholder="David Smith"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 p-4 transition-all duration-300 hover:bg-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:hover:bg-gray-600 dark:focus:border-primary-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm mobile:text-xs font-semibold text-gray-700 dark:text-gray-300">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                placeholder="davesmith@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 p-4 transition-all duration-300 hover:bg-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:hover:bg-gray-600 dark:focus:border-primary-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm mobile:text-xs font-semibold text-gray-700 dark:text-gray-300">
                Your Message *
              </label>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell us about your project or how we can help you..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 p-4 transition-all duration-300 hover:bg-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:hover:bg-gray-600 dark:focus:border-primary-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full transform rounded-xl py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] ${status === "sending"
                  ? "cursor-not-allowed bg-secondary-300"
                  : "bg-gradient-to-r from-secondary-500 to-secondary-600 shadow-lg hover:from-secondary-600 hover:to-secondary-700 hover:shadow-xl"
                }`}
              disabled={
                !formData.name.trim() ||
                !formData.email.trim() ||
                !formData.message.trim() ||
                status === "sending"
              }
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-accent-200 bg-gradient-to-r from-accent-50 to-accent-100 px-6 py-4 font-medium text-accent-700 shadow-md"
              >
                ✅ Your message has been sent successfully! We'll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-red-200 bg-gradient-to-r from-red-50 to-red-100 px-6 py-4 font-medium text-red-700 shadow-md"
              >
                ❌ Something went wrong. Please try again or contact us directly.
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
