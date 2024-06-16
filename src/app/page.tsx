'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Cards from '../components/cards/Cards';
import Inputs from '@/components/inputs/Inputs';
import Confirmed from '../components/confirmed/Confirmed';



function Confirmation() {
  const [cardDetails, setCardDetails] = useState({
    name: '',
    number: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  });

  const [confirmedDetails, setConfirmedDetails] = useState({
    name: '',
    number: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  });

  const [isConfirmed, setIsConfirmed] = useState(false);  

  const handleConfirm = () => {
    setConfirmedDetails(cardDetails);

    
    setIsConfirmed(true);

    setCardDetails({
      name: '',
      number: '',
      expMonth: '',
      expYear: '',
      cvc: ''
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <Cards cardDetails={confirmedDetails} />
        {isConfirmed ? (
          <Confirmed />
        ) : (
          <Inputs cardDetails={cardDetails} setCardDetails={setCardDetails} handleConfirm={handleConfirm} />
        )}
      </div>
    </div>
    
  );
}

export default Confirmation;




