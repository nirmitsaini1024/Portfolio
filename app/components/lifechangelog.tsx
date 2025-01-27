"use client";
import React, { useState, useEffect } from "react";

type Update = {
  title: string;
  description: string;
};

type Changelog = {
  year: string;
  updates: Update[];
};

const LifeChangelog: React.FC = () => {
  const [changelog, setChangelog] = useState<Changelog[]>([]);

  useEffect(() => {
    fetch("/changelog.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch changelog.json");
        }
        return response.json();
      })
      .then((data) => setChangelog(data))
      .catch(() => {
        // Do nothing
      });
  }, []);
  

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 mt-8 text-black dark:text-white">
        Life Changelog and Updates
      </h3>
      {changelog.map((yearData, index) => (
        <section key={yearData.year}>
          <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
            {yearData.year}
          </h3>
          <ul>
            {yearData.updates.map((update, updateIndex) => (
              <li className="mb-4 ml-2" key={updateIndex}>
                <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="text-blue-500 mr-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {update.title}
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-400 ml-6">
                  {update.description}
                </p>
              </li>
            ))}
          </ul>
          {index < changelog.length - 1 && (
            <hr className="border-gray-200 dark:border-gray-600 my-8" />
          )}
        </section>
      ))}
    </div>
  );
};

export default LifeChangelog;
