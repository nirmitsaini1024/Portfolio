"use client";
import React from "react";

const Page = () => {
  return (
    <main className="flex flex-col justify-center bg-white dark:bg-zinc-900 px-4 sm:px-8 text-gray-900 dark:text-gray-100 antialiased overflow-hidden">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 text-black dark:text-white">
          Why Choose Next.js Over React.js?📚 
        </h1>
        <p className="text-gray-400 mb-6">
          Next.js extends the capabilities of React.js by providing built-in features like server-side rendering, static site generation, and API routes, which significantly improve performance, SEO, and the overall developer experience. Let's explore some of the key reasons why you should consider using Next.js over React.js for your next project.
        </p>
        
        <h2 className="font-bold text-2xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          1. Server-Side Rendering (SSR) & Static Site Generation (SSG)
        </h2>
        <p className="text-gray-400 mb-4">
          React.js relies on client-side rendering (CSR), meaning JavaScript runs in the browser to generate the UI. This can lead to slower initial page loads and SEO issues. Next.js solves this by offering:
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4">
          <li><strong>Server-Side Rendering (SSR)</strong>: The page is generated on the server per request, improving first-load performance. This is especially beneficial for content-heavy websites.
           </li>
          <li><strong>Static Site Generation (SSG)</strong>: Pages are pre-generated at build time, resulting in near-instant load times. </li>
        </ul>
        
        <h2 className="font-bold text-2xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          2. SEO Benefits
        </h2>
        <p className="text-gray-400 mb-4">
          Search engines struggle with indexing JavaScript-heavy client-rendered pages. Since Next.js pre-renders content, it ensures that search engines can easily crawl and index the site, improving visibility and ranking in search results.
        </p>
        
        <h2 className="font-bold text-2xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          3. Automatic Code Splitting
        </h2>
        <p className="text-gray-400 mb-4">
          Next.js automatically splits JavaScript bundles on a per-page basis. This ensures that only the necessary code is loaded when navigating through the application, reducing the initial load time and enhancing overall performance.
        </p>

        <h2 className="font-bold text-2xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          4. API Routes
        </h2>
        <p className="text-gray-400 mb-4">
          Next.js comes with built-in API routes, allowing developers to create backend logic without the need for an external backend service. This feature simplifies development and deployment by keeping frontend and backend code in the same project.
        </p>

        <h2 className="font-bold text-2xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          5. Image Optimization
        </h2>
        <p className="text-gray-400 mb-4">
          Next.js provides an optimized Image component that supports automatic lazy loading, modern formats like WebP, and responsive image sizing. This enhances website performance by reducing load times and bandwidth usage.
        </p>

        <h2 className="font-bold text-2xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          6. Incremental Static Regeneration (ISR)
        </h2>
        <p className="text-gray-400 mb-4">
          ISR enables Next.js to update static content dynamically without requiring a full site rebuild. This is useful for blogs, e-commerce stores, and other content-heavy websites that need frequent updates while maintaining fast performance.
        </p>
      </div>
    </main>
  );
};

export default Page;