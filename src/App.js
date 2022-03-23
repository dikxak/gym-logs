import React from 'react';

import Container from './components/UI/Container';
import WorkoutInput from './components/Workouts/WorkoutInput';
import WorkoutOutput from './components/Workouts/WorkoutOutput';

function App() {
  return (
    <div>
      <Container>
        <WorkoutInput></WorkoutInput>
        <WorkoutOutput></WorkoutOutput>
      </Container>
    </div>
  );
}

export default App;
