import React from "react";
import Skills from "./Skills";
import Heading from "./Heading";

const Home = () => {
  const projects = [
    {
      name: "TimesAscent",
      logo: "/TimesLogo.webp",
      href: "https://timesascent.com/",
    },
    {
      name: "StockOne",
      logo: "/Stockone.svg",
      href: "https://stockone.sashyundai.com/login",
    },
    {
      name: "Sashyundai",
      logo: "/sashyundai.svg",
      href: "https://www.sashyundai.com/",
    },
    {
      name: "SAS ONE",
      logo: "/saslogo.svg",
      href: "https://www.sasone.in/",
    },
    {
      name: "Rozgaar",
      logo: "/Rozgaar.svg",
      href: "https://www.rozgaarindia.com/",
    },
    {
      name: "ONE POST",
      logo: "/onepost.png",
      href: "https://www.rozgaarindia.com/",
    },
    {
      name: "SASXTRA",
      logo: "/sasxtra.svg",
      href: "https://www.rozgaarindia.com/",
    },
  ];

  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="">
      <section class="p-6 bg-black  rounded-2xl">
        <div class="max-w-5xl px-4 mx-auto ">
          <div class=" mx-start text-start relative">
            <Heading text={"About me"} />
            <div class="  w-1/5 h-0.5 bottom-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <p class="  mt-4 text-base leading-relaxed text-gray-300">
              As a Full Stack Developer at SASONE PVT LTD with over 2.5 years of
              experience in web development, I bring a strong background in both
              frontend and backend technologies, including React.js, Next.js,
              Python, MySQL and AWS. I excel in fast-paced environments,
              demonstrating the ability to complete tasks efficiently with
              minimal guidance. My goal is to continuously enhance my skills
              across various computer science disciplines, aiming to become a
              versatile asset in my future career endeavors. I am a motivated IT
              professional with a robust work ethic, seeking a challenging role
              that aligns with my skills and educational background. Known for
              my enthusiasm and determination, I am eager to absorb new
              concepts, methods, and technologies. As an exceptional team player
              with leadership capabilities, I aim to contribute significantly to
              any project or team I join. Key Highlights: - 2.5+ years of
              comprehensive experience in frontend development, including 1 year
              dedicated to React.js, alongside proficiency in Next.js, Python,
              and MySQL. - Proven track record as an SEO Analyst for 1 year,
              enhancing my expertise in UI/UX design principles alongside my web
              development skills.
            </p>
          </div>

          {/* <div class="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <div class="flex items-start">
              <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span class="text-lg font-semibold text-white">?</span>
              </div>
              <div class="ml-4">
                <p class="text-xl font-semibold text-white">
                  How to create an account?
                </p>
                <p class="mt-4 text-base text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span class="text-lg font-semibold text-white">?</span>
              </div>
              <div class="ml-4">
                <p class="text-xl font-semibold text-white">
                  How can I make payment?
                </p>
                <p class="mt-4 text-base text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span class="text-lg font-semibold text-white">?</span>
              </div>
              <div class="ml-4">
                <p class="text-xl font-semibold text-white">
                  Do you provide discounts?
                </p>
                <p class="mt-4 text-base text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span class="text-lg font-semibold text-white">?</span>
              </div>
              <div class="ml-4">
                <p class="text-xl font-semibold text-white">
                  How do you provide support?
                </p>
                <p class="mt-4 text-base text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div> */}
          <div className="my-6">
            <Skills />
          </div>
          <div className="hidden md:block">
            <div className="mt-12 marquee-container py-12 rounded-lg bg-zinc-50">
              <div className="marquee ">
                {duplicatedProjects.map((item, index) => (
                  <a key={index} className="logo" href={item.href}>
                    <img
                      className="object-contain lg:w-auto mx-12 h-8"
                      src={item.logo}
                      alt={item.name}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
