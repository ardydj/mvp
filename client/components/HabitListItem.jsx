import React from 'react';

const HabitListItem = (props) => {
  return (
    <div>
      <div>
        Habit 1
        <span><button>√</button></span>
        <span><button>X</button></span>
        <span>Streak</span>
      </div>
    </div>
  );
}

export default HabitListItem;