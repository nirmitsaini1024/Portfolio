"use client";
import { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/");

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact me" }
  ];

  return (
    <>
      <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 mt-0 mb-0 md:mt-4 md:mb-10 mx-auto bg-white dark:bg-zinc-900/90 bg-opacity-60">
        <div></div>

        <div className="hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
              href={link.href}
              onClick={() => setActiveLink(link.href)}
            >
              <span
                className={`relative z-10 ${
                  activeLink === link.href ? "text-teal-600" : "text-gray-600 dark:text-gray-50"
                }`}
              >
                {link.label}
              </span>
              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
