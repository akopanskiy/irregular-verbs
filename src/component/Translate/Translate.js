import React from 'react';
import styles from './Translate.module.css';

const Translate = ({ value, click }) => {
  return (
    <div className={styles.together}>
      <button type="button" onClick={click}>
        Translate
        <span></span>
        <span></span>
        <span></span>
      </button>

      <input
        className={styles.lfInput}
        type="text"
        name="translate"
        defaultValue={value}
        readOnly
      ></input>
    </div>
  );
};
export default Translate;
