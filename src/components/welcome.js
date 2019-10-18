import React from 'react';
import styles from '../styles/welcome.module.css';

export default (props) => {
    return <div className={styles.container} id={props.id}>
        <div>
            <div >HypeBody Fitness: </div>
            <div >Personal Training</div>
        </div>
    </div>
}