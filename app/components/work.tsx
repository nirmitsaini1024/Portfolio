import React from "react";

const WorkExperience = () => {
  return (
    <section className="work-experience">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Work Experience
      </h3>

      {/* Astute ai */}
      <div className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200">
        <div className="w-full">
          {" "}
          <a href="https://www.linkedin.com/company/astute-ai/" target="_blank">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-auto mb-4">
                <h4 className="text-base blog-heading md:text-base mb-2 text-blue-200">
                  <b>👨🏻‍💻 Astute-ai ( Startup )</b>
                </h4>
                <p className="text-gray-500 dark:text-gray-400">
                  <b>Working as a Frontend Developer </b>
                  <br />
                  Developed the complete web architecture at Astute AI,
                  including dynamic homepages and conversion-focused landing
                  pages, ensuring seamless performance and user experience.
                </p>
              </div>
              <p className="text-gray-500 text-left md:text-right whitespace-nowrap mb-4 md:mb-0">
                Nov 204 - currently working
              </p>
            </div>
          </a>
        </div>
      </div>
      {/* Upwork Freelancer */}
      <div className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-auto mb-4">
              <h4 className="text-base blog-heading md:text-base mb-2 text-white">
                👨🏻‍💻 Upwork Freelancer
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                Worked as a Freelancer on Upwork, building web apps to gain some
                hands-on experience.
              </p>
            </div>
            <p className="text-gray-500 text-left md:text-right whitespace-nowrap mb-4 md:mb-0">
              Oct 2023 - Aug 2024
            </p>
          </div>
        </div>
      </div>

      {/* Web Developer Lead */}
      <div className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-auto mb-4">
              <h4 className="text-base blog-heading md:text-base mb-2 text-white">
                👨🏻‍💻 Web Developer Lead
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                To promote the importance of Web development among club members
                and students, encouraging development and participation in web
                development projects.
              </p>
            </div>
            <p className="text-gray-500 text-left md:text-right whitespace-nowrap mb-4 md:mb-0">
              Oct 2023 - Aug 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
