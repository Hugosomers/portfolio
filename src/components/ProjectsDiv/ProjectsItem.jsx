import React from 'react';
import projectsStyles from '../../css/projects.module.css';
import { Link } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai';
import projectsData from '../../projectsData';

export default function ProjectsItem() {
  return (
    <>
      {projectsData.map((item, index) => (
        <div key={index} className={projectsStyles.projectItemContainer}>
          <img src={item.image} alt="ProjectItem" className={projectsStyles.projectsImg}/>
          <div className={projectsStyles.projectItemDescription}>
            <h1 className={projectsStyles.projectItemTitle}>{item.name}</h1>
            <p className={projectsStyles.projectItemText}>{item.description}</p>
            <div className={projectsStyles.projectItemButtonsContainer}>
              <Link
                to={{pathname: item.projectAccessLink}}
                target='_blank'
              >
                <button className={projectsStyles.projectItemButton}>
                  Acessar Projeto
                </button>
              </Link>
              <Link
                to={{pathname: item.gitHubLink}}
              >
                <AiOutlineGithub
                  size={40}
                  color={'#AD5C51'}
                  className={projectsStyles.projectsIcons}
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
