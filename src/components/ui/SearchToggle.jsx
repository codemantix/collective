"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
      setQuery("");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div className="relative">
      {/* Search Icon Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100/70 text-gray-600 backdrop-blur-sm transition-all duration-300 hover:bg-gray-200/70 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:bg-gray-800/70 dark:text-gray-400 dark:hover:bg-gray-700/70 dark:hover:text-gray-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Search"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <XMarkIcon className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="search"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Expanded Search Box */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={handleClose}
            />

            {/* Search Form */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                x: 20,
                y: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: 20,
                y: 10,
              }}
              transition={{
                duration: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute right-0 top-12 z-50 w-80 lg:w-96"
            >
              <div className="rounded-2xl border border-gray-200/50 bg-white/95 p-4 shadow-xl backdrop-blur-xl dark:border-gray-700/50 dark:bg-gray-900/95">
                <form onSubmit={handleSearch} className="space-y-3">
                  <div className="relative">
                    <input
                      ref={inputRef}
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search services, projects, team..."
                      className="w-full rounded-xl border border-gray-200/50 bg-gray-50/70 px-4 py-3 pl-11 pr-4 text-sm text-gray-700 transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300/70 focus:border-primary-500/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-600/50 dark:bg-gray-800/70 dark:text-gray-200 dark:placeholder:text-gray-500 dark:hover:border-gray-500/70 dark:focus:border-primary-400/50 dark:focus:bg-gray-800"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Press Enter to search</span>
                    <span>ESC to close</span>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Add keyboard shortcut handler
export function useSearchShortcut(onToggle) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K or Ctrl+K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onToggle();
      }
      // ESC to close
      if (e.key === "Escape") {
        onToggle(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onToggle]);
}
