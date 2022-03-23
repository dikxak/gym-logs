import styles from '../../sass/workouts/WorkoutOutput.module.scss';

const WorkoutOutput = props => {
  return <div className={`${styles['workout-output']}`}>{props.children}</div>;
};

export default WorkoutOutput;
