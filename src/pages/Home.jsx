import React from 'react'
import homeStyles from '../css/home.module.css';
import ProfilePic from '../images/profile.jpeg'

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
