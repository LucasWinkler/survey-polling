import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

var getState = () => ({
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [
    {
      data: [3, 5, 7],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
});

class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = { chartData: this.getInitialState() };
  }

  getInitialState() {
    return getState();
  }

  chartReference = {};

  morumUpdateChart(barNumber) {
    let currentChart = this.reference.chartInstance;
    currentChart.data.datasets[0].data[barNumber] =
      currentChart.data.datasets[0].data[barNumber] + 1;
    currentChart.update();
  }

  render() {
    return (
      <div className='chart'>
        <Doughnut
          data={this.state.chartData}
          options={{}}
          ref={reference => (this.reference = reference)}
        />
        <button onClick={() => this.morumUpdateChart(0)}>
          Test Dynamic Chart
        </button>
      </div>
    );
  }
}

export default Poll;
