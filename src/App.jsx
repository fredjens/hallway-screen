import React, { Component } from 'react';

import Webcam from './Webcam';
import Circle from './Circle';
import Weather from './Weather';
import Bus from './Bus';
import Time from './Time';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="flex-full">
        <div className="flex-columner">
          <div className="flex center">
            <Time />
            <Weather />
          </div>
        </div>
        <div className="flex-column">
          <Bus name="CC Vest" icon="🚌" id="3012542" />
          <Bus name="Lilleaker" icon="🚎" id="3012540" />
          <Bus name="til Oslo" icon="🚄" id="3012550" direction={['3','4']} />
        </div>
      </div>
    )
  }
}

export default App;
