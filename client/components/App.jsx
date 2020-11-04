import React from 'react';

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
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;