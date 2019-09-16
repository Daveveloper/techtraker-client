import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class StatisticsBar extends Component {

  data = {
    type: 'pie',
    datasets: [{
      label: 'Most used',
      data: [30, 25, 29, 19],
      backgroundColor: [
        'rgba(0, 128, 128, 0.9)',
        'rgba(0, 80, 80, 0.9)',
        'rgba(0, 100, 100, 0.9)',
        'rgba(0, 210, 210, 0.9)'
      ],
      borderWidth: 3
    }],
    labels: [
      'Java', 'Javascript', 'Python', 'C#'
    ]
  }

  render() {

    return (
      <Bar data={this.data}/>
    )
  }
}

export default StatisticsBar;
