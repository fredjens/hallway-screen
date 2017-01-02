import React, { Component } from 'react';
import autoBind from 'auto-bind';
import throttle from 'lodash/throttle';

class App extends Component {
  constructor() {
    super();
    autoBind(this);
  }

  componentDidMount() {
    if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true}, this.handleVideo, this.videoError);
    }
  }

  handleVideo(stream) {
    var tracker = new (window.tracking).ObjectTracker('face');
    var video = this.video;
    console.log(video.offsetHeight, video.offsetWidth);
    tracker.setInitialScale(10);
    tracker.setStepSize(2);
    tracker.setEdgesDensity();
    window.tracking.track(video, tracker, { camera: true });
    tracker.on('track', event => {
        this.props.getPosition(event.data);
    });
  }

  videoError(err) {
      console.log('error', err);
  }

  render() {
    return <video autoPlay ref={ref => this.video = ref} className="webcam" />;
  }
}

export default App;
