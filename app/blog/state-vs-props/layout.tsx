export const metadata = {
    title: "State vs Props in React | Complete Guide",
    description:
      "A comprehensive guide to understanding State vs Props in React. Learn when to use props vs state, why choose one over the other, with practical code examples and best practices.",
    keywords:
      "React, state, props, state vs props, React state management, React props, controlled components, lifting state up, React development",
    author: "Nirmit Saini",
    robots: "index, follow",
    openGraph: {
      title: "State vs Props in React | Complete Guide",
      description:
        "Master the difference between State and Props in React. Learn when to use each, why choose one over the other, with practical examples and patterns.",
      type: "article",
      url: "https://nirmitsaini.10xdevs.in/blog/state-vs-props",
    },
    twitter: {
      card: "summary",
      title: "State vs Props in React | Complete Guide",
      description:
        "Learn the fundamental concepts of State vs Props in React with practical examples, use cases, and best practices.",
    },
  };
  
  export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>;
  }

