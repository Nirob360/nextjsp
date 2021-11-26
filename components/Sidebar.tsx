import { useTheme } from "next-themes";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="w-36 h-36 rounded-full border-4 border-green  mx-auto">
        <Image
          src="/images/profile.webp"
          alt="avatar"
          className=" mx-auto border rounded-full "
          height="136px"
          width="136px"
          layout="intrinsic"
          quality="100"
        />
      </div>
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        Sanvi Rohoman
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/Sumit Dey Resume.pdf"
        download="Sumit Dey Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a
          href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A"
          aria-label="Youtube"
        >
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/sumit-dey-4a04431a9/"
          aria-label="Linkdin"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/_sumax__/" aria-label="github">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Dhaka Bangladesh </span>
        </div>
        <p
          className="my-2 cursor-pointer"
          onClick={() => window.open("mailto:code.sumax@gmail.com")}
        >
          developerbd.org.freelance@gmail.com
        </p>
        <p className="my-2">
          <a href="tel:01788420417">01788420417</a>
        </p>
      </div>

      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
