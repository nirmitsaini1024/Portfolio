"use client";

import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    // Redirect to the Google Drive resume
    window.location.href =
      "https://drive.google.com/file/d/1HgKGok5pLHx-v300aqL3s2folewq-u7j/view?usp=sharing";
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Redirecting to resume...
        </p>
      </div>
    </div>
  );
}

