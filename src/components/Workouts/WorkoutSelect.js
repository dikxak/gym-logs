import React from 'react';

const WorkoutSelect = props => {
  return props.options.map((option, i) => {
    return (
      <option key={i} value={option}>
        {option}
      </option>
    );
  });
};

export default WorkoutSelect;
