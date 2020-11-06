import React from 'react';
import HabitListItem from './HabitListItem.jsx';

const HabitList = (props) => {
  console.log('This is from habitList: ', props.habits);
  return (
    <div>
      <div>Success Rate: {props.successCompute()}%</div>
      <div>{props.habits.map((habit, index) => <HabitListItem habitItem={habit} key={habit.title} habitIndex={index} handleCheckMark={props.handleCheckMark}/>)}</div>
    </div>
  );
};

export default HabitList;