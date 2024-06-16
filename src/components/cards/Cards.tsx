import React from "react";
import styles from "./Cards.module.css";

interface CardDetails {
  name: string;
  number: string;
  expMonth: string;
  expYear: string;
  cvc: string;
}

const Cards: React.FC<{ cardDetails: CardDetails }> = ({ cardDetails }) => {
  const formatCardNumber = (number: string) => {
    return number.replace(/\s/g, "").replace(/(.{4})/g, "$1 ").trim();
  };

  return (
    <div className={styles.images}>
      <img className={styles.backGround} src="/bg-main-desktop.png" alt="backgroundImage" />
      <div className={styles.cardDetails}>
        <img className={styles.cardFront} src="/bg-card-front.png" alt="cardFront" />
        <div className={styles.cardFrontText}>
          <p className={styles.cardNumber}>{formatCardNumber(cardDetails.number) || ''}</p>
          <div className={styles.cardFrontFlex}>
            <p>{cardDetails.name || ''}</p>
            <p>
              {cardDetails.expMonth || ''}
              {cardDetails.expMonth && cardDetails.expYear ? '/' : ''}
              {cardDetails.expYear || ''}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cardBackDetails}>
        <img className={styles.cardBack} src="/bg-card-back.png" alt="cardBack" />
        <p className={styles.cvc}>{cardDetails.cvc || ''}</p>
      </div>
      <img className={styles.icon} src="/favicon-32x32.png" alt="icon" />
    </div>
  );
}

export default Cards;





