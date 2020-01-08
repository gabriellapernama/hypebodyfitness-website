import React from 'react';
import styles from '../styles/contactPage.module.css'
import sharedStyles from '../styles/aboutMe.module.css'

class Contact extends React.Component {
    constructor(props){
        super(props)
        this.state = {};

    }
    render(){
        return <div id={this.props.id} className={styles.container}>
        <div className={sharedStyles.header1}>Let's get you started</div>
        <form className={styles.form}>
            <div className={styles.label}>
                <label>Name * &nbsp;&nbsp;</label>
                <div>
                    <input type="text" className={styles.firstName} placeholder="First"/>
                    <input type="text" className={styles.nameBox} placeholder="Last"/>
    
                </div>
            </div>
            <div className={styles.label}>
                <label>Email * &nbsp;&nbsp;</label>
                <input className={styles.eachInput} type="email" placeholder="e.g. johnsmith@gmail.com"  />
            </div>
            <div className={styles.label}>
                <label>Fitness Goal &nbsp;&nbsp;</label>
                <textarea className={styles.textArea} type="text"  />
            </div >
            <div className={styles.submitButton}>
                <button className={styles.actualButton}  type="button">Submit</button>
            </div>
        </form>
    </div>
    }
    
}

export default Contact;