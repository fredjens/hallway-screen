import React, { Component } from 'react';
import autoBind from 'auto-bind';
import dateFns from 'date-fns';
import Skycons from 'react-skycons';
import GetWeatherIcon from '../utils/GetWeatherIcon';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      weather: [],
      loading: true,
    };
    autoBind(this);
  }

  componentWillMount() {
    const pollWeather = () => {
      setTimeout(() => {
        this.loadWeatherData();
        pollWeather()
      }, 100000);
    }
    pollWeather();
    this.loadWeatherData();
  }

  loadWeatherData() {
    console.log('load weather');
    fetch('http://localhost:4000')
      .then((res) => res.text())
      .then(data => {
        this.setState({
          weather: JSON.parse(data),
          loading: false,
        });
      });
  };

  render() {
    const { weather, loading } = this.state;
    const day = weather[0];
    const rain = loading ? 0 : parseFloat(day.rain);
    const isItRaining = rain > 0 ? true : false;

    const temperature = loading ? 0 : parseFloat(day.temperature);
    const isItIcy = temperature < 0 ? true : false;

    return(
      !loading ?
      <div className="flex-item">
        <div className="center">
          <Skycons color="white" icon={GetWeatherIcon(day.icon)} className="skycon" />
          <h1>
            {day.temperature.replace('celsius', '°')}
          </h1>
          <div>Rain: {day.rain}</div>
          <div>Wind: {day.windGust.mps} mps</div>
        </div>
      </div>
      :
      <h2>Loading... 🌩</h2>
    )
  }
}

export default App;
