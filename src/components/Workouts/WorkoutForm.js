import styles from '../../sass/workouts/WorkoutForm.module.scss';

const WorkoutForm = () => {
  return (
    <form className={`${styles['workout-form']}`}>
      <div className={`${styles['workout-form__input']}`}>
        <label className={`${styles[`workout-form__label`]}`}>
          Select workout type:
        </label>
        <select value="">
          <option value="Leg">Legs</option>
          <option value="Chest">Chest</option>
          <option value="Shoulder">Shoulder</option>
          <option value="Back">Back</option>
          <option value="Biceps">Biceps</option>
          <option value="Triceps">Triceps</option>
        </select>
      </div>

      <div className={`${styles['workout-form__input']}`}>
        <label className={`${styles[`workout-form__label`]}`}>Date:</label>
        <input type="date" min="2018-01-01" max="2023-12-31" />
      </div>

      <div className={`${styles['workout-form__input']}`}>
        <label className={`${styles[`workout-form__label`]}`}>
          No of reps:
        </label>
        <input type="number" min="1" step="1" />
      </div>

      <div className={`${styles['workout-form__input']}`}>
        <label className={`${styles[`workout-form__label`]}`}>
          No of sets:
        </label>
        <input type="number" min="1" step="1" />
      </div>

      <div className={`${styles['workout-form__input']}`}>
        <label className={`${styles[`workout-form__label`]}`}>
          Total time spent (hr):
        </label>
        <input type="number" min="0.5" step="0.5" />
      </div>

      <div className={`${styles['workout-form__submit']}`}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default WorkoutForm;
