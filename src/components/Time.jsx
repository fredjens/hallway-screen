import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTime } from '../actions';

import autoBind from 'auto-bind';
import { format } from 'date-fns';


class Time extends React.Component {
  componentDidMount() {
    this.props.getTime();

    // Get new time every minute
    setInterval(() => {
      this.props.getTime();
    }, 60000);
  };

  componentWillUnmount(){
    clearInterval();
  };

  render() {
    const { time } = this.props;

    return (
      <div className="flex-item right">
        <h1>{time ? format(new Date(time), 'HH:mm') : format(new Date(), 'HH:mm')}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  time: state.time,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getTime,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Time);
