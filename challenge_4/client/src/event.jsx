import React from 'react';
import _ from 'lodash';
import Styles from './event.css';


class Event extends React.Component {
	constructor(props) {
		super(props);
	}

  cleanDate (date) {
    if (!isNaN(date) && date < 0) {
      return '' + (date * -1) + ' BC';
    }
    return date;
  }

	render () {
		return (
			<div className="events" >
				<h4>{this.cleanDate(this.props.data.date)}</h4>
				<p>{this.props.data.description}</p>
			</div>
		);
	}
}

export default Event;