
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [focusOpen, setFocusOpen] = useState(false);

  const focusSections = [
    "Ayurveda",
    "Keto",
    "Low Calorie",
    "High Calorie",
    "Anti-inflammatory",
    "Gut Health",
    "Muscle Building",
    "Hormone Friendly",
    "Detox / Clean Eating",
    "Seasonal Foods",
  ];

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-gray-200"
    >
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LEFT: Logo / Tagline */}
        <div className="flex items-center gap-2">
          <Link href="/" className="font-serif text-xl" id="logo">
            Active Participant
          </Link>
          <span className="hidden md:inline text-gray-500 text-sm">
           
          </span>
        </div>

        {/* CENTER: Core nav + Focus Sections */}
        <div className="hidden md:flex items-center gap-6 relative">
          <Link href="#" className="hover:text-[#3A5A40]">
            Home
          </Link>
          <Link href="#" className="hover:text-[#3A5A40]">
            Recipes
          </Link>
          <Link href="#" className="hover:text-[#3A5A40]">
            Challenges
          </Link>
          <Link href="#" className="hover:text-[#3A5A40]">
            Community
          </Link>

          {/* FOCUS SECTIONS DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setFocusOpen(!focusOpen)}
              className="px-4 py-2 rounded-full bg-[#3A5A40] text-white text-sm hover:opacity-90"
            >
              Focus Sections ▼
            </button>

            {focusOpen && (
              <div className="absolute top-full mt-2 w-60 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                {focusSections.map((section) => (
                  <Link
                    key={section}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm"
                  >
                    {section}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Personal / Profile */}
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-full text-sm border border-gray-300 hover:bg-white">
            Saved Recipes ❤️
          </button>
          <button className="px-4 py-2 rounded-full text-sm border border-gray-300 hover:bg-white">
            Saved Insights 📌
          </button>
          <button className="px-4 py-2 rounded-full text-sm bg-[#3A5A40] text-white hover:opacity-90 rounded-full">
            Profile ⚙️
          </button>
        </div>

      </nav>
    </header>
  );
}
