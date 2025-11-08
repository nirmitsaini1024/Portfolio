"use client";
import React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import {
  useState,
  useEffect,
  useContext,
  useReducer,
  useMemo,
  useCallback,
  useRef,
  customHooks,
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
          React Hooks Explained 🎣
        </h1>
        <p className="text-gray-400 mb-4">
          React Hooks revolutionized how we write React components by allowing us
          to use state and other React features in functional components. This
          guide covers all the essential hooks with practical examples to help
          you master React development.
        </p>
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Table of content
        </h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <a
              href="#useState"
              aria-label="useState Hook"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              useState - Managing Component State
            </a>
          </li>
          <li>
            <a
              href="#useEffect"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              useEffect - Side Effects and Lifecycle
            </a>
          </li>
          <li>
            <a
              href="#useContext"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              useContext - Sharing Data Across Components
            </a>
          </li>
          <li>
            <a
              href="#useReducer"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              useReducer - Complex State Management
            </a>
          </li>
          <li>
            <a
              href="#useMemo"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              useMemo - Optimizing Expensive Calculations
            </a>
          </li>
          <li>
            <a
              href="#useCallback"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              useCallback - Memoizing Functions
            </a>
          </li>
          <li>
            <a
              href="#useRef"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              useRef - Accessing DOM and Storing Mutable Values
            </a>
          </li>
          <li>
            <a
              href="#custom-hooks"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Custom Hooks - Reusable Logic
            </a>
          </li>
        </ol>

        <h1
          id="useState"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          1. useState - Managing Component State
        </h1>
        <p className="text-gray-400 mb-4">
          <b>useState</b> is the most fundamental hook that allows functional
          components to manage local state. It returns an array with two
          elements: the current state value and a function to update it.
        </p>
        <p className="text-gray-400 mb-4">
          <b>Key Points:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>State updates trigger re-renders</li>
          <li>You can pass an initial value or a function that returns the initial value</li>
          <li>State updates are asynchronous</li>
          <li>For complex state, consider using useReducer</li>
        </ul>
        <CodeBlock
          language={useState.language}
          filename={useState.filename}
          highlightLines={useState.highlightLines}
          code={useState.code}
        />

        <h1
          id="useEffect"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          2. useEffect - Side Effects and Lifecycle
        </h1>
        <p className="text-gray-400 mb-4">
          <b>useEffect</b> lets you perform side effects in functional
          components. It's the equivalent of componentDidMount,
          componentDidUpdate, and componentWillUnmount combined.
        </p>
        <p className="text-gray-400 mb-4">
          <b>Key Points:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>Runs after every render by default (unless dependencies are specified)</li>
          <li>Dependency array controls when the effect runs</li>
          <li>Return a cleanup function to prevent memory leaks</li>
          <li>Empty dependency array [] means the effect runs only once on mount</li>
        </ul>
        <CodeBlock
          language={useEffect.language}
          filename={useEffect.filename}
          highlightLines={useEffect.highlightLines}
          code={useEffect.code}
        />

        <h1
          id="useContext"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          3. useContext - Sharing Data Across Components
        </h1>
        <p className="text-gray-400 mb-4">
          <b>useContext</b> allows you to consume context values without
          prop drilling. It's perfect for sharing global state like themes,
          user authentication, or language preferences.
        </p>
        <p className="text-gray-400 mb-4">
          <b>Key Points:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>Requires a Context Provider higher up in the component tree</li>
          <li>All components using the same context will re-render when context value changes</li>
          <li>Great for avoiding prop drilling</li>
          <li>Combine with useState or useReducer for stateful context</li>
        </ul>
        <CodeBlock
          language={useContext.language}
          filename={useContext.filename}
          highlightLines={useContext.highlightLines}
          code={useContext.code}
        />

        <h1
          id="useReducer"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          4. useReducer - Complex State Management
        </h1>
        <p className="text-gray-400 mb-4">
          <b>useReducer</b> is an alternative to useState, ideal for managing
          complex state logic. It follows the same pattern as Redux reducers,
          making state updates predictable and testable.
        </p>
        <p className="text-gray-400 mb-4">
          <b>Key Points:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>Best for state with multiple sub-values or complex update logic</li>
          <li>Reducer function must be pure (no side effects)</li>
          <li>Actions are objects with a type property</li>
          <li>More predictable than useState for complex state</li>
        </ul>
        <CodeBlock
          language={useReducer.language}
          filename={useReducer.filename}
          highlightLines={useReducer.highlightLines}
          code={useReducer.code}
        />

        <h1
          id="useMemo"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          5. useMemo - Optimizing Expensive Calculations
        </h1>
        <p className="text-gray-400 mb-4">
          <b>useMemo</b> memoizes the result of expensive calculations,
          recalculating only when dependencies change. This helps optimize
          performance by avoiding unnecessary computations.
        </p>
        <p className="text-gray-400 mb-4">
          <b>Key Points:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>Only use for expensive calculations, not for every computation</li>
          <li>Returns the memoized value</li>
          <li>Dependency array works like useEffect</li>
          <li>Don't use for side effects (use useEffect instead)</li>
        </ul>
        <CodeBlock
          language={useMemo.language}
          filename={useMemo.filename}
          highlightLines={useMemo.highlightLines}
          code={useMemo.code}
        />

        <h1
          id="useCallback"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          6. useCallback - Memoizing Functions
        </h1>
        <p className="text-gray-400 mb-4">
          <b>useCallback</b> returns a memoized version of a callback function
          that only changes if one of its dependencies has changed. It's useful
          when passing callbacks to optimized child components.
        </p>
        <p className="text-gray-400 mb-4">
          <b>Key Points:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>Prevents unnecessary re-renders of child components</li>
          <li>Works with React.memo() for optimization</li>
          <li>Returns the same function reference if dependencies haven't changed</li>
          <li>Use when passing functions as props to memoized components</li>
        </ul>
        <CodeBlock
          language={useCallback.language}
          filename={useCallback.filename}
          highlightLines={useCallback.highlightLines}
          code={useCallback.code}
        />

        <h1
          id="useRef"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          7. useRef - Accessing DOM and Storing Mutable Values
        </h1>
        <p className="text-gray-400 mb-4">
          <b>useRef</b> returns a mutable ref object that persists for the
          lifetime of the component. It has two main use cases: accessing DOM
          elements and storing mutable values that don't trigger re-renders.
        </p>
        <p className="text-gray-400 mb-4">
          <b>Key Points:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>Refs don't trigger re-renders when their value changes</li>
          <li>Perfect for storing previous values, timers, or DOM references</li>
          <li>Access DOM elements directly via the ref.current property</li>
          <li>Refs persist across re-renders but don't cause them</li>
        </ul>
        <CodeBlock
          language={useRef.language}
          filename={useRef.filename}
          highlightLines={useRef.highlightLines}
          code={useRef.code}
        />

        <h1
          id="custom-hooks"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          8. Custom Hooks - Reusable Logic
        </h1>
        <p className="text-gray-400 mb-4">
          <b>Custom Hooks</b> are JavaScript functions that start with "use"
          and can call other hooks. They allow you to extract component logic
          into reusable functions, promoting code reusability and separation of
          concerns.
        </p>
        <p className="text-gray-400 mb-4">
          <b>Key Points:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>Must start with "use" (React convention)</li>
          <li>Can call other hooks inside them</li>
          <li>Share stateful logic between components</li>
          <li>Each component using a custom hook has its own independent state</li>
        </ul>
        <p className="text-gray-400 mb-4">
          <b>Common Custom Hook Patterns:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li><b>useFetch:</b> Handle API calls with loading and error states</li>
          <li><b>useLocalStorage:</b> Sync state with browser localStorage</li>
          <li><b>useDebounce:</b> Debounce values for search inputs</li>
          <li><b>useWindowSize:</b> Track window dimensions</li>
          <li><b>useToggle:</b> Toggle boolean state</li>
        </ul>
        <CodeBlock
          language={customHooks.language}
          filename={customHooks.filename}
          highlightLines={customHooks.highlightLines}
          code={customHooks.code}
        />

        <div className="mt-12 p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg border border-gray-200 dark:border-zinc-700">
          <h2 className="font-bold text-xl mb-4 text-black dark:text-white">
            Best Practices
          </h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>
              <b>Only call hooks at the top level:</b> Don't call hooks inside
              loops, conditions, or nested functions
            </li>
            <li>
              <b>Only call hooks from React functions:</b> Call hooks from
              React function components or custom hooks
            </li>
            <li>
              <b>Optimize with care:</b> Don't overuse useMemo and useCallback;
              they have their own overhead
            </li>
            <li>
              <b>Keep effects focused:</b> Each useEffect should have a single
              responsibility
            </li>
            <li>
              <b>Clean up side effects:</b> Always return cleanup functions
              from useEffect when needed
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default page;

