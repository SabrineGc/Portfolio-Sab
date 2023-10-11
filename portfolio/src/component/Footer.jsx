import React from 'react';
import "./Footer.css"

const Footer = () =>{
  return (
    <div className='about'>
      <h1>Where can you find me?</h1>
      <p>Available across many plateforms and services</p>
      <a href="mailto:gaceursabrine@yahoo.com" ><img draggable="false" src='https://cdn0.iconfinder.com/data/icons/social-media-and-logos-11/32/Gmail_envelope_letter_email_Gmail_envelope_letter_email-48.png'/></a>
      <a href="https://www.linkedin.com/in/sabrine-gaceur-2480b6119/" target='_blank'><img draggable="false" src='https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_LinkedIn-48.png'/></a>
      <a href="https://github.com/SabrineGc" target='_blank'><img draggable="false" src='https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Github-48.png'/></a>
      <a href="tel:+216 28 474 650"><img draggable="false" src='https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Whatsapp_telephone_handset-48.png'/></a>
    </div>
  )
}

export default Footer;