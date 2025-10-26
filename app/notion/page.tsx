"use client";

import { useEffect } from "react";

export default function NotionPage() {
  useEffect(() => {
    window.location.href =
      "https://nirmitsaini.notion.site/NIRMIT-SAINI-12198ccda19280168bf1e724e370f0b8?pvs=74";
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Redirecting to Notion...
        </p>
      </div>
    </div>
  );
}

