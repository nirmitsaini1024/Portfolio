"use client";

import { useEffect } from "react";

export default function XPage() {
  useEffect(() => {
    window.location.href = "https://x.com/nirmit_saini";
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Redirecting to X (Twitter)...
        </p>
      </div>
    </div>
  );
}

