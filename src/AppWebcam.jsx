import React, { Component } from 'react';
import autoBind from 'auto-bind';
import Webcam from './Webcam';
import Weather from './Weather';
import Circle from './Circle';
import { Throttle } from 'react-throttle';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      text: 'Hello, how are you today?',
      head: {},
    };
    autoBind(this);
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        text: 'Do you have a good morning?',
      })
    }, 5000)
  }

  getPosition(pos) {
    if (pos[0]) {
      this.setState({
        head: pos[0],
      })
    }
  }

  render() {
    const { text, head } = this.state;

    return(
      !this.state.loading ?
      <div>
          <Weather />
          <Throttle time="500" handler="getPosition">
            <Webcam getPosition={this.getPosition} />
          </Throttle>
        <Circle pos={head} />
      </div>
      :
      <h2>Loading... 🌩</h2>
    )
  }
}

export default App;
