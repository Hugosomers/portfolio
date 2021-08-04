import React from 'react';
import projectsStyles from '../css/projects.module.css';
import ProjectsItem from '../components/ProjectsDiv/ProjectsItem';

export default function Projects() {
  return (
    <section
      className={projectsStyles.projectsPageContainer}
    >
      <div
        className={projectsStyles.projectsTitleContainer}
      >
        <h1
          className={projectsStyles.projectsHeadingTitle}
        >
          Projetos desenvolvidos.
        </h1>
      </div>

      <div
        className={projectsStyles.projectsContainer}
      >
        <ProjectsItem />
      </div>
    </section>
  )
}
