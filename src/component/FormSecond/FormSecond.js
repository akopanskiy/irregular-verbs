import React from 'react';
import styles from './FormSecond.module.css';

const FormSecond = ({ value, click }) => {
  return (
    <div className={styles.together}>
      <button type="button" onClick={click}>
        Second form
        <span></span>
        <span></span>
        <span></span>
      </button>

      <input
        className={styles.lfInput}
        type="text"
        name="secondForm"
        defaultValue={value}
        readOnly
      ></input>
    </div>
  );
};
export default FormSecond;
