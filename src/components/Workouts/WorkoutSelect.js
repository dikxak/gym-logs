import React from 'react';

import styles from '../../sass/workouts/WorkoutSelect.module.scss';

const WorkoutSelect = props => {
  return (
    <select className={styles['workout-select']}>
      {props.options.map((option, i) => {
        return (
          <option key={i} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default WorkoutSelect;
