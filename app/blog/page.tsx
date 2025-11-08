export const metadata = {
  title: "Nirmit Saini Blogs",
  description:
    "Explore insightful blogs by Nirmit Saini on Web development, and Blockchain technology.",
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function BlogPage() {
  return (
    <main className="flex flex-col justify-center bg-white dark:bg-zinc-900 px-8 text-gray-900 dark:text-gray-100 antialiased">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I've been programming for almost 2+ years now. Throughout this year,
          I've worked with various technologies. I'm here to share just that.
        </p>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Most Popular
        </h3>
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
                    Learn when to use state vs props, why choose one over the other, with practical examples.
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
                    A comprehensive guide to React hooks including useState, useEffect, custom hooks, and more.
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
        <div className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200">
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between">
              <h4 className="text-base blog-heading md:text-base mb-2 w-full text-gray-900 dark:text-gray-100">
                <a
                  href="/blog/javascript-concepts"
                  aria-label="Learn practical JavaScript concepts for interview preparation"
                >
                  <b>JavaScript Concepts</b>
                  <p className="text-gray-500 dark:text-gray-400">
                    Practical concepts to revise before your next interview.
                  </p>
                </a>
              </h4>
              <p className="flex justify-center items-center text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
                15/01/2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
