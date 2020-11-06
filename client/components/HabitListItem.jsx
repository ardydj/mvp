import React from 'react';

const HabitListItem = (props) => {
  return (
    <div className="individual-habit">
        <div className="habit-title">
        {props.habitItem.title}
        </div>
        <button className="habit-button" onClick={() => {props.handleCheckMark(props.habitIndex)}}>√</button>
        <button className="habit-button" onClick={() => {props.handleCrossMark(props.habitIndex)}}>X</button>
        <div className="habit-streak">Streak: {props.habitItem.streak}</div>
    </div>
  );
}

export default HabitListItem;