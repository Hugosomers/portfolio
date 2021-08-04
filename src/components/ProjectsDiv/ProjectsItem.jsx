import React from 'react';
import projectsStyles from '../../css/projects.module.css';
import { AiOutlineGithub } from 'react-icons/ai';

export default function ProjectsItem() {
  const array = ['1','1','1','1','1','1','1','1','1'];
  return (
    <>
    {array.map((item, index) => (
      <div
        className={projectsStyles.projectItemContainer}
      >
        <img alt="ProjectItem"/>
        <div
          className={projectsStyles.projectItemDescription}
        >
          <h1
            className={projectsStyles.projectItemTitle}
          >
            Projeto {index}
          </h1>
          <p
            className={projectsStyles.projectItemText}
          >
            Descrição do projeto Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit distinctio quia quibusdam vero doloremque repellendus, quas, provident magni eius deleniti ut delectus ducimus quos corrupti numquam ipsa? Eos, ad delectus. {index}
          </p>
          <div 
            className={projectsStyles.projectItemButtonsContainer}
          >
            <button
              className={projectsStyles.projectItemButton}
            >
              Acessar Projeto
            </button>
            <AiOutlineGithub  size={40} color={'#AD5C51'} className={projectsStyles.projectsIcons}/>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}
