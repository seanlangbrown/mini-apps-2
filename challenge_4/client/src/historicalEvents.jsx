import React from 'react';
import _ from 'lodash';
import Event from './event.jsx';

class HistoricalEvents extends React.Component {
  constructor (props) {
  	super(props);
  }

  render () {
  	return (
      <div className="events">
        {this.props.events.length > 0 ? _.map(this.props.events, (descriptors) => {
          return (
            <Event data={descriptors} />
            );
        }) : <p>no results</p>}
      </div>
    );
  }
}


export default HistoricalEvents;