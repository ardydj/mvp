import React from 'react';

const HabitListItem = (props) => {
  return (
    <div className="individual-habit">
        <div>
        {props.habitItem.title}
        </div>
        <button className="habit-button" onClick={() => {props.handleCheckMark(props.habitIndex)}}>√</button>
        <button className="habit-button" onClick={() => {props.handleCrossMark(props.habitIndex)}}>X</button>
        <div>Streak: {props.habitItem.streak} days</div>
    </div>
  );
}

export default HabitListItem;