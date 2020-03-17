import React, { useState, useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';

import './styles.scss';

const exampleChartData = () => ({
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [3, 5, 7],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
});

// When clicking an add button the component will break
export default function v2() {
  const [chartData, setChartData] = useState(exampleChartData);
  const chartReference = useRef(null);

  useEffect(
    barNumber => {
      const currentChart = chartReference.current.chartInstance;

      currentChart.data.datasets[0].data[barNumber] += 1;
      currentChart.update();
    },
    [chartData]
  );

  useEffect(() => {
    console.log(chartReference.current);
  }, [chartReference]);

  return (
    <div className='dynamic_chart'>
      <Doughnut ref={chartReference} data={chartData} />
      <button
        className='dynamic_chart__btn dynamic_chart__btn--red'
        onClick={() => setChartData(0)}
      >
        Add red
      </button>
      <button
        className='dynamic_chart__btn dynamic_chart__btn--blue'
        onClick={() => setChartData(1)}
      >
        Add blue
      </button>
      <button
        className='dynamic_chart__btn dynamic_chart__btn--yellow'
        onClick={() => setChartData(2)}
      >
        Add yellow
      </button>
    </div>
  );
}
