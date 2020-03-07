import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';


class Poll extends Component {

    constructor() {
        super(props);
        this.state = {
            data = {
                labels: ['Red', 'Green', 'Yellow'],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                    }
                ]
            }
        }
    }
  render() {
      return (
          <div className="chart">
              <Doughnut data={this.state.chartData}
                  options={{
                  }}
              />
      </div>
    )
  }
}

export default Poll;

//morumUpdateChart(barNumber) {
//    myBarChart.data.datasets[0].data[barNumber] = myBarChart.data.datasets[0].data[barNumber] + 1;
//    myBarChart.update();
//}
