import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const ProjectCard = ({ img_src, img_alt, title, desc, url, techs }) => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <div
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className=" flex flex-col rounded-md shadow-2xl shadow-gray-700 hover:translate-y-[-1.05rem] ease-in duration-100 hover:bg-[#d4f7f6] hover:shadow-[#36a19e] hover:cursor-default "
      >
        <Image src={img_src} alt={img_alt} className=" rounded-md"></Image>
        <Link href={url}>
          <h3 className=" py-4 px-2">{title}</h3>
        </Link>
        <div className="flex justify-between mb-2">
          <div className="flex items-center flex-wrap">
            {!hover
              ? techs.slice(0, 4).map((x) => (
                  <p className=" text-gray-600 px-2 text-sm flex items-center hover:text-[#5651e5]">
                    <RiRadioButtonFill className="pr-1" />
                    {x}
                  </p>
                ))
              : techs.map((x) => (
                  <p className=" text-gray-600 px-2 text-sm flex items-center hover:text-[#5651e5]">
                    <RiRadioButtonFill className="pr-1" />
                    {x}
                  </p>
                ))}
          </div>
        </div>
        <p className=" px-2">{hover ? desc : desc.substring(0, 75) + "..."}</p>
        <Link
          className="py-2 mb-4 px-2 text-center text-[#5651e5] hover:underline"
          href={url}
          target="_blank"
        >
          Click to see by yourself &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
