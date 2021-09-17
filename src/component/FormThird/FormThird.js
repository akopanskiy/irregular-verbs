import React from 'react';
import styles from './FormThird.module.css';

const FormThird = ({ value, click }) => {
  return (
    <div className={styles.together}>
      <button type="button" onClick={click}>
        Third form
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <input
        className={styles.lfInput}
        type="text"
        name="thirdForm"
        defaultValue={value}
        readOnly
      ></input>
    </div>
  );
};
export default FormThird;
