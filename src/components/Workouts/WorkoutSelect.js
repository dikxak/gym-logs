import React from 'react';

import styles from '../../sass/workouts/WorkoutSelect.module.scss';

const WorkoutSelect = props => {
  return (
    <select value={props.value} className={styles['workout-select']}>
      {props.options.map(option => {
        return <option value={option}>{option}</option>;
      })}
    </select>
  );
};

export default WorkoutSelect;
