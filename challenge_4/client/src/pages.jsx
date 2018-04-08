import React from 'react';
import ReactPaginate from 'react-paginate';
import Styles from './pages.css';

class Pages extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div id="pageSelect">
        <ReactPaginate 
          onPageChange={this.props.onPageChange} 
          initialPage={this.props.page} 
          pageCount={this.props.pages} 
          marginPagesDisplayed={3} 
          pageRangeDisplayed={2} 
          containerClassName={'pagination'}
          subContainerClassName={'pagination pages'}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default Pages
