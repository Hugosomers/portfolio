import React from 'react';
import * as emailjs from "emailjs-com";
import contactStyles from '../css/contact.module.css';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_pbvvxkq', 'template_b9likoq', e.target, 'user_8I1LV5QdADayQUrqoCaTU')
      .then((result) => {
          alert('Email enviado!');
      }, (error) => {
          alert(error.text);
      });
  }
  return (
    <div className={contactStyles.contactDiv}>
      <div className={contactStyles.contactApresentationDiv}>
        <h1 className={contactStyles.contactHeadingTitle}>Entre em contato comigo.</h1>
        <div>
          <Link
            to={{pathname: 'https://www.linkedin.com/in/hugo-somers-lombardi-abreu/'}}
            target='_blank'
          > 
            <SiLinkedin  size={40} color={'#2867B2'} className={contactStyles.icons} />
          </Link>
          <Link
            to={{pathname: 'https://github.com/Hugosomers'}}
            target='_blank'
          > 
            <SiGithub  size={40} color={'#AD5C51'} className={contactStyles.icons} />
          </Link>
        </div>
      </div>
      <div className={contactStyles.formDiv}>
        <form className={contactStyles.contactForm} onSubmit={sendEmail}>
          <label>Nome</label>
            <input type="text" name="user_name" className={contactStyles.contactFormInput} placeholder="Digite seu nome completo" />

          <label>Email</label>
            <input type="email" name="user_email" className={contactStyles.contactFormInput} placeholder="Digite seu email" />

          <label>Número de telefone </label>
            <input type="text" name="contact_number" className={contactStyles.contactFormInput} placeholder="Digite seu número para contato" />

          <label>Mensagem</label>
            <textarea name="message" />
          
          <button type="submit" value="Send" className={contactStyles.contactFormButton}>Enviar</button>
        </form>
      </div>
    </div>
  )
}
