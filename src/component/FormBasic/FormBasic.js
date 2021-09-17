import React from 'react';
import styles from './FormBasic.module.css';

const FormBasic = ({ value, click }) => {
  return (
    <div className={styles.together}>
      <button type="button" onClick={click}>
        Basic form
        <span></span>
        <span></span>
        <span></span>
      </button>

      <input
        className={styles.lfInput}
        type="text"
        name="basic"
        defaultValue={value}
        readOnly
      ></input>
    </div>
  );
};

export default FormBasic;
