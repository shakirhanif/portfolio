import React from "react";
import todo_app from "../public/assets/projects/todo_app.png";
import pak_explorers from "../public/assets/projects/pak-explorers.png";
import osum_project from "../public/assets/projects/osum_project.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className=" w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" text-xl tracking-widest text-[#5651e5]">Projects</p>
        <h2 className="py-4">What I've Built</h2>
        <ProjectItem
          title="Pak Explorers Landing Page"
          image={pak_explorers}
          url={"/pak-explorer-project"}
        ></ProjectItem>
        <ProjectItem
          title="OSum Ecommerce Store"
          image={osum_project}
          url={"/osum-project"}
        ></ProjectItem>
        <ProjectItem
          title="SomeThing-ToDo ToDo App"
          image={todo_app}
          url={"/todo-project"}
        ></ProjectItem>
      </div>
    </div>
  );
};

export default Projects;
