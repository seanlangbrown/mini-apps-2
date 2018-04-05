import React from 'React';
import {Line} from 'react-chartjs-2';
import _ from 'lodash';


class TSGraph extends React.Component {

  constructor (props) {
    super(props);
    console.log('props data', this.props.data);

  }


  render () {
    let data = {
        labels: _.map(this.props.data.data, (point) => (point.x)),
        datasets: [this.props.data]
        }
    let options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    };
    
    return (
      <div>
        <h2>'TS Graph'</h2>
        <Line data={data} options={options} width={600} height={250} />
      </div>
    );
  }

}

export default TSGraph;
