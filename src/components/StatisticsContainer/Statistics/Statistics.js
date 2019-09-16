import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class Statistics extends Component {

  data = {
    type: 'pie',
    datasets: [{
      data: [4, 7, 8],
      backgroundColor: [
        'rgba(0, 128, 128, 0.9)',
        'rgba(0, 80, 80, 0.9)',
        'rgba(10, 10, 10, 0.9)'
      ],
      borderWidth: 3
    }],
    labels: [
      'Frameworks', 'Programming Lang.', 'Others'
    ]
  }

  render() {

    return (
      <Doughnut data={this.data}/>
    )
  }
}

export default Statistics;
