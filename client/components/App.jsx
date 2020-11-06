import React from 'react';
import HabitList from './HabitList.jsx';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      habitList: [],
      isLoaded: false,
      showModal: false,
      index: 0
    }
    this.countSuccessRate = this.countSuccessRate.bind(this);
    this.handleCheckMark = this.handleCheckMark.bind(this);
    this.handleCrossMark = this.handleCrossMark.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

  handleShowModal() {
    this.setState({
      showModal: true
    })
  }

  handleCloseModal() {
    this.setState({
      showModal: false
    })
  }

  handleCheckMark(index) {
    this.state.habitList[index].checked = true;
    this.state.habitList[index].streak++;
    this.setState({
      habitList: this.state.habitList
    });
  }

  handleCrossMark(index) {
    this.state.habitList[index].checked = false;
    this.state.habitList[index].streak--;
    this.setState({
      habitList: this.state.habitList,
      index: index
    });
    if (this.state.habitList[index].streak <= -2) {
      this.handleShowModal();
    }
  }

  countSuccessRate() {
    let pass = 0;
    let total = this.state.habitList.length;
    this.state.habitList.forEach((habit) => {
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
          <div id="nav">
            <h1 id="title">Resolute</h1>
            <h3 className="nav-items">reflection</h3>
            <h3 className="nav-items">performance</h3>
            <h3 className="nav-items">account</h3>
          </div>
          <div id="dates">
            <h3 className="today">Today</h3>
          </div>

          <HabitList habits={this.state.habitList} successCompute={this.countSuccessRate} handleCheckMark={this.handleCheckMark} handleCrossMark={this.handleCrossMark}/>
          <Modal show={this.state.showModal} onHide={this.handleCloseModal} centered >
            <Modal.Header closeButton>
              <strong>Why Are You Doing This?</strong>
            </Modal.Header>
            <Modal.Body>{this.state.habitList[this.state.index].statement}</Modal.Body>
            <Modal.Footer>
              <button onClick={this.handleCloseModal}>Close</button>
            </Modal.Footer>
          </Modal>
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