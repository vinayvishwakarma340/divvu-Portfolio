import Image from "next/image";
import React from "react";

const Profile = () => {
  const socialMediaData = [
    {
      id: "linkedin",
      name: "LinkedIn",
      imgName: "/linkedin.png",
      href: "https://www.linkedin.com/in/vinay340/",
    },
    {
      id: "github",
      name: "GitHub",
      imgName: "/github.png",
      href: "https://github.com/vinayvishwakarma340",
    },
    {
      id: "fb",
      name: "Facebook",
      imgName: "/facebook.png",
      href: "#",
    },
    {
      id: "twitter",
      name: "Twitter",
      imgName: "/twitter1.png",
      href: "https://x.com/VinayVishw51072?t=oHHFLj463N2vdmxPZ2T87A&s=09",
    },
  ];
  return (
    <section className="py-10 bg-black  rounded-2xl md:sticky top-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {/* Profile Picture */}
          <div className="relative h-60 w-60 overflow-hidden rounded-full shadow-lg">
            <Image
              src="/Vinay.png"
              alt="Vinay Vishwakarma Profile Picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              loading="eager"
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <h1 className="text-3xl font-bold text-white">Vinay Vishwakarma</h1>
          <p className="mt-2 text-base  text-gray-400">Frontend Developer</p>
        </div>

        <div className="mt-8">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4">
            {socialMediaData.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center  bg-white rounded-lg transition-all hover:shadow-md"
              >
                <div className=" group-hover:gradient-blue">
                  <Image
                    src={item.imgName}
                    height={40}
                    width={40}
                    alt={item.name}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* #Education */}
        <div className="mt-8 flex justify-center">
          <div className="relative inline-flex group">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="https://drive.google.com/file/d/1hyckcDsudPxco73bLib4eZxqAtgZOMgP/view?usp=sharing"
              target="_blank"
              download="your_resume.pdf"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Download Resume
              <span>
                <img src="/pdf.png" className="h-6 ml-3 w-6" />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-8">
          {/* Contact Details */}
          <div className="text-white bg-gray-900 p-4 rounded-lg">
            <div className="text-base border-b-2 border-gray-700 pb-2 flex items-center">
              <Image
                src={"/phone.png"}
                height={50}
                width={50}
                alt="Phone Icon"
                className="mr-3"
              />
              <span>
                <div className="font-semibold text-sm text-gray-400">Phone</div>{" "}
                <a href={`tel:${+91 - 9935851285}`}>+91-9935851285</a>
              </span>
            </div>

            <div className="mt-2 text-base border-b-2 border-gray-700 pb-2 flex items-center">
              <Image
                src={"/email.png"}
                height={50}
                width={50}
                alt="Email Icon"
                className="mr-3"
              />
              <span>
                <div className="font-semibold text-sm text-gray-400">Email</div>{" "}
                <a className="break-all" href="mailto:vinay.myjob@gmail.com">
                  vinay.myjob@gmail.com
                </a>
              </span>
            </div>
            <div className="mt-2 text-base border-b-2 border-gray-700 pb-2 flex items-center">
              <Image
                src={"/address.png"}
                height={50}
                width={50}
                alt="Address Icon"
                className="mr-3"
              />
              <span>
                <div className="font-semibold text-sm text-gray-400">
                  Address
                </div>{" "}
                <div>Lucknow, India - 226002</div>
              </span>
            </div>
            <div className="mt-2 text-base border-b-2 border-gray-700 pb-2 flex items-center">
              <Image
                src={"/birthday.png"}
                height={50}
                width={50}
                alt="Birthday Icon"
                className="mr-3"
              />
              <span>
                <div className="font-semibold text-sm text-gray-400">
                  Birthday
                </div>{" "}
                <div>16 December 1998</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
