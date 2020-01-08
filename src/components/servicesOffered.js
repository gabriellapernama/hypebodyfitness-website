import React from 'react';
import styles from '../styles/aboutMe.module.css';

export default (props) => {
    return <div id={props.id} className={styles.aboutMeContainer}>
        <div className={styles.header1}>Services Offered</div>
        <div className={styles.blurb}>HypeBody Fitness gears all our programs to help our clients reach their personal fitness and health goals!  Whether it be weight loss, eating healthy, building lean muscle mass, increasing cardio health, athletic training, and even Post-Rehab!  However regardless of your goal, “healthy results” are a must!</div>
        <div className={styles.header2}>Hypebody Fitness specializes in:</div>
        <div className={styles.servicesOfferedList}>
            <div>
                Personal Training
                <div>blurb about PT</div>
            </div>
            <div>
                Healthy Weight Loss
                <div>blurb about PT</div>
            </div>
            <div>
                Strength and Conditioning
                <div>blurb about PT</div>
            </div>
            <div>
                Athletic Training
                <div>blurb about PT</div>
            </div>
            <div>
                Body Building
                <div>blurb about PT</div>
            </div>
            <div>
                Postnatal and Prenatal Training
                <div>blurb about PT</div>
            </div>
        </div>
    </div>
}