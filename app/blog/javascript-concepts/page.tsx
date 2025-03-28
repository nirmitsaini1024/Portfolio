"use client";
import React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import { closures } from "@/components/codeblocks/closures";
import { promises } from "@/components/codeblocks/promises";
import { async } from "@/components/codeblocks/asyncawait";
import {
  debouncing,
  eventdelegation,
  eventloop,
  hoisting,
  prototypes,
  Throttling,
} from "@/components/codeblocks";
import { higherorderfn } from "@/components/codeblocks/higher-order";
import { trycatch } from "@/components/codeblocks/try-catch";



const page = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <main className="flex flex-col justify-center bg-white dark:bg-zinc-900 px-4 sm:px-8 text-gray-900 dark:text-gray-100 antialiased overflow-hidden">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Javascript Concepts 📚
        </h1>
        <p className="text-gray-400 mb-4">
          I've compiled down all the popular concepts and questions related to a
          Javascript Interview. No matter at what level of understanding you're
          currently at, this will help you out.
        </p>
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Table of content
        </h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <a
              href="#closures"
              aria-label="Closures"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Closures
            </a>
          </li>
          <li>
            <a
              href="#promises-and-asynchronous"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Promises and Asynchronous
            </a>
          </li>
          <li>
            <a
              href="#async-await"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Async/Await
            </a>
          </li>
          <li>
            <a
              href="#event-loop-and-callbacks"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Event Loop
            </a>
          </li>
          <li>
            <a
              href="#hoisting-scope-and-execution-context"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Hoisting, Scope, and Execution Context
            </a>
          </li>
          <li>
            <a
              href="#prototypes-and-inheritance"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Prototypes and Inheritance
            </a>
          </li>
          <li>
            <a
              href="#Event-delegation"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Event delegation
            </a>
          </li>
          <li>
            <a
              href="#Debouncing-and-Throttling"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Debouncing and Throttling
            </a>
          </li>
          <li>
            <a
              href="#Higher-order-Functions"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Higher order Functions (Map, Filter, Reduce)
            </a>
          </li>
          <li>
            <a
              href="#Error-Handling"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Error Handling
            </a>
          </li>
        </ol>
        <h1
          id="closures"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          1. Closures
        </h1>
        <p className="text-gray-400 mb-4">
          Closures allow functions to access variables from their outer scope,
          even after the outer function has executed. This is often used to
          create private variables.
        </p>
        <CodeBlock
          language={closures.language}
          filename={closures.filename}
          highlightLines={closures.highlightLines}
          code={closures.code}
        />
        <h1
          id="promises-and-asynchronous"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          2. Promises and Asynchronous
        </h1>
        <p className="text-gray-400 mb-4">
          Promises are used to handle asynchronous operations in JavaScript,
          allowing you to write cleaner and more readable code.
        </p>
        <CodeBlock
          language={promises.language}
          filename={promises.filename}
          highlightLines={promises.highlightLines}
          code={promises.code}
        />
        <h1
          id="async-await"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          3. Async/Await
        </h1>
        <p className="text-gray-400 mb-4">
          Async/Await is a cleaner way to handle asynchronous code compared to
          Promises.
        </p>
        <CodeBlock
          language={async.language}
          filename={async.filename}
          highlightLines={async.highlightLines}
          code={async.code}
        />
        <h1
          id="event-loop-and-callbacks"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          4. Event Loop and Callbacks
        </h1>
        <p className="text-gray-400 mb-4">
          The event loop handles asynchronous operations by processing tasks
          from the callback queue.
        </p>
        <CodeBlock
          language={eventloop.language}
          filename={eventloop.filename}
          highlightLines={eventloop.highlightLines}
          code={eventloop.code}
        />
        <h1
          id="hoisting-scope-and-execution-context"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          5. Hoisting, Scope, and Execution Context
        </h1>
        <p className="text-gray-400 mb-4">
          Variables and functions are "hoisted" to the top of their scope.
          Understanding scope and execution context is key to avoiding bugs.
        </p>
        <CodeBlock
          language={hoisting.language}
          filename={hoisting.filename}
          highlightLines={hoisting.highlightLines}
          code={hoisting.code}
        />
        <h1
          id="prototypes-and-inheritance"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          6. Prototypes and Inheritance
        </h1>
        <p className="text-gray-400 mb-4">
          Prototypes enable inheritance in JavaScript, allowing objects to share
          methods and properties.
        </p>
        <CodeBlock
          language={prototypes.language}
          filename={prototypes.filename}
          highlightLines={prototypes.highlightLines}
          code={prototypes.code}
        />
        <h1
          id="Event-delegation"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          7. Event Delegation
        </h1>
        <p className="text-gray-400 mb-4">
          Event delegation uses a single event listener for multiple child
          elements, improving performance.
        </p>
        <CodeBlock
          language={eventdelegation.language}
          filename={eventdelegation.filename}
          highlightLines={eventdelegation.highlightLines}
          code={eventdelegation.code}
        />
        <h1
          id="Debouncing-and-Throttling"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          8. Debouncing and Throttling
        </h1>
        <p className="text-gray-400 mb-4">
          <b>Debouncing:</b> Delays execution until after a specified time has
          elapsed.
        </p>
        <CodeBlock
          language={debouncing.language}
          filename={debouncing.filename}
          highlightLines={debouncing.highlightLines}
          code={debouncing.code}
        />
        <p className="text-gray-400 mb-4">
          <b>Throttling:</b> Ensures a function is called at most once in a
          specified interval.
        </p>
        <CodeBlock
          language={Throttling.language}
          filename={Throttling.filename}
          highlightLines={Throttling.highlightLines}
          code={Throttling.code}
        />
        <h1
          id="Higher-order-Functions"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          9. Higher-order Functions
        </h1>
        <p className="text-gray-400 mb-4">
          Higher-order functions like map, filter, and reduce simplify array
          manipulation and functional programming.
        </p>
        <CodeBlock
          language={higherorderfn.language}
          filename={higherorderfn.filename}
          highlightLines={higherorderfn.highlightLines}
          code={higherorderfn.code}
        />
        <h1
          id="Error-Handling"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          10. Error Handling
        </h1>
        <p className="text-gray-400 mb-4">
          Handle errors gracefully using try-catch blocks to ensure your code
          doesn't crash unexpectedly.
        </p>
        <CodeBlock
          language={trycatch.language}
          filename={trycatch.filename}
          highlightLines={trycatch.highlightLines}
          code={trycatch.code}
        />
      </div>
    </main>
  );
};

export default page;
