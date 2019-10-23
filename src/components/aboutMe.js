import React from 'react'; 
import styles from '../styles/aboutMe.module.css';
import JulianBeforeAndAfter from '../images/Julian-before-and-after.jpg';
import JulianLifts from '../images/Julian-Lifts.jpg';

export default (props) => {
    return <div id={props.id} className={styles.aboutMeContainer}>
        <div className={styles.header1}>Meet the Trainer</div>
        <div className={styles.aboutMeContent}>
            <div className={styles.julianName} >julian nola</div>
            <div className={styles.aboutMeSubContent}>
                <div className={styles.align}>I’ve always been the fat guy! As in 30% body fat and above fat guy! I spent several years in the gym, did Crossfit, starved myself, and just about every other fad diet in the market just to NEVER see the results I wanted!</div>
                <img className={styles.julianPhoto} alt="JulianProgress" src={JulianBeforeAndAfter}/>
            </div>
            <div className={styles.aboutMeSubContent}>
                <img className={styles.julianPhoto} alt="julianlifts" src={JulianLifts} />    
                However after picking up a trainer myself, I lost 59 pounds and 19% body fat in 5 months!  This experience helped me realize just how important a trainer can be!  Working out SMART is KEY.  And that’s why I’m here to help you every step of the way!
            </div>
            
        </div>
        <br/><div className={styles.lastBit}>My life is a personal testimony of weight loss, strength training, and fitness, let’s make your life one too!</div><br />

    </div>
}
