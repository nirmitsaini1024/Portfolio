"use client";
import { LinkPreview } from "@/components/ui/link-preview";
import StackIcon from "tech-stack-icons";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DownloadOutlined } from "@ant-design/icons";
import { Footer } from "./footer";

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
                  style={{ fontFamily: "'Pacifico', cursive", fontWeight: 300 }}
                >
                  Saini
                </span>
              </h1>
              <div className="relative leading-7 items-center flex-wrap text-zinc-700 dark:text-zinc-400 mb-5">
                Building
                <a
                  className="inline-block px-2 py-0 font-bold bg-gray-100 dark:bg-zinc-700 dark:text-white  mx-1"
                  href=""
                  target="__blank"
                >
                  Full-Stack
                </a>
                projects , and other
                <span className="font-bold cursor-pointer text-zinc-800 dark:text-zinc-200">
                  {" "}
                  cool things
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-500">
                Software Developer building web apps and SaaS products. Find me
                on{" "}
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
                  href="/NIRMIT SAINI RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
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
                    src="/1680539787022.jpeg" // Adjust the path according to your public folder structure
                    alt="Profile"
                    fill // This replaces the deprecated layout="fill"
                    style={{ objectFit: "cover" }} // Replaces objectFit="cover"
                    className="transition duration-500"
                    loading="lazy"
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
            <div className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full">
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
                      src="/screenzy-1726205184216.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                      Setup Your Blog in Minutes
                    </h4>
                    <p className="leading-6 pt-4 text-gray-700 dark:text-gray-300">
                      Never write from scratch again. Kickstart your next great
                      writing piece with Moonbeam. Your long-form writing AI
                      assistant.
                    </p>
                    <div className="pt-4 flex md:flex-row flex-wrap">
                      <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1">
                        Next.js
                      </p>
                      <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1">
                        Prisma
                      </p>
                      <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1">
                        Zod
                      </p>
                      <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1">
                        Shadcn ui
                      </p>
                      <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1">
                        TailwindCSS
                      </p>
                      <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1">
                        Uploadthing
                      </p>
                    </div>
                    <Button variant="secondary">
                      <a
                        href="https://gomoonbeam.com"
                        aria-label="Moonbeam"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </Button>
                    <Button variant="secondary" className="ml-2">
                      <a
                        href="https://admin-dashboard-nirmitsaini.vercel.app/"
                        aria-label="Moonbeam"
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

            <div className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full">
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
                    <img src="/1718182423074.jpeg" alt="" loading="lazy" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                      Admin Dashboard
                    </h4>
                    <p className="leading-6 pt-4 text-gray-700 dark:text-gray-300">
                      Never write from scratch again. Kickstart your next great
                      writing piece with Moonbeam. Your long-form writing AI
                      assistant.
                    </p>
                    <div className="pt-4 flex md:flex-row flex-wrap">
                      <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1">
                        React.js
                      </p>
                      <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1">
                        Syncfusion
                      </p>
                      <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1">
                        TailwindCSS
                      </p>
                    </div>
                    <Button variant="secondary">
                      <a
                        href="https://gomoonbeam.com"
                        aria-label="Moonbeam"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </Button>
                    <Button variant="secondary" className="ml-2">
                      <a
                        href="https://admin-dashboard-nirmitsaini.vercel.app/"
                        aria-label="Moonbeam"
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
          </div>
          <a
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
            href="/projects"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </a>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
            {" "}
            Upcoming Projects{" "}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              className="group mb-4 hover:shadow-lg rounded-xl transition-all duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
              href="#"
              aria-label="More projects coming soon.."
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/50 to-teal-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"></div>
              </div>
              <div className="relative h-full p-4">
                <h4 className="text-lg font-bold tracking-tight text-gray-400 dark:text-gray-100">
                  More projects coming soon..
                </h4>
                <p className="leading-7 text-gray-500 dark:text-gray-300">
                  I get ideas all day 🙄, All of them are updated here as soon
                  as I start working on them.
                </p>
              </div>
            </a>
          </div>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
            Work Experience
          </h3>
          <div className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200">
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-auto mb-4">
                  <h4 className="text-base blog-heading md:text-base mb-2 text-gray-900 dark:text-gray-100">
                    👨🏻‍💻 Upwork Freelancer
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    This is the paragraph you want to add below the heading. You
                    can add more content or a description here.
                  </p>
                </div>
                <p className="text-gray-500 text-left md:text-right whitespace-nowrap mb-4 md:mb-0">
                  Oct 2023 - Aug 2024
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200">
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-auto mb-4">
                  <h4 className="text-base blog-heading md:text-base mb-2 text-gray-900 dark:text-gray-100">
                    👨🏻‍💻 Web Developer Lead
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    To promote the importance of open source development among
                    club members and students, encouraging contributions to
                    meaningful projects and participation in external open
                    source initiatives.
                  </p>
                </div>
                <p className="text-gray-500 text-left md:text-right whitespace-nowrap mb-4 md:mb-0">
                  Oct 2023 - Aug 2024
                </p>
              </div>
            </div>
          </div>

          {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
            Tech Stacks
          </h3>
          <div className="relative leading-7 items-center flex-wrap text-zinc-700 dark:text-zinc-400 mb-5">
            Some technologies I've been working with recently
            <div className="flex space-x-5">
              <div className="w-32 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg w-32 h-32"
                    src="/87022.jpeg"
                    alt="Small Image"
                  />
                </a>
              </div>
              <div className="w-32 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg w-32 h-32"
                    src="/pngwing.com (8).png"
                    alt="Small Image"
                  />
                </a>
              </div>
              <div className="w-32 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg w-32 h-32"
                    src="/pngwing.com (7).png"
                    alt="Small Image"
                  />
                </a>
              </div>
              <div className="w-32 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg w-32 h-32"
                    src="/pngwing.com (7).png"
                    alt="Small Image"
                  />
                </a>
              </div>
            </div>
          </div> */}
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
            Recent Blogs
          </h3>
          <a
            className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200"
            href="/blog/ace-the-javascript-interview"
          >
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between">
                <h4 className="text-base blog-heading md:text-base mb-2 w-full text-gray-900 dark:text-gray-100">
                  Coming Soon... Stay Tuned
                </h4>
                {/* <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
                  14,165 views
                </p> */}
              </div>
            </div>
          </a>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
            {" "}
            Life Changelog and Updates
          </h3>
          {/* <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
            {" "}
            2024
          </h3>
          <ul>
            <li className="mb-4 ml-2">
              <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
                <span className="sr-only">Check</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="text-blue-500 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                </svg>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  Btech in ECE🤌🏻
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-400 ml-6">
                <a href="https://algochurn.com" target="__blank">
                  Algochurn
                </a>{" "}
                FET GKV Haridwar
              </p>
            </li>
          </ul> */}
          {/* <div className="border border-gray-200 dark:border-gray-600 w-full my-8"></div> */}
          <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
            {" "}
            2023
          </h3>
          <ul>
            <li className="mb-4 ml-2">
              <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
                <span className="sr-only">Check</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="text-blue-500 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                </svg>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  Developed interest in Web Development 🤌🏻
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-400 ml-6">
                <a href="https://algochurn.com" target="__blank">
                  Algochurn
                </a>{" "}
                crossed 300 users and I couldn't be any happier.
              </p>
            </li>
          </ul>
          <ul>
            <li className="mb-4 ml-2">
              <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
                <span className="sr-only">Check</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="text-blue-500 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                </svg>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  Started College
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-400 ml-6">
                Opted for Electronics and Communication B.Tech Degree from
                Faculty of Engineering and Technology, GKV Haridwar.
              </p>
            </li>
          </ul>

          <div className="border border-gray-200 dark:border-gray-600 w-full my-8"></div>
          <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
            {" "}
            2021
          </h3>
          <ul>
            <li className="mb-4 ml-2">
              <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
                <span className="sr-only">Check</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="text-blue-500 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                </svg>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  Completed 12th Grade📜
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-400 ml-6">
                Delhi Public School, Dehradun
              </p>
            </li>
          </ul>
        </div>
        {/* <Footer /> */}
      </main>
    </div>
  );
}
