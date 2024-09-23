import { Cover } from "@/components/ui/cover";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col justify-center bg-white dark:bg-zinc-900 px-8 text-gray-900 dark:text-gray-100 antialiased">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {" "}
          Projects
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I’ve developed commercial projects as well as hobby projects. All
          projects are included (along with course related projects) here.
          –&nbsp;
          <a className="text-blue-500 hover:underline" href="/blog">
            checkout my blog&nbsp;
          </a>
          while you're here.I write about technology, learning and memes.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          <Cover>Full-Stack</Cover>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <a
            className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
            href="#"
            aria-label="Moonbeam"
            target="_blank"
            rel="noopener noreferrer"
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
                  <img loading="lazy" src="/screenzy-1726205184216.png" alt="" />
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
                </div>
              </div>
            </div>
          </a>
          <a
            className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
            href="https://gomoonbeam.com"
            aria-label="Moonbeam"
            target="_blank"
            rel="noopener noreferrer"
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
                  <img src="/screenzy-1726205184216.png" alt="" />
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
                </div>
              </div>
            </div>
          </a> */}
          <a
            className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
            href="#"
            aria-label="Moonbeam"
            target="_blank"
            rel="noopener noreferrer"
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
                  <img src="/screenzy-1726205184216.png" alt="" loading="lazy"/>
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
                </div>
              </div>
            </div>
          </a>
          <a
            className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
            href="https://admin-dashboard-nirmitsaini.vercel.app/"
            aria-label="Moonbeam"
            target="_blank"
            rel="noopener noreferrer"
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
                  <img src="/1718182423074.jpeg" alt="" loading="lazy"/>
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
                      syncfusion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          <Cover>Featured</Cover>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
            href="https://supernalaero-clone.netlify.app/"
            aria-label="Moonbeam"
            target="_blank"
            rel="noopener noreferrer"
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
                  <img src="/screenzy-1726210398661.png" alt="" loading="lazy"/>
                </div>
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    Supernal.aero Clone
                  </h4>
                  <p className="leading-6 pt-4 text-gray-700 dark:text-gray-300">
                    Never write from scratch again. Kickstart your next great
                    writing piece with Moonbeam. Your long-form writing AI
                    assistant.
                  </p>
                  <div className="pt-4 flex md:flex-row flex-wrap">
                    <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1">
                      JavaScript
                    </p>
                    <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1">
                      GSAP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
            href="https://supernalaero-clone.netlify.app/"
            aria-label="Moonbeam"
            target="_blank"
            rel="noopener noreferrer"
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
                  <img src="/surch.png" alt="" loading="lazy"/>
                </div>
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    Surch AI
                  </h4>
                  <p className="leading-6 pt-4 text-gray-700 dark:text-gray-300">
                    Never write from scratch again. Kickstart your next great
                    writing piece with Moonbeam. Your long-form writing AI
                    assistant.
                  </p>
                  <div className="pt-4 flex md:flex-row flex-wrap">
                    <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1">
                      NextJs
                    </p>
                    <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1">
                      Clerk Auth
                    </p>
                    <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1">
                      Aceternity UI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
