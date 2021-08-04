import React from 'react'
import homeStyles from '../css/home.module.css';
import ProfilePic from '../images/profile.jpeg'
import { FaReact } from 'react-icons/fa';
import { SiRedux, SiJavascript, SiCss3, SiBootstrap, SiHtml5 } from 'react-icons/si';
import { AiOutlineGithub } from 'react-icons/ai';

export default function Home() {
  return (
    <section
      className={homeStyles.homeContainer}
    >
      <div
        className={homeStyles.homeDescriptionContainer}
      >
        <h1
          className={homeStyles.homeHeadingTitle}
        >
          Olá, eu sou o Hugo,
        </h1>
        <h1
          className={homeStyles.homeHeading}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;Front End Developer.
        </h1>
        <div
          className={homeStyles.homeSubContainer}
        >
          <h2
            className={homeStyles.homeHeadingSubTitle}
          >
            O que eu sei?
          </h2>
          <div>
            <SiHtml5  size={70} color={'#e34c26'} className={homeStyles.homeIcons}/>
            <SiCss3 size={70} color={'#264de4'} className={homeStyles.homeIcons}/>
            <SiBootstrap  size={70} color={'#602C50'} className={homeStyles.homeIcons}/>
            <SiJavascript size={70} color={'Yellow'} className={homeStyles.homeIcons}/>
            <FaReact size={70} color={'#61DBFB'} className={homeStyles.homeIcons}/>
            <SiRedux  size={70} color={'#764abc'} className={homeStyles.homeIcons}/>
          </div>
          <div>
            <AiOutlineGithub  size={70} color={'#AD5C51'}/>
          </div>
          <div>
          </div>
        </div>
      </div>

      <div 
        className={homeStyles.homeDescriptionContainer}
      >
        <img
          src={ProfilePic}
          className={homeStyles.homeProfilePic}
          alt="profile"
        />
        <p className={homeStyles.homeParagraph}>
          Hugo Somers Lombardi Abreu<br/>
          São João Del Rei - Minas Gerais<br/>
          Formado em Gestão da Tecnologia da Informação - IF Sudeste MG<br/>
          Especializando em desenvolvimento web Full Stack pela Trybe
        </p>

        <button
          className={homeStyles.homeButton}
        >
          Currículo
        </button>
      </div>
    </section>
  )
}
