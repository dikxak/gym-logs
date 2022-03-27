import React from 'react';

import Card from '../UI/Card';
import WorkoutSelect from '../Workouts/WorkoutSelect';

import styles from '../../sass/workouts/WorkoutOutput.module.scss';

const WorkoutOutput = props => {
  const months = {
    value: 'Jan',
    //prettier-ignore
    options: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',],
  };

  const workoutType = {
    value: 'Chest',
    //prettier-ignore
    options:['Chest','Legs','Shoulder','Back','Biceps','Triceps',],
  };
  return (
    <div className={`${styles['workout-output']}`}>
      <div className={styles['workout-output__filters']}>
        <Card className={styles['workout-output__filter']}>
          <p>Select by month</p>
          <WorkoutSelect value={months.value} options={months.options} />
        </Card>

        <Card className={styles['workout-output__filter']}>
          <p>Select by workout type</p>
          <WorkoutSelect
            value={workoutType.value}
            options={workoutType.options}
          />
        </Card>
      </div>

      <div className={styles['workout-output__items']}>
        <Card className={styles['workout-output__item']}>
          <p>Chest workout on Jan 12 2022</p>
          <div className={styles['workout-output__item-stats']}>
            <p>🏋️‍♀️ 15 Repetitions</p>
            <p>⛹️‍♀️ 5 Total Sets</p>
            <p>⌚ 5 Hours 30 Minutes</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WorkoutOutput;
