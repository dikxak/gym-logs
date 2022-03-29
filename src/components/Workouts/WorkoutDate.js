import React from 'react';

const WorkoutDate = props => {
  const month = props.date.toLocaleString('en-US', { month: 'short' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return <span>{`${month} ${day} ${year}`}</span>;
};

export default WorkoutDate;
