import checkIfDayOrNight from './DayOrNight';

export default function getIcon(name) {
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
