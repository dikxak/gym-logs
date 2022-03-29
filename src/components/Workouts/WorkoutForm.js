import React, { useState } from 'react';

import styles from '../../sass/workouts/WorkoutForm.module.scss';

const WorkoutForm = props => {
  const [workoutType, setWorkoutType] = useState('Legs');
  const [workoutDate, setWorkoutDate] = useState('');
  const [workoutReps, setWorkoutReps] = useState('');
  const [workoutSets, setWorkoutSets] = useState('');
  const [workoutTime, setWorkoutTime] = useState('');

  const workoutTypeChangeHandler = e => {
    setWorkoutType(e.target.value);
    console.log(e.target.value);
  };

  const workoutDateChangeHandler = e => {
    setWorkoutDate(e.target.value);
  };

  const workoutRepsChangeHandler = e => {
    setWorkoutReps(e.target.value);
  };

  const workoutSetsChangeHandler = e => {
    setWorkoutSets(e.target.value);
  };

  const workoutTimeChangeHandler = e => {
    setWorkoutTime(e.target.value);
  };

  const workoutFormSubmitHandler = e => {
    e.preventDefault();
    const workoutDetails = {
      id: Math.trunc(Math.random() * 1000000 + 1),
      type: workoutType,
      reps: workoutReps,
      sets: workoutSets,
      time: workoutTime,
      date: new Date(workoutDate),
    };

    props.onSaveWorkout(workoutDetails);

    setWorkoutType('Legs');
    setWorkoutReps('');
    setWorkoutTime('');
    setWorkoutSets('');
    setWorkoutDate('');
  };

  return (
    <form
      onSubmit={workoutFormSubmitHandler}
      className={`${styles['workout-form']}`}
    >
      <div className={`${styles['workout-form__input']}`}>
        <label
          htmlFor="workout-type"
          className={`${styles[`workout-form__label`]}`}
        >
          Select workout type:
        </label>
        <select
          id="workout-type"
          value={workoutType}
          onChange={workoutTypeChangeHandler}
        >
          <option value="Legs">Legs</option>
          <option value="Chest">Chest</option>
          <option value="Shoulder">Shoulder</option>
          <option value="Back">Back</option>
          <option value="Biceps">Biceps</option>
          <option value="Triceps">Triceps</option>
        </select>
      </div>

      <div className={`${styles['workout-form__input']}`}>
        <label
          htmlFor="workout-date"
          className={`${styles[`workout-form__label`]}`}
        >
          Date:
        </label>
        <input
          id="workout-date"
          type="date"
          min="2018-01-01"
          max="2023-12-31"
          value={workoutDate}
          onChange={workoutDateChangeHandler}
        />
      </div>

      <div className={`${styles['workout-form__input']}`}>
        <label
          htmlFor="workout-reps"
          className={`${styles[`workout-form__label`]}`}
        >
          No of reps:
        </label>
        <input
          id="workout-reps"
          type="number"
          min="1"
          step="1"
          value={workoutReps}
          onChange={workoutRepsChangeHandler}
        />
      </div>

      <div className={`${styles['workout-form__input']}`}>
        <label
          htmlFor="workout-sets"
          className={`${styles[`workout-form__label`]}`}
        >
          No of sets:
        </label>
        <input
          id="workout-sets"
          type="number"
          min="1"
          step="1"
          value={workoutSets}
          onChange={workoutSetsChangeHandler}
        />
      </div>

      <div className={`${styles['workout-form__input']}`}>
        <label
          htmlFor="workout-time"
          className={`${styles[`workout-form__label`]}`}
        >
          Total time spent (hr):
        </label>
        <input
          id="workout-time"
          type="number"
          min="0.5"
          step="0.5"
          value={workoutTime}
          onChange={workoutTimeChangeHandler}
        />
      </div>

      <div className={`${styles['workout-form__submit']}`}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default WorkoutForm;
