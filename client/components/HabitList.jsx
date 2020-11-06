import React from 'react';
import HabitListItem from './HabitListItem.jsx';

const HabitList = (props) => {
  console.log('This is from habitList: ', props.habits);
  return (
    <div>
      <div>Success Rate: {props.successCompute()}%</div>
      {props.habits.map((habit) => <HabitListItem habitItem={habit} key={habit}/>)}
    </div>
  );
};

export default HabitList;