import React from 'react'; 
import {Link} from 'gatsby';
import styles from '../styles/navigationBar.module.css';

export default () =>{
return <div className={styles.container}>
    <Link to="/" className={styles.link}>home&nbsp;&nbsp;&nbsp;&nbsp;</Link>
    <Link to="/#aboutMe" className={styles.link}>about me&nbsp;&nbsp;&nbsp;&nbsp;</Link>
    <Link to="/#testimonials" className={styles.link}>testimonials&nbsp;&nbsp;&nbsp;&nbsp;</Link>
    <Link to="/#servicesOffered" className={styles.link}>services offered&nbsp;&nbsp;&nbsp;&nbsp;</Link>
    <Link to="/#contact" className={styles.link}>contact&nbsp;&nbsp;&nbsp;&nbsp;</Link>
</div>
}