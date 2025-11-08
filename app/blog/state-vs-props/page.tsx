"use client";
import React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import {
  propsBasics,
  stateBasics,
  propsVsState,
  liftingState,
  controlledComponents,
  whenToUse,
  statePropPatterns,
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
          State vs Props in React 📊
        </h1>
        <p className="text-gray-400 mb-4">
          Understanding the difference between State and Props is fundamental to
          React development. This guide will help you understand when to use
          each, why choose one over the other, and common patterns for managing
          data flow in your React applications.
        </p>
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Table of content
        </h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <a
              href="#what-are-props"
              aria-label="What are Props"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              What are Props?
            </a>
          </li>
          <li>
            <a
              href="#what-is-state"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              What is State?
            </a>
          </li>
          <li>
            <a
              href="#key-differences"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Key Differences
            </a>
          </li>
          <li>
            <a
              href="#when-to-use-props"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              When to Use Props
            </a>
          </li>
          <li>
            <a
              href="#when-to-use-state"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              When to Use State
            </a>
          </li>
          <li>
            <a
              href="#why-props-over-state"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Why Props Over State?
            </a>
          </li>
          <li>
            <a
              href="#why-state-over-props"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Why State Over Props?
            </a>
          </li>
          <li>
            <a
              href="#common-patterns"
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
              onClick={handleLinkClick}
            >
              Common Patterns and Best Practices
            </a>
          </li>
        </ol>

        <h1
          id="what-are-props"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          1. What are Props?
        </h1>
        <p className="text-gray-400 mb-4">
          <b>Props</b> (short for properties) are read-only data passed from a
          parent component to a child component. They allow you to pass data
          and functions down the component tree, making components reusable and
          configurable.
        </p>
        <p className="text-gray-400 mb-4">
          <b>Key Characteristics:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>Props are <b>immutable</b> - you cannot modify them within the receiving component</li>
          <li>Props flow <b>downward</b> - from parent to child (unidirectional data flow)</li>
          <li>Props are <b>read-only</b> - attempting to modify props will cause errors</li>
          <li>Props make components <b>reusable</b> and <b>configurable</b></li>
        </ul>
        <CodeBlock
          language={propsBasics.language}
          filename={propsBasics.filename}
          highlightLines={propsBasics.highlightLines}
          code={propsBasics.code}
        />

        <h1
          id="what-is-state"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          2. What is State?
        </h1>
        <p className="text-gray-400 mb-4">
          <b>State</b> is mutable data that belongs to a component. It
          represents data that can change over time, typically in response to
          user interactions, network requests, or other events. When state
          changes, React re-renders the component.
        </p>
        <p className="text-gray-400 mb-4">
          <b>Key Characteristics:</b>
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-1">
          <li>State is <b>mutable</b> - you can update it using setState or useState</li>
          <li>State is <b>local</b> to the component - each component instance has its own state</li>
          <li>State changes trigger <b>re-renders</b> - React updates the UI when state changes</li>
          <li>State is <b>private</b> - not accessible from other components unless passed as props</li>
        </ul>
        <CodeBlock
          language={stateBasics.language}
          filename={stateBasics.filename}
          highlightLines={stateBasics.highlightLines}
          code={stateBasics.code}
        />

        <h1
          id="key-differences"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          3. Key Differences
        </h1>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-zinc-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-zinc-800">
                <th className="border border-gray-300 dark:border-zinc-700 px-4 py-2 text-left">Aspect</th>
                <th className="border border-gray-300 dark:border-zinc-700 px-4 py-2 text-left">Props</th>
                <th className="border border-gray-300 dark:border-zinc-700 px-4 py-2 text-left">State</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2 font-semibold">Mutability</td>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2">Immutable (read-only)</td>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2">Mutable (can be changed)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2 font-semibold">Ownership</td>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2">Owned by parent component</td>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2">Owned by the component itself</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2 font-semibold">Data Flow</td>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2">Top-down (parent to child)</td>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2">Local to component</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2 font-semibold">Initialization</td>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2">Passed from parent</td>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2">Initialized in component</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2 font-semibold">Updates</td>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2">Changed by parent component</td>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2">Changed by component itself</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2 font-semibold">Use Case</td>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2">Configuration, passing data down</td>
                <td className="border border-gray-300 dark:border-zinc-700 px-4 py-2">Component-specific data that changes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock
          language={propsVsState.language}
          filename={propsVsState.filename}
          highlightLines={propsVsState.highlightLines}
          code={propsVsState.code}
        />

        <h1
          id="when-to-use-props"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          4. When to Use Props
        </h1>
        <p className="text-gray-400 mb-4">
          Use <b>Props</b> when you need to:
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-2">
          <li>
            <b>Pass data from parent to child:</b> When a parent component needs
            to share data with its children
          </li>
          <li>
            <b>Make components reusable:</b> When you want to create generic
            components that can be configured differently
          </li>
          <li>
            <b>Pass callback functions:</b> When child components need to
            communicate back to parent components
          </li>
          <li>
            <b>Configure component behavior:</b> When you want to customize
            how a component renders or behaves
          </li>
          <li>
            <b>Share data across multiple components:</b> When multiple
            components need access to the same data (lift state up)
          </li>
        </ul>
        <CodeBlock
          language={whenToUse.language}
          filename={whenToUse.filename}
          highlightLines={whenToUse.highlightLines}
          code={whenToUse.code}
        />

        <h1
          id="when-to-use-state"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          5. When to Use State
        </h1>
        <p className="text-gray-400 mb-4">
          Use <b>State</b> when you need to:
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-2">
          <li>
            <b>Store data that changes:</b> When data needs to be updated
            within the component (user input, toggles, counters)
          </li>
          <li>
            <b>Handle user interactions:</b> When you need to track user
            actions like form inputs, button clicks, or selections
          </li>
          <li>
            <b>Manage UI state:</b> When you need to control UI elements like
            modals, dropdowns, or loading states
          </li>
          <li>
            <b>Store component-specific data:</b> When data is only relevant to
            that specific component instance
          </li>
          <li>
            <b>Handle asynchronous operations:</b> When you need to store data
            from API calls or other async operations
          </li>
        </ul>
        <p className="text-gray-400 mb-4">
          <b>Remember:</b> If data doesn't change or is only used for rendering,
          you probably don't need state. Use props or compute it directly.
        </p>

        <h1
          id="why-props-over-state"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          6. Why Props Over State?
        </h1>
        <p className="text-gray-400 mb-4">
          Choose <b>Props</b> over State when:
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-2">
          <li>
            <b>Single Source of Truth:</b> When multiple components need the
            same data, keeping it in a parent component and passing it as props
            ensures consistency. If you use state in each component, they can
            get out of sync.
          </li>
          <li>
            <b>Data Flow Clarity:</b> Props create a clear, predictable data
            flow from parent to child, making your code easier to understand and
            debug.
          </li>
          <li>
            <b>Reusability:</b> Components that receive data via props are more
            reusable because they don't depend on internal state that might not
            be relevant in different contexts.
          </li>
          <li>
            <b>Testability:</b> Components that rely on props are easier to
            test because you can pass different props and verify the output
            without worrying about internal state.
          </li>
          <li>
            <b>Performance:</b> When data is managed at a higher level and
            passed down, you have better control over when components re-render,
            leading to better performance optimization opportunities.
          </li>
        </ul>
        <CodeBlock
          language={liftingState.language}
          filename={liftingState.filename}
          highlightLines={liftingState.highlightLines}
          code={liftingState.code}
        />

        <h1
          id="why-state-over-props"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          7. Why State Over Props?
        </h1>
        <p className="text-gray-400 mb-4">
          Choose <b>State</b> over Props when:
        </p>
        <ul className="text-gray-400 list-disc pl-5 mb-4 space-y-2">
          <li>
            <b>Component-Specific Data:</b> When data is only relevant to a
            single component and doesn't need to be shared with siblings or
            parents. Using state keeps the data encapsulated and the component
            independent.
          </li>
          <li>
            <b>Frequent Updates:</b> When data changes frequently and only
            affects one component, using local state avoids unnecessary
            re-renders of parent components.
          </li>
          <li>
            <b>User Input:</b> For form inputs, toggles, and other interactive
            elements, local state provides immediate feedback and better user
            experience without prop drilling.
          </li>
          <li>
            <b>Independence:</b> When you want a component to be self-contained
            and not depend on external data, state makes it more independent
            and reusable.
          </li>
          <li>
            <b>Performance:</b> Local state can be more performant for
            component-specific UI state (like dropdown open/closed) because it
            doesn't trigger re-renders in parent components.
          </li>
        </ul>
        <CodeBlock
          language={controlledComponents.language}
          filename={controlledComponents.filename}
          highlightLines={controlledComponents.highlightLines}
          code={controlledComponents.code}
        />

        <h1
          id="common-patterns"
          className="font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 mt-8 text-black dark:text-white scroll-mt-16"
        >
          8. Common Patterns and Best Practices
        </h1>
        <p className="text-gray-400 mb-4">
          Here are some common patterns for using State and Props together:
        </p>
        <CodeBlock
          language={statePropPatterns.language}
          filename={statePropPatterns.filename}
          highlightLines={statePropPatterns.highlightLines}
          code={statePropPatterns.code}
        />

        <div className="mt-12 p-6 bg-gray-100 dark:bg-zinc-800 rounded-lg border border-gray-200 dark:border-zinc-700">
          <h2 className="font-bold text-xl mb-4 text-black dark:text-white">
            Best Practices Summary
          </h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>
              <b>Props Down, Events Up:</b> Pass data down via props, send
              events up via callback functions
            </li>
            <li>
              <b>Lift State Up:</b> When multiple components need the same
              data, lift it to their common parent
            </li>
            <li>
              <b>Don't Copy Props to State:</b> Use props directly unless you
              need to modify them (then use state)
            </li>
            <li>
              <b>Single Source of Truth:</b> Keep state in one place - either
              in the component that needs it or in a common parent
            </li>
            <li>
              <b>Minimize State:</b> Only use state for data that actually
              changes. Use props for static or computed data
            </li>
            <li>
              <b>Controlled vs Uncontrolled:</b> Use controlled components
              (props) when you need to control the value from parent, use
              uncontrolled (state) for simple local inputs
            </li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h2 className="font-bold text-xl mb-4 text-black dark:text-white">
            Quick Decision Guide
          </h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Use <b>Props</b> if:
              </p>
              <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-1">
                <li>Data comes from parent component</li>
                <li>Multiple components need the same data</li>
                <li>Data is used for configuration</li>
                <li>You want to make component reusable</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Use <b>State</b> if:
              </p>
              <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-1">
                <li>Data changes within the component</li>
                <li>Data is only relevant to this component</li>
                <li>Handling user input or interactions</li>
                <li>Managing UI state (modals, dropdowns, etc.)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

