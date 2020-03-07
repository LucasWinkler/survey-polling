import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [
    {
      data: [
        getRandomInt(50, 200),
        getRandomInt(100, 150),
        getRandomInt(150, 250)
      ],
      backgroundColor: ['#CCC', '#36A2EB', '#FFCE56'],
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

  componentWillMount() {
    setInterval(() => {
      this.setState({ chartData: getState() });
    }, 5000);
  }

  render() {
    return (
      <div className='chart'>
        <Doughnut data={this.state.chartData} options={{}} />
      </div>
    );
  }
}

export default Poll;

//morumUpdateChart(barNumber) {
//    myBarChart.data.datasets[0].data[barNumber] = myBarChart.data.datasets[0].data[barNumber] + 1;
//    myBarChart.update();
//}
