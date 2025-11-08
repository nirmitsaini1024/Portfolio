export const metadata = {
    title: "React Hooks Explained | Complete Guide",
    description:
      "A comprehensive guide to React hooks including useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef, and custom hooks with practical examples.",
    keywords:
      "React, hooks, useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef, custom hooks, React development",
    author: "Nirmit Saini",
    robots: "index, follow",
    openGraph: {
      title: "React Hooks Explained | Complete Guide",
      description:
        "Master React hooks with this comprehensive guide covering all built-in hooks and custom hooks with practical examples.",
      type: "article",
      url: "https://nirmitsaini.10xdevs.in/blog/react-hooks",
    },
    twitter: {
      card: "summary",
      title: "React Hooks Explained | Complete Guide",
      description:
        "Learn React hooks from basics to advanced custom hooks with practical examples and best practices.",
    },
  };
  
  export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>;
  }

