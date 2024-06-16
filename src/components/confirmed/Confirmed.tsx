import React from "react";
import styles from "../confirmed/Confirmed.module.css"


const Confirmed = () => {




    return (
    
        <div className={styles.confirmed}>
        <div>
            <img src="/approval.png" />
        </div>
        <div className={styles.firstLine}>thank you!</div>
        <div className={styles.secondLine}>We've added your card details</div>
        <div className={styles.continueButton}>
            <button>Continue</button>
        </div>

        </div>

    )

}

export default Confirmed;