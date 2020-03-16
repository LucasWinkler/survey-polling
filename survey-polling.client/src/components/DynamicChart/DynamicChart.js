import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './DynamicChart.scss';

const getState = () => ({
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [3, 5, 7],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
});

export default class DynamicChart extends Component {
  constructor(props) {
    super(props);
    this.state = { chartData: this.getInitialState() };
  }

  getInitialState() {
    return getState();
  }

  chartReference = {};

  morumUpdateChart(barNumber) {
    const currentChart = this.reference.chartInstance;

    currentChart.data.datasets[0].data[barNumber] += 1;
    currentChart.update();
  }

  render() {
    return (
      <div className='dynamic_chart'>
        <Doughnut
          data={this.state.chartData}
          ref={reference => (this.reference = reference)}
        />
        <button
          className='dynamic_chart__btn dynamic_chart__btn--red'
          onClick={() => this.morumUpdateChart(0)}
        >
          Add red
        </button>
        <button
          className='dynamic_chart__btn dynamic_chart__btn--blue'
          onClick={() => this.morumUpdateChart(1)}
        >
          Add blue
        </button>
        <button
          className='dynamic_chart__btn dynamic_chart__btn--yellow'
          onClick={() => this.morumUpdateChart(2)}
        >
          Add yellow
        </button>
      </div>
    );
  }
}
