export const metadata = {
    title: "Why Choose Next.js Over React.js? | Interview Guide",
    description:
      "Discover why Next.js is preferred over React.js, including features like SSR, SSG, ISR, SEO benefits, automatic code splitting, and built-in API routes.",
    keywords:
      "Next.js, React.js, SSR, SSG, ISR, SEO, performance, frontend, web development",
    author: "Nirmit Saini",
    robots: "index, follow",
    openGraph: {
      title: "Why Choose Next.js Over React.js?",
      description:
        "Explore the key advantages of Next.js over React.js, including performance improvements, SEO benefits, and built-in API routes.",
      type: "article",
      url: "https://nirmitsaini.10xdevs.in/blog/react-over-nextjs",
    },
    twitter: {
      card: "summary",
      title: "Why Choose Next.js Over React.js?",
      description:
        "Learn why developers prefer Next.js over React.js, including SEO, server-side rendering, and performance enhancements.",
    },
  };
  
  export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>;
  }
  