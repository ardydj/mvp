import React from 'react';
import HabitList from './HabitList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      habitList: [],
      isLoaded: false
    }
    this.countSuccessRate = this.countSuccessRate.bind(this);
  }

  componentDidMount() {
    axios.get('/api/habits')
      .then((response) => {
        this.setState({
          habitList: response.data,
          isLoaded: true
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }


  countSuccessRate() {
    let pass = 0;
    let total = this.state.habitList.length;
    this.state.habitList.forEach((habit) => {
      console.log(habit.checked)
      if (habit.checked) {
        pass++;
      }
    });
    let success = pass/total * 100;
    return success;
  }

  render() {
    console.log(this.state.habitList)
    console.log(this.state.habitList.length)
    if (this.state.isLoaded) {
      return (
        <div>
          <h1>Resolute</h1>
          <h3>Today</h3>
          <HabitList habits={this.state.habitList} successCompute={this.countSuccessRate}/>
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}

export default App;