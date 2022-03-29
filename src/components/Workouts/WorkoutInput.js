import React, { useState } from 'react';

import WorkoutForm from './WorkoutForm';
import ErrorModal from '../UI/ErrorModal';

import styles from '../../sass/workouts/WorkoutInput.module.scss';
import logo from '../../img/logo.png';

const WorkoutInput = props => {
  const [userError, setUserError] = useState();

  const saveWorkoutHandler = workoutDetails => {
    props.onGetWorkout(workoutDetails);
  };

  const handleErrorOccur = error => {
    setUserError(error);
  };
  return (
    <div>
      {userError && (
        <ErrorModal
          onCloseModal={handleErrorOccur}
          title={userError.title}
          message={userError.message}
        />
      )}

      <div className={`${styles['workout-input']}`}>
        <img
          src={logo}
          alt="GymLogs Logo"
          className={`${styles['workout-input__logo']}`}
        />
        <WorkoutForm
          onSaveWorkout={saveWorkoutHandler}
          onErrorOccur={handleErrorOccur}
        />
      </div>
    </div>
  );
};

export default WorkoutInput;
