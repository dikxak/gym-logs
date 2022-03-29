import React, { useState } from 'react';

import Container from './components/UI/Container';
import WorkoutInput from './components/Workouts/WorkoutInput';
import WorkoutOutput from './components/Workouts/WorkoutOutput';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const getWorkoutHandler = workout => {
    setWorkouts(prev => [...prev, workout]);
  };
  return (
    <div>
      <Container>
        <WorkoutInput onGetWorkout={getWorkoutHandler}></WorkoutInput>
        <WorkoutOutput items={workouts}></WorkoutOutput>
      </Container>
    </div>
  );
}

export default App;
