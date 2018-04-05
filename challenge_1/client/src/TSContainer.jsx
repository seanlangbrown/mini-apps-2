import React from 'React';
import TSGraph from './TSGraph.jsx';
//import sampleData from '../../test/sampleData.js'
//import axios from 'axios';
import getCoinDesk from './getCoinDesk.js';


class TSContainer extends React.Component {

  constructor () {
    super();
    this.state = {
      data: null
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    console.log('container fetchng data');
    getCoinDesk()
    .then((data) => {
      console.log('data', data);
      this.setState({data: data});
    })
    .catch((err) => (console.log('ERROR', err)));
  }

  componentDidMount () {
    console.log('ComponentDidMount');
    this.fetchData();
  }

  render () {
    return (
      <div>
        {this.state.data === null ? console.log('data is null') : <TSGraph data={this.state.data}/> }
      </div>
    );
  }

}

export default TSContainer;
