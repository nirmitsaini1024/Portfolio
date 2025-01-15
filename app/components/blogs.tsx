import React from "react";

const blogs = () => {
  return (
    <div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Most Popular
      </h3>
      <div className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-base blog-heading md:text-base mb-2 w-full text-gray-900 dark:text-gray-100">
              <a href="/blog/javascript-concepts">
                {" "}
                Javascript Concepts - Practical concepts to revise before your
                your next interview.
              </a>
            </h4>
            <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
                  14,165 views
                </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogs;
