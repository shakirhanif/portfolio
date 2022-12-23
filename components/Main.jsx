import React from "react";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Terminal from "./Terminal";

const Main = () => {
  return (
    <div id="home" className=" w-full h-screen text-center bg-[#d4f7f6]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className=" mt-10">
          <h1 className=" py-4 text-gray-700">
            Hi, I'm <span className=" text-[#5651e5]">Shakir</span>
          </h1>
          <h1 className=" py-2 text-gray-700">A Full Stack Web Developer</h1>
          <p className=" py-4 text-gray-600 max-w-[70%] m-auto">
            I use MERN Stack and also adept in Django. To know more about me
            scroll down or try the{" "}
            <span className=" text-[#5651e5] font-semibold"> Terminal</span>.
          </p>
          <div className=" flex justify-center mx-auto max-w-[70%] h-[200px] py-4">
            <Terminal></Terminal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
