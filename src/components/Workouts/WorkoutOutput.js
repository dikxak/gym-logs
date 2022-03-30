import React, { useState } from 'react';

import Card from '../UI/Card';
import WorkoutSelect from '../Workouts/WorkoutSelect';
import WorkoutDate from './WorkoutDate';
import WorkoutTime from './WorkoutTime';

import styles from '../../sass/workouts/WorkoutOutput.module.scss';
import classes from '../../sass/workouts/WorkoutSelect.module.scss';

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

  const [type, setType] = useState('Chest');
  const [month, setMonth] = useState('Jan');

  const typeChangeHanlder = e => {
    setType(e.target.value);
  };

  const monthChangeHandler = e => {
    setMonth(e.target.value);
  };

  const workouts = props.items.filter(
    item =>
      `${item.date.toLocaleString('en-US', { month: 'short' })}` === month &&
      item.type === type
  );

  if (props.items.length === 0)
    return (
      <p className={styles['workout-output__fallback']}>
        No gym logs found. Please start logging.
      </p>
    );
  return (
    <div className={`${styles['workout-output']}`}>
      <div className={styles['workout-output__filters']}>
        <Card className={styles['workout-output__filter']}>
          <p>Select by month</p>
          <select
            onChange={monthChangeHandler}
            className={classes['workout-select']}
          >
            <WorkoutSelect options={months.options} />
          </select>
        </Card>

        <Card className={styles['workout-output__filter']}>
          <p>Select by workout type</p>
          <select
            onChange={typeChangeHanlder}
            className={classes['workout-select']}
          >
            <WorkoutSelect options={workoutType.options} />
          </select>
        </Card>
      </div>

      <div className={styles['workout-output__items']}>
        {workouts.length === 0 && (
          <p className={styles['workout-output__fallback--small']}>
            No any Workouts Found 😟
          </p>
        )}
        {workouts.length > 0 &&
          workouts.map(item => {
            return (
              <Card key={item.id} className={styles['workout-output__item']}>
                <p>
                  {item.type} workout on <WorkoutDate date={item.date} />
                </p>
                <div className={styles['workout-output__item-stats']}>
                  <p>🏋️‍♀️ {item.reps} Repetitions</p>
                  <p>⛹️‍♀️ {item.sets} Total Sets</p>
                  <p>
                    <WorkoutTime time={item.time} />
                  </p>
                </div>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default WorkoutOutput;
