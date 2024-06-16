import React, { useState } from "react";
import styles from "./Inputs.module.css";

interface CardDetails {
  name: string;
  number: string;
  expMonth: string;
  expYear: string;
  cvc: string;
}

const Inputs: React.FC<{
  cardDetails: CardDetails;
  setCardDetails: React.Dispatch<React.SetStateAction<CardDetails>>;
  handleConfirm: () => void;
}> = ({ cardDetails, setCardDetails, handleConfirm }) => {
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [expMonthError, setExpMonthError] = useState("");
  const [expYearError, setExpYearError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails(prevDetails => ({
      ...prevDetails,
      [name]: name === "name" ? value.toUpperCase() : value
    }));
  };

  const handleConfirmClick = () => {
    const currentYear = new Date().getFullYear() % 100; 
    const maxYear = currentYear + 10; 

  
    setNameError("");
    setNumberError("");
    setExpMonthError("");
    setExpYearError("");
    setCvcError("");

    let valid = true;

    if (!cardDetails.name) {
      setNameError("Can't be blank");
      valid = false;
    }

    if (!cardDetails.number) {
      setNumberError("Can't be blank");
      valid = false;
    } else if (cardDetails.number.length !== 11) {
      setNumberError("Your card number is not correct");
      valid = false;
    }

    if (!cardDetails.expMonth) {
      setExpMonthError("Can't be blank");
      valid = false;
    } else {
      const expMonth = parseInt(cardDetails.expMonth, 10);
      if (expMonth < 1 || expMonth > 12 || isNaN(expMonth)) {
        setExpMonthError("Expiration month should be between 01 and 12");
        valid = false;
      }
    }

    if (!cardDetails.expYear) {
      setExpYearError("Can't be blank");
      valid = false;
    } else {
      const expYear = parseInt(cardDetails.expYear, 10);
      if (expYear < currentYear || expYear > maxYear || isNaN(expYear)) {
        setExpYearError(`Expiration year should be between ${currentYear} and ${maxYear}`);
        valid = false;
      }
    }

    if (!cardDetails.cvc) {
      setCvcError("Can't be blank");
      valid = false;
    } else if (!/^\d{3}$/.test(cardDetails.cvc)) {
      setCvcError("CVC should be exactly 3 digits");
      valid = false;
    }

    if (valid) {
      handleConfirm();
    }
  };

  return (
    <div className={styles.inputsResp}>
      <div>
        <label htmlFor="name" className={styles.label}>CARDHOLDER NAME</label><br />
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          value={cardDetails.name}
          onChange={handleChange}
        /><br />
        {nameError && <p className={styles.error}>{nameError}</p>}
        <br />

        <label htmlFor="number" className={styles.label}>CARD NUMBER</label><br />
        <input
          type="number"
          id="number"
          name="number"
          className={styles.input}
          value={cardDetails.number}
          onChange={handleChange}
        /><br />
        {numberError && <p className={styles.error}>{numberError}</p>}
        <br />
      </div>

      <div className={styles.expirationInputs}>
        <div>
          <label htmlFor="expMonth" className={styles.label}>EXP. DATE (MM/YY)</label><br />
          <div className={styles.inputExp}>
            <input
              type="number"
              name="expMonth"
              placeholder="MM"
              maxLength={2}
              size={2}
              value={cardDetails.expMonth}
              onChange={handleChange}
            />
            <input
              type="number"
              name="expYear"
              placeholder="YY"
              maxLength={2}
              size={2}
              value={cardDetails.expYear}
              onChange={handleChange}
            />
          </div>
          {expMonthError && <p className={styles.error}>{expMonthError}</p>}
          {expYearError && <p className={styles.error}>{expYearError}</p>}
        </div>

        <div className={styles.cvcInput}>
          <label htmlFor="cvc" className={styles.label}>CVC</label><br />
          <input
            type="number"
            name="cvc"
            className={styles.inputCvc}
            placeholder="e.g. 123"
            maxLength={3}
            value={cardDetails.cvc}
            onChange={handleChange}
          />
          {cvcError && <p className={styles.error}>{cvcError}</p>}
        </div>
      </div>

      <div className={styles.confirmButton}>
        <button onClick={handleConfirmClick}>Confirm</button>
      </div>
    </div>
  );
}

export default Inputs;


