import React from 'react'
import homeStyles from '../css/home.module.css';
import Perfil from '../images/Perfil.jpeg'
import { FaReact } from 'react-icons/fa';
import { SiRedux, SiJavascript, SiCss3, SiBootstrap, SiHtml5, SiNodeDotJs, SiMysql, SiMongodb } from 'react-icons/si';
import { AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

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
            <SiNodeDotJs  size={70} color={'#3C873A'} className={homeStyles.homeIcons}/>
            <SiMysql  size={70} color={'#00758F'} className={homeStyles.homeIcons}/>
            <SiMongodb  size={70} color={'#4DB33D'} className={homeStyles.homeIcons}/>
            <AiOutlineGithub  size={70} color={'#AD5C51'} className={homeStyles.homeIcons}/>
          </div>
          <div>
          </div>
        </div>
      </div>

      <div 
        className={homeStyles.homeDescriptionContainer}
      >
        <img
          src={Perfil}
          className={homeStyles.homeProfilePic}
          alt="profile"
        />
        <p className={homeStyles.homeParagraph}>
          Hugo Somers Lombardi Abreu<br/>
          São João Del Rei - Minas Gerais<br/>
          Formado em Gestão da Tecnologia da Informação - IF Sudeste MG<br/>
          Especializando em desenvolvimento web Full Stack pela Trybe
        </p>
        <Link
          to={{pathname: 'https://gitconnected.com/hugosomers/resume'}}
          target='_blank'
        >
          <button
            className={homeStyles.homeButton}
          >
            Currículo
          </button>
        </Link>
      </div>
    </section>
  )
}
