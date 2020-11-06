import React from 'react';

const HabitListItem = (props) => {
  return (
    <div>
      <div>
        {props.habitItem.title}
        <span><button>√</button></span>
        <span><button>X</button></span>
        <span>Streak: {props.habitItem.streak}</span>
      </div>
    </div>
  );
}

export default HabitListItem;