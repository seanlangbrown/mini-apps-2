import React from 'react';
import Axios from 'axios';
import _ from 'lodash';
import Input from './textInput.jsx';
import HistoricalEvents from './historicalEvents.jsx';
import Pages from './pages.jsx';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      query: '',
      results: [{date: '04/07/2018', description: 'Sean Lang-Brown creates history searcher'}],
      page: 0,
      pages: 0
    };
    this.queryUpdate = this.queryUpdate.bind(this);
    this.requestOnEnter = this.requestOnEnter.bind(this);
    this.changePage = this.changePage.bind(this);
    this.fetchHistory = this.fetchHistory.bind(this);
  }

  fetchHistory (page) {
    page = page ? page : 0;
    Axios.get(`/events?q=${this.state.query}&_page=${page + 1}&_limit=12`)
    .then((results) => {
      console.log(results);
      this.setState({
        results: results.data,
        pages: Math.ceil(results.headers['x-total-count'] / 12),
        page: page
      });
    })
    .catch((err) => (console.log(err)));
  }

  componentWillMount () {
    //this.fetchHistory();
  }

  queryUpdate (q) {
    //console.log(q.target.value);
    this.setState({query: q.target.value});
  }

  requestOnEnter (e) {
    //console.log(e.key);
    if (e.key === 'Enter') {
      this.fetchHistory();
    }
  }

  changePage (page) {
    console.log('page selected', page.selected);
    this.fetchHistory(page.selected);
  }

  render () {
    return (
      <div className="historySearch" >
        <Input name="Search" value={this.state.query} onChange={this.queryUpdate} onKeyUp={this.requestOnEnter} />
        {this.state.pages > 1 ? <Pages onPageChange={this.changePage} initialPage={this.state.page} pages={this.state.pages} /> : null }
        <HistoricalEvents events={this.state.results}/>
        {this.state.pages > 1 ? <Pages onPageChange={this.changePage} initialPage={this.state.page} pages={this.state.pages} /> : null }
      </div>
    );
  }
}

export default App;

