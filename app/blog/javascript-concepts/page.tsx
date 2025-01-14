import React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import { closures } from "@/components/codeblocks/closures";
import { promises } from "@/components/codeblocks/promises";
import { async } from "@/components/codeblocks/asyncawait";

const page = () => {
  return (
    <main className="flex flex-col justify-center bg-white dark:bg-zinc-900 px-8 text-gray-900 dark:text-gray-100 antialiased">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Javascript Concepts 📚
        </h1>
        <p className="text-gray-400 mb-4">
          I've compiled down all the popular concepts and questions related to a
          Javascript Interview. No matter at what level of understanding you're
          currently at, this will help you out.
        </p>
        <h3 className="font-bold text-xl md:text-2xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Table of content
        </h3>
        <ol>
          <li>
            <span>1.</span>
            <a href="/blog/ace-the-javascript-interview#array-methods">
              Array Methods
            </a>
          </li>
          <li>
            <span>2.</span>
            <a href="/blog/ace-the-javascript-interview#var-let-const">
              Var, Let, Const
            </a>
          </li>
          <li>
            <span>3.</span>
            <a href="/blog/ace-the-javascript-interview#hoisting">Hoisting</a>
          </li>
          <li>
            <span>4.</span>
            <a href="/blog/ace-the-javascript-interview#local-storage-session-storage">
              Local Storage / Session Storage
            </a>
          </li>
          <li>
            <span>5.</span>
            <a href="/blog/ace-the-javascript-interview#timers-setTimeout-setInterval">
              Timers - setTimeout(), setInterval()
            </a>
          </li>
          <li>
            <span>6.</span>
            <a href="/blog/ace-the-javascript-interview#polyfills">Polyfills</a>
          </li>
          <li>
            <span>7.</span>
            <a href="/blog/ace-the-javascript-interview#event-loop-the-right-way">
              Event Loop (The Right Way)
            </a>
          </li>
        </ol>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white">
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
        />{" "}
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white">
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
        />{" "}
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white">
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
        />{" "}
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          3. Async/Await
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
        />{" "}
      </div>
    </main>
  );
};

export default page;
