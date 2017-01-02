
import React, {PropTypes} from 'react';
import autoBind from 'auto-bind';
import dateFns from 'date-fns';

export default class Time extends React.Component {
  constructor() {
    super();
    autoBind(this);
    this.state = {time: (new Date())};
  }

  componentWillMount() {
    setInterval(() => {
      this.getTime();
    }, 5000);
  }

  getTime() {
      console.log('seconds');
      this.setState({time: (new Date())});
  }

  render() {
    const { time } = this.state;

    return (
      <div className="flex-item right">
        <h1>{dateFns.format(time, 'HH:mm')}</h1>
      </div>
    );
  }
}

Time.propTypes = {
};
