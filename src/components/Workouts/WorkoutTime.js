import React from 'react';

const WorkoutTime = props => {
  const time = +props.time * 60;
  const hour = Math.floor(time / 60);
  const minute = time % 60;

  return <span>{`⌚ ${hour} Hours ${minute} Minutes`}</span>;
};

export default WorkoutTime;
