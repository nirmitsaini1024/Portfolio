"use client";

import { useEffect } from "react";

export default function GithubPage() {
  useEffect(() => {
    window.location.href = "https://github.com/nirmitsaini1024/";
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Redirecting to GitHub...
        </p>
      </div>
    </div>
  );
}

