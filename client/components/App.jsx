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
        this.setState({
          habitList: response.data
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    console.log(this.state.habitList)
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