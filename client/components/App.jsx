import React from 'react';
import HabitList from './HabitList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      habitList: []
    }
  }

  render() {
    return (
      <div>
        <h1>Resolute</h1>
        <h3>Today</h3>
        <HabitList />
      </div>
    );
  }
}

export default App;