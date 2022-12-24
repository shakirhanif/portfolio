import React from "react";
import ProjectCard from "./ProjectCard";
import pak_explorers from "../public/assets/projects/pak-explorers.png";
import osum_project from "../public/assets/projects/osum_project.png";

const ProjectCards = () => {
  return (
    <div id="projects" className=" w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" text-xl tracking-widest text-[#5651e5]">Projects</p>
        <h2 className="py-4 pb-8">What I've Built</h2>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <ProjectCard
            img_src={pak_explorers}
            img_alt="Pak-Explorers Image"
            title="Pak-Explorers"
            desc="A simple and modern design of landing page of photographic society
            exploring amazing sites in Pakistan. This demo website is made using
            NextJs with responsive navbar and gallery slides."
            url="https://pak-explorers.vercel.app/"
            techs={["React", "NextJs"]}
          ></ProjectCard>
          <ProjectCard
            img_src={osum_project}
            img_alt="/"
            title="Osum-Store"
            desc="This is complete ecommerce website implemmenting complete, user
            registeration, login and cart functionality with backend using next
            auth and other technologies. "
            url="https://ecommerce-osum.vercel.app/"
            techs={[
              "NextJs",
              "NextAuth",
              "MongoDb",
              "TailwindCSS",
              "JS-Cookie",
            ]}
          ></ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
