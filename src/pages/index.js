import React from "react"
// import NavBar from '../components/navigationBar.js';
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


return <div >
  <div className={styles.container}>
    <img alt="front-page" src={FrontPage} className={styles.frontImg} />
    <div className={styles.welcomeText}>
      <div className={styles.logo}>HypeBody Fitness: </div>
      <div className={styles.subLogo}>Personal Training</div>
    </div>
  </div>
    <div className={styles.parent}>
            <AboutMe id="aboutMe" />
            <Testimonials id="testimonials" />
            <ServicesOffered id="servicesOffered" />
            <Contact id="contact" />            
    </div>

    
  </div>

}
