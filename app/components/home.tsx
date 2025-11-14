"use client";
import { LinkPreview } from "@/components/ui/link-preview";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DownloadOutlined } from "@ant-design/icons";
import projects from "../data/projects.json";
import WorkExperience from "./work";

export default function HomeComponent() {
  return (
    <div className="bg-white dark:bg-zinc-900">
      <main className="flex flex-col justify-center bg-white dark:bg-zinc-900 px-8 text-gray-900 dark:text-gray-100 antialiased">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10">
            <div className="flex md:w-3/4 flex-col mt-6">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
                Nirmit{" "}
                <span
                  style={{
                    fontFamily: "'Pacifico', cursive",
                    fontWeight: 300,
                  }}
                >
                  Saini
                </span>
              </h1>
              <div className="relative leading-7 items-center flex-wrap text-zinc-700 dark:text-zinc-400 mb-5">
                Building
                <span className="inline-block px-2 py-0 font-bold bg-gray-100 dark:bg-zinc-700 dark:text-white  mx-1">
                  Full-Stack
                </span>
                projects, and other
                <span className="font-bold cursor-pointer text-zinc-800 dark:text-zinc-200">
                  {" "}
                  cool things.
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-500">
                Full-Stack Developer evolving into a
                <span className="font-bold cursor-pointer text-zinc-800 dark:text-zinc-200">
                  {" "}
                  Web3
                </span>{" "}
                Developer.
                <br />
                Find me on{" "}
                <LinkPreview
                  url="https://x.com/nirmit_saini"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                  twitter
                </LinkPreview>
                ,{" "}
                <LinkPreview
                  url="https://linkedin.com/in/nirmitsaini"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                  linkedIn
                </LinkPreview>{" "}
                for tech updates and memes.
              </p>
              <Button className="w-22 ml-1 mt-2" variant="secondary" asChild>
                <Link
                  href="https://drive.google.com/file/d/1JIsBCjrMfsiy_6RrY_5sF5JFUo_o0Wn8/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nirmit Saini Resume"
                >
                  <DownloadOutlined
                    style={{
                      marginRight: "8px",
                      marginLeft: "8px",
                      fontSize: "20px",
                    }}
                  />
                  Resume
                </Link>
              </Button>
            </div>

            <div className="relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
              <a
                href="https://x.com/nirmit_saini"
                target="_blank"
                rel="noopener noreferrer"
                className="block z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5 relative bg-white h-20 w-20"
              >
                <div className="relative h-full w-full">
                  <Image
                    src="/main-profile.webp"
                    alt="Nirmit Saini Profile"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition duration-500"
                    priority
                  />
                </div>
              </a>
              <div className="z-0">
                <div className="absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
                  <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
            <Cover> Projects</Cover>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.slice(0, 6).map((project, index) => (
              <div
                key={index}
                className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
              >
                <div className="pointer-events-none">
                  <div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/50 to-teal-100/50 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
                    style={{
                      maskImage:
                        "radial-gradient(300px at 7.08527px 243.082px, white, transparent)",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                    style={{
                      maskImage:
                        "radial-gradient(300px at 7.08527px 243.082px, white, transparent)",
                    }}
                  ></div>
                </div>
                <div className="relative h-full">
                  <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
                  <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
                  <div className="flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
                    <div className="my-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        {project.title}
                      </h4>
                      <p className="leading-6 pt-4 text-gray-700 dark:text-gray-300">
                        {project.description}
                      </p>
                      <div className="pt-4 flex md:flex-row flex-wrap">
                        {project.technologies.map((tech, techIndex) => (
                          <p
                            key={techIndex}
                            className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1"
                          >
                            {tech}
                          </p>
                        ))}
                      </div>
                      <Button variant="secondary">
                        <a
                          href={project.githubUrl}
                          aria-label={project.title}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github
                        </a>
                      </Button>
                      <Button variant="secondary" className="ml-2">
                        <a
                          href={project.liveDemoUrl}
                          aria-label={project.title}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/projects"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          >
            See More
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </Link>
          <WorkExperience />
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
            Recent Blogs
          </h3>
          <div className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200">
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between">
                <h4 className="text-base blog-heading md:text-base mb-2 w-full text-gray-900 dark:text-gray-100">
                  <a
                    href="/blog/promises-in-javascript"
                    aria-label="Promises in JavaScript: Complete Guide"
                  >
                    <b>Promises in JavaScript</b>
                    <p className="text-gray-500 dark:text-gray-400">
                      Master Promises from basics to advanced. Learn Promise states, methods, error handling, and patterns.
                    </p>
                  </a>
                </h4>
                <p className="flex justify-center items-center text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
                  15/11/2025
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200">
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between">
                <h4 className="text-base blog-heading md:text-base mb-2 w-full text-gray-900 dark:text-gray-100">
                  <a
                    href="/blog/state-vs-props"
                    aria-label="State vs Props in React: Complete Guide"
                  >
                    <b>State vs Props in React</b>
                    <p className="text-gray-500 dark:text-gray-400">
                      Learn when to use state vs props, why choose one over the
                      other, with practical examples.
                    </p>
                  </a>
                </h4>
                <p className="flex justify-center items-center text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
                  11/11/2025
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200">
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between">
                <h4 className="text-base blog-heading md:text-base mb-2 w-full text-gray-900 dark:text-gray-100">
                  <a
                    href="/blog/react-hooks"
                    aria-label="React Hooks Explained: Complete Guide"
                  >
                    <b>React Hooks Explained</b>
                    <p className="text-gray-500 dark:text-gray-400">
                      A comprehensive guide to React hooks including useState,
                      useEffect, custom hooks, and more.
                    </p>
                  </a>
                </h4>
                <p className="flex justify-center items-center text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
                  09/11/2025
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200">
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between">
                <h4 className="text-base blog-heading md:text-base mb-2 w-full text-gray-900 dark:text-gray-100">
                  <a href="/blog/javascript-concepts">
                    {" "}
                    <b> Javascript Concepts</b>
                    <p className="text-gray-500 dark:text-gray-400">
                      Practical concepts to revise before your your next
                      interview.
                    </p>
                  </a>
                </h4>
                <p className="flex justify-center items-center text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
                  15/01/2025{" "}
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200">
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between">
                <h4 className="text-base blog-heading md:text-base mb-2 w-full text-gray-900 dark:text-gray-100">
                  <a
                    href="/blog/react-over-nextjs"
                    aria-label="React.js vs Next.js: A detailed comparison"
                  >
                    <b>Next.js vs React.js </b>
                    <p className="text-gray-500 dark:text-gray-400">
                      Why Do We Need Next.js When React.js Already Exists?
                    </p>
                  </a>
                </h4>
                <p className="flex justify-center items-center text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
                  13/03/2025
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <achievement /> */}
      </main>
    </div>
  );
}
