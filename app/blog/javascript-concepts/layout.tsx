export const metadata = {
    title: "JavaScript Concepts | Interview Guide",
    description:
      "A complete guide to JavaScript concepts and interview questions. Learn closures, promises, async/await, hoisting, prototypes, event delegation, and more.",
    keywords:
      "JavaScript, interview, closures, async/await, event loop, hoisting, prototypes",
    author: "Nirmit Saini",
    robots: "index, follow",
    openGraph: {
      title: "JavaScript Concepts | Interview Guide",
      description:
        "A complete guide to JavaScript concepts and interview questions, covering closures, promises, async/await, and more.",
      type: "website",
      url: "https://nirmitsaini.10xdevs.in/blog/javascript-concepts",
    },
    twitter: {
      card: "summary",
      title: "JavaScript Concepts | Interview Guide",
      description:
        "Master JavaScript concepts for interviews with this complete guide.",
    },
  };
  
  export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>;
  }
  