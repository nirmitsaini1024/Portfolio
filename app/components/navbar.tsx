"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface NavLink {
  href: string;
  label: string;
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("");

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact me" },
  ];

  return (
    <>
      <nav className="ssticky-nav flex justify-between items-center max-w-4xl w-full p-8 mt-0 mb-0 md:mt-4 md:mb-10 mx-auto bg-white dark:bg-zinc-900 bg-opacity-60">
        <div></div>

        <div className="hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={`relative rounded-lg px-3 inline-block py-2 text-sm transition-all delay-150 ${
                activeLink === link.href
                  ? "text-teal-600"
                  : "text-gray-600 dark:text-gray-50"
              }`}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
              }}
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
            </a>
          ))}
        </div>

        <div className="block sm:hidden">
          <Mobile links={navLinks} setActiveLink={setActiveLink} />
        </div>
      </nav>
    </>
  );
}

const Mobile = ({
  links,
  setActiveLink,
}: {
  links: NavLink[];
  setActiveLink: (href: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const dropIn = {
    hidden: {
      y: "-4vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "4vh",
      opacity: 0,
    },
  };

  const handleClick = (link: NavLink) => {
    setActiveLink(link.href);
    router.push(link.href);
    setOpen(false);
  };

  return (
    <div className="w-full flex flex-row items-center space-x-2">
      {links.slice(0, 2).map((link) => (
        <button
          key={link.href}
          onClick={() => handleClick(link)}
          className="relative rounded-lg px-1 py-1 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
        >
          {link.label}
        </button>
      ))}

      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-black dark:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <AnimatePresence initial={false} mode="wait">
        {open && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 mx-auto top-20 flex flex-col w-[90%] p-4 rounded-lg shadow-xl z-[999] bg-white dark:bg-gray-800 divide-y dark:divide-gray-700"
          >
            {links.slice(2).map((el) => (
              <button
                key={el.href}
                onClick={() => handleClick(el)}
                className="relative font-bold px-1 py-4 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 text-left"
              >
                <span className="relative z-10">{el.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
