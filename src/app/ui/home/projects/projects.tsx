"use client";

import React from "react";
import MainTitle from "../../components/mainTitle/mainTitle";
import ProjectsContainer from "../../projects/projectsContainer/projectsContainer";
import BtnMore from "../../components/btnMore/btnMore";
import styles from "./projects.module.css";

const Projects = () => {
  const handleNewPage = () => {
    console.log("holis");
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <MainTitle text="proyectos" color="black" />

      <ProjectsContainer limit={3} />
      <div className={styles.btnContainer}>
        <BtnMore text="ver más" onClick={handleNewPage} moreHeight={true} moreWidth={false} isGreen={true} textIsWhite={false} />
      </div>
    </section>
  );
};

export default Projects;
