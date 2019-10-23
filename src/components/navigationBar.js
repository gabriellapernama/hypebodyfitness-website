import React from 'react'; 
import {Link} from 'gatsby';
import styles from '../styles/navigationBar.module.css';

export default () =>{
return <div className={styles.dropdown}>
    <button type="button" className={styles.dropdownBtn}>
    </button>
    <div className={styles.dropdownContent}>
        <Link to="/" className={styles.link}>home</Link>
        <Link to="/#aboutMe" className={styles.link}>about me</Link>
        <Link to="/#testimonials" className={styles.link}>testimonials</Link>
        <Link to="/#servicesOffered" className={styles.link}>services offered</Link>
        <Link to="/#contact" className={styles.link}>contact</Link>
    </div>
    
</div>
}