import React from 'react';
import HabitListItem from './HabitListItem.jsx';

const HabitList = (props) => {
  console.log('This is from habitList: ', props.habits);
  return (
    <div id="habit-container">
      <div id="success-rate">Success Rate: {props.successCompute()}%</div>
      <div id="habit-items">{props.habits.map((habit, index) => <HabitListItem habitItem={habit} key={habit.title} habitIndex={index} handleCheckMark={props.handleCheckMark} handleCrossMark={props.handleCrossMark}/>)}</div>
    </div>
  );
};

export default HabitList;