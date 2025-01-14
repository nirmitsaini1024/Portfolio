import React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import { closures } from "@/components/codeblocks/closures";
import { promises } from "@/components/codeblocks/promises";
import { async } from "@/components/codeblocks/asyncawait";

const page = () => {
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
              href="/blog/ace-the-javascript-interview#array-methods"
              className="text-blue-500 underline"
            >
              Array Methods
            </a>
          </li>
          <li>
            <a
              href="/blog/ace-the-javascript-interview#var-let-const"
              className="text-blue-500 underline"
            >
              Var, Let, Const
            </a>
          </li>
          <li>
            <a
              href="/blog/ace-the-javascript-interview#hoisting"
              className="text-blue-500 underline"
            >
              Hoisting
            </a>
          </li>
          <li>
            <a
              href="/blog/ace-the-javascript-interview#local-storage-session-storage"
              className="text-blue-500 underline"
            >
              Local Storage / Session Storage
            </a>
          </li>
          <li>
            <a
              href="/blog/ace-the-javascript-interview#timers-setTimeout-setInterval"
              className="text-blue-500 underline"
            >
              Timers - setTimeout(), setInterval()
            </a>
          </li>
          <li>
            <a
              href="/blog/ace-the-javascript-interview#polyfills"
              className="text-blue-500 underline"
            >
              Polyfills
            </a>
          </li>
          <li>
            <a
              href="/blog/ace-the-javascript-interview#event-loop-the-right-way"
              className="text-blue-500 underline"
            >
              Event Loop (The Right Way)
            </a>
          </li>
        </ol>
        <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white">
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
        <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white">
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
        <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          3. Async/Await
        </h1>
        <p className="text-gray-400 mb-4">
          Async/Await is a cleaner way to handle asynchronous code compared to Promises.
        </p>
        <CodeBlock
          language={async.language}
          filename={async.filename}
          highlightLines={async.highlightLines}
          code={async.code}
        />
      </div>
    </main>
  );
};

export default page;
