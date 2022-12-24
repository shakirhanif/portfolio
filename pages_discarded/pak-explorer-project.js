import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import pak_explorers from "../public/assets/projects/pak-explorers.png";
const todo = () => {
  return (
    <div className=" w-full">
      <div className=" w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className=" absolute z-1 "
          layout="fill"
          objectFit="cover"
          src={pak_explorers}
        ></Image>
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2>Pak Explorers Website</h2>
          <h3>NextJs</h3>
        </div>
      </div>
      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className=" col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            A simple and modern design of landing page of photographic society
            exploring amazing sites in Pakistan. This demo website is made using
            NextJs with responsive navbar and gallery slides.
          </p>
          <Link href="https://pak-explorers.vercel.app/">
            <button className=" px-8 py-2 mt-4 mr-4">DEMO</button>
          </Link>
          <Link href="https://github.com/shakirhanif/pak-explorers">
            <button className=" px-8 py-2 mt-4 ">CODE</button>
          </Link>
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 ">
          <div className="p-2">
            <p className=" text-center font-bold pb-5">Technologies</p>
            <div className=" grid grid-cols-3 md:grid-cols-1">
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextJs
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
            </div>
          </div>
        </div>
        <Link href={"/#projects"}>
          <p className=" underline pointer-cursor">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default todo;
