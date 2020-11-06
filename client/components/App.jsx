import React from 'react';
import HabitList from './HabitList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      habitList: []
    }
  }

  componentDidMount() {
    axios.get('/api/habits')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
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