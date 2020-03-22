import React, { useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';

import './Vote.scss';

const exampleData = () => ({
  datasets: [
    {
      data: [3, 5, 7],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
});

export default function Vote(props) {
  const chartReference = useRef({});

  const { id } = props.match.params;

  console.log(id);

  const updateChart = barNumber => {
    const currentChart = chartReference.current.chartInstance;

    currentChart.data.datasets[0].data[barNumber] += 1;
    currentChart.update();
  };

  const fetchData = () => exampleData();

  return (
    <div className='container Vote'>
      <h1>Question title</h1>
      <Doughnut ref={chartReference} data={fetchData} />
      <div className='poll__btn_wrapper'>
        <button
          className='poll__btn poll__btn--red'
          onClick={() => updateChart(0)}
        >
          Add red
        </button>
        <button
          className='poll__btn poll__btn--blue'
          onClick={() => updateChart(1)}
        >
          Add blue
        </button>
        <button
          className='poll__btn poll__btn--yellow'
          onClick={() => updateChart(2)}
        >
          Add yellow
        </button>
      </div>
    </div>
  );
}
