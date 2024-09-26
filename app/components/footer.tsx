import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 px-6">
        <hr className="w-full border-1 border-gray-200 dark:border-gray-700 mb-8" />

        <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
          <div className="flex flex-col space-y-4">
            <Link
              className="text-gray-500 hover:text-gray-600 transition"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-600 transition"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-600 transition"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-600 transition"
              href="/contact"
            >
              Links
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <a
              className="text-gray-500 hover:text-gray-600 transition"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/nirmitsaini1024/"
            >
              GitHub
            </a>
            <a
              className="text-gray-500 hover:text-gray-600 transition"
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/nirmitsaini"
            >
              LinkedIn
            </a>
            <Link
              className="text-gray-500 hover:text-gray-600 transition"
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/nirmit_saini"
            >
              Twitter
            </Link>
            <a
              className="text-gray-500 hover:text-gray-600 transition"
              href="https://www.upwork.com/freelancers/~01c913229e5fa77119?mp_source=share"
            >
              Freelancing
            </a>
          </div>
        </div>

        <p className="flex flex-row text-gray-400 items-center">
          Find me on
          <a
            href="https://x.com/nirmit_saini"
            target="__blank"
            className="ml-1"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 mx-1"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </a>
        </p>

        <p className="flex flex-row text-gray-400 items-center mt-2">
          Portfolio inspired by Manu Arora
          <a
            href="https://ui.aceternity.com/"
            className="ml-1"
            target="__blank"
          >
            Aceternity UI
          </a>
        </p>
      </footer>
    </>
  );
}
