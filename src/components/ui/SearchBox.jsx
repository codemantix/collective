"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBox({ placeholder = "Search...", className = "" }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to search results page (you'll need to create this)
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <div className="group relative">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-gray-200/50 bg-gray-50/70 px-4 py-2.5 pl-10 pr-4 text-sm text-gray-700 backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300/70 hover:bg-white/80 focus:border-primary-500/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-600/50 dark:bg-gray-800/70 dark:text-gray-200 dark:placeholder:text-gray-500 dark:hover:border-gray-500/70 dark:hover:bg-gray-700/80 dark:focus:border-primary-400/50 dark:focus:bg-gray-800 dark:focus:ring-primary-400/20"
          aria-label="Search"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-4 w-4 text-gray-400 transition-colors group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400" />
        </div>
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 opacity-0 transition-all duration-200 hover:text-primary-600 focus:opacity-100 group-hover:opacity-100 dark:hover:text-primary-400"
          aria-label="Search"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
