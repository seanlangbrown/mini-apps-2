import React from 'React';
import TSContainer from './TSContainer.jsx';


class App extends React.Component {

  constructor () {
    super();
  }


  render () {
    return (
      <div>
        <p>'React App!'</p>
        <TSContainer />
      </div>
    );
  }

}

