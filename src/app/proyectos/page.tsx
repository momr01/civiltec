import React from "react";
import styles from "./projectsPage.module.css";
import ProjectsContainer from "../ui/projects/projectsContainer/projectsContainer";
import { projects } from "@/data/projectsItems";

const ProjectsPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className="titleCenter">Proyectos</h2>
        <ProjectsContainer limit={projects.length} />
      </div>
    </section>
  );
};

export default ProjectsPage;
