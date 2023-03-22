import React, { useEffect } from "react";
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
            I use MERN Stack and also adept in PHP-MySql. To know more about me
            scroll down<span className="sm:hidden">.</span>
            <span className="max-sm:hidden">
              or try the
              <span className=" text-[#5651e5] font-semibold"> Terminal</span>.
            </span>
          </p>
          <div className=" flex justify-center mx-auto max-w-[70%] h-[200px] py-4 max-sm:hidden">
            <Terminal></Terminal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
