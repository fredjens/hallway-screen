import React, {PropTypes} from 'react';
import dateFns from 'date-fns';
import shortid from 'shortid';
import autoBind from 'auto-bind';
import RuterApi from '../utils/RuterApi';

export default class Bus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bus: [] }
    autoBind(this);
  }

  componentWillMount() {
    this.getBusData();
    setInterval(() => {
      console.log('poll');
      this.getBusData();
    }, 10000);
  }

  getBusData() {
    RuterApi(this.props.id).then(
      data => {
        this.setState({
          bus: data,
        })
      }
    )
  }

  componentWillUnmount(){
    clearInterval();
  };

  render() {
    const { bus } = this.state;
    const { icon, name } = this.props;

    const getEmoji = data => data === '1' ? '👉' : '👈';

    let busses = bus.slice(0, 4);

    if (this.props.direction) {
      busses = bus.filter(b =>
        b.MonitoredVehicleJourney.MonitoredCall.DeparturePlatformName === this.props.direction[0] ||
        b.MonitoredVehicleJourney.MonitoredCall.DeparturePlatformName === this.props.direction[1]
      ).slice(0, 4);
    }

    return (
      <div className="flex-item">
        <h2>{icon} {name}</h2>
        {busses.map(b => {
          const platform = b.MonitoredVehicleJourney.MonitoredCall.DeparturePlatformName;
          const timeOnStop = b.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime;
          const routeNmbr = b.MonitoredVehicleJourney.LineRef;
          const routeName = b.MonitoredVehicleJourney.DestinationName;

          return (
            <div key={shortid.generate()}>
              <h3>{dateFns.distanceInWordsToNow(timeOnStop)} </h3>
              <p>{routeNmbr} {routeName}</p>
            </div>
          )
        })}
        {!bus.length && <div>Ingen avganer</div>}
      </div>
    );
  }
}

Bus.propTypes = {
};
