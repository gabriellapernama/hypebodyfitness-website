import React from "react"
import NavBar from '../components/navigationBar.js';
import AboutMe from '../components/aboutMe.js';
import Testimonials from '../components/testimonials.js';
import ServicesOffered from '../components/servicesOffered.js';
import Contact from '../components/contact.js';
import styles from '../styles/index.module.css';
import FrontPage from '../images/front-page.jpg';

export default () => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true,
      easing: 'easeInOutCubic'
    })
  }

return <div className={styles.bigContainer}>
  
  <div className={styles.welcomeContainer}>
    <img alt="front-page" src={FrontPage} className={styles.frontImg} />
    <div className={styles.welcomeTextContainer}>
        <div className={styles.logo}>HYPEBODY&nbsp;FITNESS </div>
        <div className={styles.subLogo}>Personal Training</div>
    </div>
  </div>
    <div className={styles.sticky}><NavBar /></div>
  
  <div >
            <div id="aboutMe"><AboutMe /></div>
            <div className={styles.content}><Testimonials id="testimonials" /></div>
            <div className={styles.content}><ServicesOffered id="servicesOffered" /></div>
            <div><Contact id="contact" /> </div>  
  </div> 
  </div>

}
