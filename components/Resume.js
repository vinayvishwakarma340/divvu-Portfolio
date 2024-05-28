import Image from "next/image";
import React from "react";
import Skills from "./Skills";

const Resume = () => {
  const educationdata = [
    {
      id: 1,
      name: "Master of Computer Applications",
      branch: "Computer",
      year: "2022-24",
      school: "IGNOU",
      City: "Delhi, India",
    },
    {
      id: 2,
      name: "Bachelor of Computer Applications",
      branch: "Computer",

      year: "2016-19",
      school: "School of Management Sciences",
      City: "Varanasi, Uttar Pradesh",
    },
    {
      id: 3,
      name: "12TH",
      year: "2014-15",
      school: "MSI",
      City: "Varanasi, Uttar Pradesh",
    },
    {
      id: 4,
      name: "10TH",
      year: "2012-13",
      school: "MSI",
      City: "Varanasi, Uttar Pradesh",
    },
  ];

  const experiencedata = [
    {
      id: 1,
      Jrole: "Coding Admin",
      company: "SASONE ",
      year: "Sept 2023 - Present",
      role: "Fulltime",
      City: "Lucknow, Uttar Pradesh",
    },
    {
      id: 2,
      Jrole: "Front-end developer",
      company: "SASONE ",
      year: "Sept 2021 - Aug 2023",
      role: "Fulltime",
      City: "Lucknow, Uttar Pradesh",
    },
  ];

  return (
    <section class="bg-black  rounded-2xl text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="max-w-2xl mx-start text-start relative">
          <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Resume
          </h2>
          <div class="  w-1/4 h-0.5 bottom-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        <div className="">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold mt-6 mr-2">Education</span>
              <Image
                src={"/education.png"}
                className="mt-6"
                height={45}
                width={45}
              />
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
              {educationdata?.map((item, index) => (
                <div
                  key={index}
                  className="education-box  rounded-lg border hover:border-gray-300 bg-gradient-to-r from-gray-900 to-gray-800 p-8 shadow-md  border-pink-500 hover:shadow-xl transition duration-300"
                >
                  <div className="text-yellow-600 text-sm">{item.year}</div>

                  <h2 className="mt-4 text-lg font- text-white">{item.name}</h2>
                  <h2 className="mt-2 text-base font-semibold text-pink-300">
                    {item.branch}
                  </h2>

                  <p className="mt-2 text-base text-gray-400">
                    {item.school}, {item.City}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="text-xl font-bold mt-6 mr-2">Experience</span>
            <Image
              src={"/experience.png"}
              className="mt-6"
              height={45}
              width={45}
            />
          </div>
          <div>
            {experiencedata?.map((item, index) => (
              <div
                key={index}
                className="experience-box my-4 rounded-lg border hover:border-gray-300 bg-gradient-to-r from-gray-900 to-gray-800 p-8 shadow-md border-pink-500 hover:shadow-xl transition duration-300"
              >
                <div className="text-yellow-600 text-sm">{item.year}</div>

                <h2 className="mt-4 text-lg  text-white">{item.Jrole}</h2>
                <h2 className="mt-2 lg:text-lg text-sm font-semibold text-pink-300">
                  {item.company}
                </h2>

                <p className="mt-2 lg:text-base text-sm text-gray-400">
                  <span className="text-purple-400">{item.role}</span>{" "}
                  {item.City}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
