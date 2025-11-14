export const metadata = {
    title: "Promises in JavaScript | Complete Guide",
    description:
      "A comprehensive guide to Promises in JavaScript. Learn what Promises are, their three states (pending, fulfilled, rejected), and master Promise methods from basic to advanced with practical examples.",
    keywords:
      "JavaScript, Promises, async, Promise.all, Promise.race, Promise.allSettled, error handling, JavaScript promises, async programming",
    author: "Nirmit Saini",
    robots: "index, follow",
    openGraph: {
      title: "Promises in JavaScript | Complete Guide",
      description:
        "Master Promises in JavaScript from basics to advanced patterns. Learn Promise states, methods, error handling, and real-world examples.",
      type: "article",
      url: "https://nirmitsaini.10xdevs.in/blog/promises-in-javascript",
    },
    twitter: {
      card: "summary",
      title: "Promises in JavaScript | Complete Guide",
      description:
        "Learn Promises in JavaScript from scratch. Understand Promise states, methods, chaining, and advanced patterns with practical examples.",
    },
  };
  
  export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>;
  }

