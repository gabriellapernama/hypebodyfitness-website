import React from 'react'; 
import {Link} from 'gatsby';
import styles from './navigationBar.module.css';

export default () =>{

return <div className={styles.container}>
    <Link to="/">Home</Link>
    <Link to="/aboutMe/">About Me</Link>
    <Link to="/contact/">Contact Me</Link>
    <Link to="/testimonials/">Testimonials</Link>
    <Link to="/signIn">Member SignIn</Link>
</div>
}