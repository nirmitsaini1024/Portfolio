import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import fullStackProjects from "../data/projects.json";
import featuredProjects from "../data/featured.json";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col justify-center bg-white dark:bg-zinc-900 px-8 text-gray-900 dark:text-gray-100 antialiased">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I’ve developed commercial projects as well as hobby projects. All
          projects are included (along with course related projects) here.
          –&nbsp;
          <a className="text-blue-500 hover:underline" href="/blog">
            checkout my blog&nbsp;
          </a>
          while you're here. I write about technology, learning, and memes.
        </h2>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          <Cover>Full-Stack</Cover>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fullStackProjects.map((project, index) => (
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
              </div>
              <div className="relative h-full">
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

        {/* Featured Projects Section */}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-6 text-black dark:text-white">
          Featured
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredProjects.map((project, index) => (
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
              </div>
              <div className="relative h-full">
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
                        href={project.github}
                        aria-label={project.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </Button>
                    <Button variant="secondary" className="ml-2">
                      <a
                        href={project.liveDemo}
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
      </div>
    </main>
  );
}
