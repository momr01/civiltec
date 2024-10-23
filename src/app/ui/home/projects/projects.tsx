import React from "react";
import MainTitle from "../../components/mainTitle/mainTitle";
import ProjectsContainer from "../../projects/projectsContainer/projectsContainer";

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-2 border-black bg-gradient-to-b from-mainGreen from-0% via-[#CAE5D7] via-74% to-white to-100%"
    >
      <MainTitle text="proyectos" />

      <ProjectsContainer limit={3} />
      <div className="flex justify-center mt-10">
        <button
        // className={styles.btnMore} onClick={handleNewPage}
        >
          Ver más
        </button>
      </div>
    </section>
  );
};

export default Projects;
