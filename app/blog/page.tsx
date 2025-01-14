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
        <div
          className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200"
        >
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between">
              <h4 className="text-base blog-heading md:text-base mb-2 w-full text-gray-900 dark:text-gray-100">
                Coming Soon... Stay Tuned {" "}
                <a href="https://medium.com/@nirmitsaini24">Visit Medium</a>
              </h4>
              {/* <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
                  14,165 views
                </p> */}
            </div>
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          All Posts
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
      </div>
    </main>
  );
}
