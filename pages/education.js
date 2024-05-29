import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

const index = () => {
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

  const section = [
    {
      id: 2,
      name: "Education",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          width={20}
          height={20}
          class="m-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      ),
      img: "/resume.png",
    },
    {
      id: 3,
      name: "Contact",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="m-auto"
          width={20}
          height={20}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
      ),
      img: "/contact.png",
    },
    {
      id: 1,
      name: "Home",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="m-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),

      img: "/home.png",
    },
    {
      id: 4,
      name: "Projects",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          width={20}
          height={20}
          class="m-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>
      ),
      img: "/project.png",
    },
    {
      id: 5,
      name: "Menu",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          width={20}
          height={20}
          class="m-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      ),
      img: "/work.png",
    },
  ];

  return (
    <>
      <div className="md:col-span-3">
        {/* #Box */}
        <section class="bg-black  rounded-2xl text-white">
          <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div class="max-w-2xl mx-start text-center relative">
              <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Resume
              </h2>
              <div class="m-auto  w-1/4 h-0.5 bottom-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500"></div>
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

                      <h2 className="mt-4 text-lg font- text-white">
                        {item.name}
                      </h2>
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
      </div>
    </>
  );
};

export default index;
