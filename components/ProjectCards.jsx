import React from "react";
import ProjectCard from "./ProjectCard";
import pak_explorers from "../public/assets/projects/pak-explorers.png";
import osum_project from "../public/assets/projects/osum_project.png";
import weather_app from "../public/assets/projects/weather-app.png";
import sticky from "../public/assets/projects/sticky.png";
import drum_kit from "../public/assets/projects/drum_kit.png";
import dice_game from "../public/assets/projects/dice_game.png";
import whatsupp from "../public/assets/projects/whatsupp.png";

const ProjectCards = () => {
  return (
    <div id="projects" className=" w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" text-xl tracking-widest text-[#5651e5]">Projects</p>
        <h2 className="py-4 pb-8">What I've Built</h2>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* this is test if branch publish */}
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
            techs={["NextJs", "NextAuth", "MongoDb", "TailwindCSS"]}
          ></ProjectCard>
          <ProjectCard
            img_src={whatsupp}
            img_alt="/"
            title="Whatsupp Chat App"
            desc="This is clone of Whatsapp Web built with React,Socket, Express and MongoDB. It has authenticate users using Google auth with automatic prompt and save their conversation on database."
            url="https://whatsupp-8fed2.firebaseapp.com/"
            techs={["React", "Express", "Socket", "MongoDB", "MUI"]}
          />
          <ProjectCard
            img_src={weather_app}
            img_alt="/"
            title="Weather App"
            desc="This is single page weather web app made by using express and ejs. It shows weather of a city by searched parameter and retrieve it from openweather api."
            url="https://magenta-rose-dog-cap.cyclic.app/"
            techs={["Node", "Express", "EJS"]}
          ></ProjectCard>
          <ProjectCard
            img_src={sticky}
            img_alt="/"
            title="Sticky"
            desc="This is a sticky notes app to keep track of daily tasks."
            url="https://sticky-7e0d8.web.app/"
            techs={["React", "TailwindCSS", "ReactIcons"]}
          ></ProjectCard>
          <ProjectCard
            img_src={drum_kit}
            img_alt="/"
            title="Drum Kit"
            desc="a web page which emulate sounds of drum kit, its quite fun actually."
            url="https://drum-kit-85ef6.firebaseapp.com/"
            techs={["HTML", "CSS", "JavaScript"]}
          ></ProjectCard>
          <ProjectCard
            img_src={dice_game}
            img_alt="/"
            title="Dice Game"
            desc="This is a simple website which roll dices randomly, its just fun app if you dont have real dices lying around."
            url="https://dicegame-435b8.web.app/"
            techs={["HTML", "CSS", "JavaScript"]}
            hoverProp={true}
          ></ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
