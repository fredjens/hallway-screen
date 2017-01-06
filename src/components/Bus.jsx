import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectPublicTransport } from '../actions';

import dateFns from 'date-fns';
import shortid from 'shortid';
import RuterApi from '../services/RuterApi';

class Bus extends React.Component {
  componentWillMount() {
    this.props.selectPublicTransport(this.props.id);
    setInterval(() => {
      // this.props.requestPublicTransport(this.props.id);
    }, 10000);
  }

  componentWillUnmount(){
    clearInterval();
  };

  render() {
    const { bus, icon, name } = this.props;

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

const mapStateToProps = state => ({
  bus: state.publicTransport.publicTransportData.data,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  selectPublicTransport,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bus);
