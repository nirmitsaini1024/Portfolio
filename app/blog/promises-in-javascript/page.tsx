"use client";
import React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import {
  promiseBasics,
  promiseStates,
  promiseThenCatch,
  promiseChaining,
  promiseAll,
  promiseAdvanced,
  promiseErrorHandling,
} from "@/components/codeblocks";

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
          Promises in JavaScript ⏳
        </h1>
        <p className="text-gray-400 mb-4">
          Most people jump straight into <code>async/await</code> without
          understanding what a Promise really is. A <b>Promise</b> is just an
          object that represents a value you'll get later. It has three states:
          <b> pending</b>, <b>fulfilled</b>, and <b>rejected</b>.
        </p>
        <p className="text-gray-400 mb-4">
          This guide will take you from the basics to advanced Promise patterns,
          helping you understand the foundation of asynchronous JavaScript
          before diving into async/await.
        </p>
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Table of content
        </h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <a
              href="#what-is-a-promise"
              aria-label="What is a Promise"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              What is a Promise?
            </a>
          </li>
          <li>
            <a
              href="#promise-states"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              The Three States of a Promise
            </a>
          </li>
          <li>
            <a
              href="#creating-promises"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Creating Promises
            </a>
          </li>
          <li>
            <a
              href="#then-catch-finally"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Using .then(), .catch(), and .finally()
            </a>
          </li>
          <li>
            <a
              href="#promise-chaining"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Promise Chaining
            </a>
          </li>
          <li>
            <a
              href="#promise-methods"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Promise.all(), Promise.race(), and Promise.allSettled()
            </a>
          </li>
          <li>
            <a
              href="#error-handling"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Error Handling in Promises
            </a>
          </li>
          <li>
            <a
              href="#advanced-patterns"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Advanced Promise Patterns
            </a>
          </li>
        </ol>

        <h1
          id="what-is-a-promise"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          1. What is a Promise?
        </h1>
        <p className="text-gray-400 mb-4">
          A <b>Promise</b> is a JavaScript object that represents the eventual
          completion (or failure) of an asynchronous operation and its resulting
          value. Think of it as a placeholder for a value that will be
          available in the future.
        </p>
        <p className="text-gray-400 mb-4">
          <b>Key Points:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>
            A Promise is an <b>object</b>, not a function or a value
          </li>
          <li>
            It represents a value that will be available <b>later</b>
          </li>
          <li>
            It helps you handle <b>asynchronous operations</b> more elegantly
            than callbacks
          </li>
          <li>
            Once a Promise is settled (fulfilled or rejected), its state cannot
            change
          </li>
        </ul>
        <CodeBlock
          language={promiseBasics.language}
          filename={promiseBasics.filename}
          highlightLines={promiseBasics.highlightLines}
          code={promiseBasics.code}
        />

        <h1
          id="promise-states"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          2. The Three States of a Promise
        </h1>
        <p className="text-gray-400 mb-4">
          Every Promise has one of three states:
        </p>
        <div className="space-y-4 mb-4">
          <div className="p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg border border-gray-200 dark:border-zinc-700">
            <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
              1. Pending
            </h3>
            <p className="text-gray-400">
              The initial state. The Promise is neither fulfilled nor rejected.
              It's waiting for the asynchronous operation to complete.
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
              2. Fulfilled (Resolved)
            </h3>
            <p className="text-gray-400">
              The operation completed successfully. The Promise has a resulting
              value.
            </p>
          </div>
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
              3. Rejected
            </h3>
            <p className="text-gray-400">
              The operation failed. The Promise has a reason for the failure.
            </p>
          </div>
        </div>
        <p className="text-gray-400 mb-4">
          <b>Important:</b> Once a Promise transitions from pending to either
          fulfilled or rejected, it cannot change states again. It's immutable.
        </p>
        <CodeBlock
          language={promiseStates.language}
          filename={promiseStates.filename}
          highlightLines={promiseStates.highlightLines}
          code={promiseStates.code}
        />

        <h1
          id="creating-promises"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          3. Creating Promises
        </h1>
        <p className="text-gray-400 mb-4">
          You create a Promise using the <code>new Promise()</code> constructor,
          which takes an executor function with two parameters: <code>resolve</code> and <code>reject</code>.
        </p>
        <p className="text-gray-400 mb-4">
          <b>Executor Function:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>
            <code>resolve(value)</code> - Call this when the operation succeeds
          </li>
          <li>
            <code>reject(reason)</code> - Call this when the operation fails
          </li>
          <li>The executor runs immediately when the Promise is created</li>
        </ul>
        <p className="text-gray-400 mb-4">
          <b>Quick Promise Creation:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>
            <code>Promise.resolve(value)</code> - Creates an immediately
            fulfilled Promise
          </li>
          <li>
            <code>Promise.reject(reason)</code> - Creates an immediately
            rejected Promise
          </li>
        </ul>

        <h1
          id="then-catch-finally"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          4. Using .then(), .catch(), and .finally()
        </h1>
        <p className="text-gray-400 mb-4">
          These are the three main methods for handling Promises:
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-2">
          <li>
            <b>.then(onFulfilled, onRejected)</b> - Handles fulfilled promises.
            Returns a new Promise, allowing chaining.
          </li>
          <li>
            <b>.catch(onRejected)</b> - Handles rejected promises. It's
            essentially <code>.then(null, onRejected)</code>.
          </li>
          <li>
            <b>.finally(onFinally)</b> - Executes regardless of the outcome
            (fulfilled or rejected). Useful for cleanup.
          </li>
        </ul>
        <CodeBlock
          language={promiseThenCatch.language}
          filename={promiseThenCatch.filename}
          highlightLines={promiseThenCatch.highlightLines}
          code={promiseThenCatch.code}
        />

        <h1
          id="promise-chaining"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          5. Promise Chaining
        </h1>
        <p className="text-gray-400 mb-4">
          One of the most powerful features of Promises is <b>chaining</b>. Since
          <code>.then()</code> returns a new Promise, you can chain multiple
          operations together.
        </p>
        <p className="text-gray-400 mb-4">
          <b>How Chaining Works:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>Each <code>.then()</code> returns a new Promise</li>
          <li>
            The return value of a <code>.then()</code> callback becomes the
            resolved value of the next Promise
          </li>
          <li>Errors propagate down the chain until caught by a <code>.catch()</code></li>
          <li>This allows you to perform sequential asynchronous operations</li>
        </ul>
        <CodeBlock
          language={promiseChaining.language}
          filename={promiseChaining.filename}
          highlightLines={promiseChaining.highlightLines}
          code={promiseChaining.code}
        />

        <h1
          id="promise-methods"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          6. Promise.all(), Promise.race(), and Promise.allSettled()
        </h1>
        <p className="text-gray-400 mb-4">
          These static methods help you work with multiple Promises:
        </p>
        <div className="space-y-4 mb-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
              Promise.all([...promises])
            </h3>
            <p className="text-gray-400 mb-2">
              Waits for <b>all</b> promises to resolve. Returns an array of
              results in the same order.
            </p>
            <p className="text-gray-400">
              <b>Fails fast:</b> If any promise rejects, the entire
              <code>Promise.all()</code> rejects immediately.
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
              Promise.race([...promises])
            </h3>
            <p className="text-gray-400 mb-2">
              Returns the first promise that settles (fulfills or rejects).
            </p>
            <p className="text-gray-400">
              <b>Use case:</b> Timeout patterns, getting the fastest response.
            </p>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
              Promise.allSettled([...promises])
            </h3>
            <p className="text-gray-400 mb-2">
              Waits for <b>all</b> promises to settle (fulfill or reject).
            </p>
            <p className="text-gray-400">
              <b>Never rejects:</b> Returns results for all promises, regardless
              of outcome. Useful when you need partial results.
            </p>
          </div>
        </div>
        <CodeBlock
          language={promiseAll.language}
          filename={promiseAll.filename}
          highlightLines={promiseAll.highlightLines}
          code={promiseAll.code}
        />

        <h1
          id="error-handling"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          7. Error Handling in Promises
        </h1>
        <p className="text-gray-400 mb-4">
          Proper error handling is crucial when working with Promises. Errors can
          occur in several places:
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>In the executor function (reject is called)</li>
          <li>In a <code>.then()</code> callback (throws an error)</li>
          <li>In a rejected Promise</li>
        </ul>
        <p className="text-gray-400 mb-4">
          <b>Key Points:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>
            Errors propagate down the chain until caught by a <code>.catch()</code>
          </li>
          <li>
            A single <code>.catch()</code> can handle errors from multiple
            <code>.then()</code> calls
          </li>
          <li>
            Always handle promise rejections to avoid "UnhandledPromiseRejectionWarning"
          </li>
          <li>
            <code>Promise.allSettled()</code> is useful when you want partial
            results even if some promises fail
          </li>
        </ul>
        <CodeBlock
          language={promiseErrorHandling.language}
          filename={promiseErrorHandling.filename}
          highlightLines={promiseErrorHandling.highlightLines}
          code={promiseErrorHandling.code}
        />

        <h1
          id="advanced-patterns"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          8. Advanced Promise Patterns
        </h1>
        <p className="text-gray-400 mb-4">
          Once you understand the basics, you can use Promises to solve complex
          problems:
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-2">
          <li>
            <b>Retry Pattern:</b> Automatically retry failed operations
          </li>
          <li>
            <b>Sequential Processing:</b> Process items one at a time using
            <code>reduce()</code>
          </li>
          <li>
            <b>Promise Pool:</b> Limit concurrent operations
          </li>
          <li>
            <b>Cancellable Promises:</b> Cancel long-running operations
          </li>
          <li>
            <b>Converting Callbacks:</b> Wrap callback-based APIs in Promises
          </li>
        </ul>
        <CodeBlock
          language={promiseAdvanced.language}
          filename={promiseAdvanced.filename}
          highlightLines={promiseAdvanced.highlightLines}
          code={promiseAdvanced.code}
        />

        <div className="mt-12 p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg border border-gray-200 dark:border-zinc-700">
          <h2 className="font-bold text-xl mb-4 text-black dark:text-white">
            Key Takeaways
          </h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>
              A Promise is an <b>object</b> representing a future value, not the
              value itself
            </li>
            <li>
              Promises have three states: <b>pending</b>, <b>fulfilled</b>, and
              <b>rejected</b>
            </li>
            <li>
              Once settled, a Promise's state <b>cannot change</b>
            </li>
            <li>
              <code>.then()</code> returns a new Promise, enabling <b>chaining</b>
            </li>
            <li>
              Errors propagate down the chain until caught by <code>.catch()</code>
            </li>
            <li>
              <code>Promise.all()</code> fails fast; <code>Promise.allSettled()</code> waits for all
            </li>
            <li>
              Understanding Promises is essential before using <code>async/await</code>
            </li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h2 className="font-bold text-xl mb-4 text-black dark:text-white">
            💡 Why Learn Promises Before async/await?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <code>async/await</code> is syntactic sugar over Promises. When you
            use <code>async/await</code>, you're still working with Promises
            under the hood.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Understanding Promises helps you:
          </p>
          <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5 mt-2 space-y-1">
            <li>Debug async/await code more effectively</li>
            <li>Handle errors properly in async functions</li>
            <li>Use Promise methods like <code>Promise.all()</code> when needed</li>
            <li>Understand what's happening behind the scenes</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default page;

