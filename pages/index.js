import Contacts from "@/components/Contacts";
import PersonalProjects from "@/components/PersonalProjects";
import Work from "@/components/Work";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Home from "@/components/Home";
import Resume from "@/components/Resume";
import Profile from "@/components/Profile";
import Head from "next/head";

const index = () => {
  const [selectedSection, setSelectedSection] = useState("Home");

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

  const selectedpart = (val) => {
    if (val === "Menu") {
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
          content="https://vinay-profile.vercel.app/vinay-og.webp"
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
          content="https://vinay-profile.vercel.app/vinay-og.webp"
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
            <div className=" overflow-scroll  fixed left-0 bottom-0 py-1 z-50  w-full bg-gradient-to-b rounded-tl-md rounded-tr-md from-[#ef745c] to-[#34073d] shadow-[rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px]  border-t ">
              <div className="md:hidden flex justify-around  ">
                {section.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className={`py-2 text-center  rounded-lg ${
                        selectedSection === item.name
                          ? " text-white"
                          : " text-white"
                      }`}
                      onClick={() => setSelectedSection(item.name)}
                    >
                      <div className="mb-1">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="text-[12px]">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <div className="overflow-scroll fixed left-0 bottom-0 py-2 z-50 shadow-xl  bg-white ">
              <div className="md:hidden flex gap-2  ">
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
            </div> */}

            {/* #Box */}
            <div>{selectedpart(selectedSection)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
