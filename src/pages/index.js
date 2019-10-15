import React from "react"
import NavBar from '../components/navigationBar.js';
import Welcome from '../components/welcome.js';
import AboutMe from '../components/aboutMe.js';
import Testimonials from '../components/testimonials.js';
import ServicesOffered from '../components/servicesOffered.js';
import Contact from '../components/contact.js';

export default () => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true,
      easing: 'easeInOutCubic'
    })
  }


return <div>
    <div><NavBar /></div>
    <div>
        <Welcome />
        <AboutMe id="aboutMe" />
        <Testimonials id="testimonials" />
        <ServicesOffered id="servicesOffered" />
        <Contact id="contact" />
    </div>
    </div>

}
