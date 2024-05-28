import Contacts from "@/components/Contacts";
import PersonalProjects from "@/components/PersonalProjects";
import Work from "@/components/Work";
import Image from "next/image";
import React, { useState } from "react";
import Home from "@/components/Home";
import Resume from "@/components/Resume";
import Profile from "@/components/Profile";
import Head from "next/head";

const index = () => {
  const [selectedSection, setSelectedSection] = useState("Home");

  const section = [
    {
      id: 1,
      name: "Home",
      img: "/home.png",
    },
    {
      id: 2,
      name: "Education",
      img: "/resume.png",
    },
    {
      id: 3,
      name: "Contact",
      img: "/contact.png",
    },
    {
      id: 4,
      name: "Projects",
      img: "/project.png",
    },
    {
      id: 5,
      name: "My Project",
      img: "/work.png",
    },
  ];

  const selectedpart = (val) => {
    if (val === "My Project") {
      return (
        <div>
          <Work />
        </div>
      );
    } else if (val === "Education") {
      return (
        <div>
          <Resume />
        </div>
      );
    } else if (val === "Contact") {
      return (
        <div>
          <Contacts />
        </div>
      );
    } else if (val === "Projects") {
      return (
        <div>
          <PersonalProjects />
        </div>
      );
    } else {
      return (
        <div>
          <Home />
        </div>
      );
    }
  };

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Vinay Vishwakarma - Portfolio</title>
        <meta name="title" content="Vinay Vishwakarma - Portfolio" />
        <meta
          name="description"
          content="This is a portfolio which tells all the details about me"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vinay-profile.vercel.app/" />
        <meta property="og:title" content="Vinay Vishwakarma - Portfolio" />
        <meta
          property="og:description"
          content="This is a portfolio which tells all the details about me"
        />
        <link rel="canonical" href="https://vinay-profile.vercel.app/" />
        <meta
          property="og:image"
          content="https://vinay-profile.vercel.app/og-vinay.jpg"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://vinay-profile.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Vinay Vishwakarma - Portfolio"
        />
        <meta
          property="twitter:description"
          content="This is a portfolio which tells all the details about me"
        />
        <meta
          property="twitter:image"
          content="https://vinay-profile.vercel.app/og-vinay.jpg"
        />
      </Head>

      <div className=" p-4 sm:p-6 bg-gradient-to-r from-[#ef745c] to-[#34073d]">
        <div className="container m-auto grid md:grid-cols-5 gap-6 relative">
          {/* #Left_Section */}
          <div className="md:col-span-2 ">
            <Profile />
          </div>

          {/* #Right_Section */}
          <div className="md:col-span-3">
            {/* #Toggling_Section */}
            <div className="hidden md:flex md:flex-wrap md:justify-center  md:rounded-2xl md:bg-black md:p-4  mb-6">
              {section?.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedSection(item.name)}
                  className={`m-2 p-4 w-28 max-w-sm border rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300 ${
                    selectedSection === item.name
                      ? "bg-gradient-to-r from-[#ff0f7b] to-[#f89b29] text-white"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  <center className="text-gray-600 mb-3">
                    <span className="inline-block bg-gray-50 p-3 rounded-lg">
                      <Image src={item.img} height={25} width={25} />
                    </span>
                  </center>
                  <h2 className="text-sm flex justify-center">{item.name}</h2>
                </div>
              ))}
            </div>

            {/* #Mobile */}
            <div className="md:hidden mb-6 flex flex-wrap gap-2">
              {section.map((item) => {
                return (
                  <button
                    key={item.name}
                    className={`py-2 w-28 px-4   rounded-lg ${
                      selectedSection === item.name
                        ? "text-white bg-gradient-to-r from-[#ff0f7b] to-[#f89b29] "
                        : "bg-gray-900 text-white"
                    }`}
                    onClick={() => setSelectedSection(item.name)}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            {/* #Box */}
            <div>{selectedpart(selectedSection)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
