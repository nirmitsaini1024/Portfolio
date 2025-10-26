"use client";

import { useEffect } from "react";

export default function LinkedInPage() {
  useEffect(() => {
    window.location.href = "https://www.linkedin.com/in/nirmitsaini/";
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Redirecting to LinkedIn...
        </p>
      </div>
    </div>
  );
}

