import React, { Component } from 'react';
import autoBind from 'auto-bind';
import dateFns from 'date-fns';
import Skycons from 'react-skycons';

function getIcon(name) {

  function checkIfDayOrNight() {
    const time = dateFns.getHours((new Date));
    const isDay = time > 7 && time < 17 ? 'DAY' : 'NIGHT';
    return isDay;
  }

  switch(name) {
    case 'Sun':
    case 'HeavySnowThunderSun':
      return `CLEAR_${checkIfDayOrNight()}`;
    case 'Cloud':
      return `CLOUDY`;
    case 'Fog':
      return `FOG`;
    case 'LightCloud':
    case 'PartlyCloud':
    case 'LightRainSun':
      return `PARTLY_CLOUDY_${checkIfDayOrNight()}`;
    case 'SleetSun':
    case 'Sleet':
    case 'SleetSunThunder':
    case 'SleetThunder':
    case 'HeavySleetThunderSun':
    case 'LightSleetSun':
    case 'HeavySleetSun':
    case 'LightSleet':
    case 'HeavySleet':
      return 'SLEET';
    case 'SnowSun':
    case 'Snow':
    case 'SnowThunder':
    case 'SnowSunThunder':
    case 'HeavySnowThunderSun':
    case 'LightSnowSun':
    case 'HeavysnowSun':
    case 'LightSnow':
    case 'HeavySnow':
      return 'SNOW';
    case 'LightRain':
    case 'Rain':
    case 'RainThunder':
    case 'LightRainThunder':
      return 'RAIN';
    default:
     return `PARTLY_CLOUDY_${checkIfDayOrNight()}`;
  }
};

const icons = [
  'CLEAR_DAY',
  'CLEAR_NIGHT',
  'PARTLY_CLOUDY_DAY',
  'PARTLY_CLOUDY_NIGHT',
  'CLOUDY',
  'RAIN',
  'SLEET',
  'SNOW',
  'WIND',
  'FOG'
]

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
          <Skycons color="white" icon={getIcon(day.icon)} className="skycon" />
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
