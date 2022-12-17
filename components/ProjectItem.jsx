import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = (props) => {
  return (
    <div>
      <div className=" grid md:grid-cols-2 gap-8">
        <div className=" relative flex flex-auto justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#d4f7f6] ">
          <Image
            src={props.image}
            alt="/"
            className="rounded-xl group-hover:opacity-20"
          ></Image>
          <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <h3 className=" text-2xl text-white tracking-wider text-center ">
              {props.title}
            </h3>
            <p className=" pb-4 pt-2 text-white text-center">ReactJs</p>
            <Link href={props.url}>
              <p className=" text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer ">
                More info
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
