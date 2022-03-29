import React from 'react';

import styles from '../../sass/ui/ErrorModal.module.scss';

const ErrorModal = props => {
  const handleCloseModal = () => {
    props.onCloseModal();
  };
  return (
    <div>
      <div onClick={handleCloseModal} className={styles.overlay}></div>
      <div className={styles['error-modal']}>
        <h3 className={styles['error-modal__title']}>{props.title}</h3>
        <p className={styles['error-modal__message']}>{props.message}</p>
        <button
          onClick={handleCloseModal}
          className={styles['error-modal__confirm']}
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
