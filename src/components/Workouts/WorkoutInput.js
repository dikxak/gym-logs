import WorkoutForm from './WorkoutForm';

import styles from '../../sass/workouts/WorkoutInput.module.scss';
import logo from '../../img/logo.png';

const WorkoutInput = props => {
  const saveWorkoutHandler = workoutDetails => {
    props.onGetWorkout(workoutDetails);
  };
  return (
    <div className={`${styles['workout-input']}`}>
      <img
        src={logo}
        alt="GymLogs Logo"
        className={`${styles['workout-input__logo']}`}
      />
      <WorkoutForm onSaveWorkout={saveWorkoutHandler} />
      <p className={`${styles['workout-input__copyright']}`}>
        {`Copyright`} &copy;
        {` ${new Date().getFullYear().toString()}. Designed and developed by `}
        <a
          href="https://twitter.com/poudel_dikshak"
          target="_blank"
          rel="noreferrer"
        >
          Dikshak Poudel.
        </a>
      </p>
    </div>
  );
};

export default WorkoutInput;
