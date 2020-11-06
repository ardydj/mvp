import React from 'react';

const HabitListItem = (props) => {
  return (
    <div>
      <div>
        {props.habitItem.title}
        <span><button onClick={() => {props.handleCheckMark(props.habitIndex)}}>√</button></span>
        <span><button>X</button></span>
        <span>Streak: {props.habitItem.streak} days</span>
      </div>
    </div>
  );
}

export default HabitListItem;