import React, { useState, useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';

import './Vote.scss';

const exampleData = () => ({
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [3, 5, 7],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
});

const fakePoll = () => ({
  title: 'Poll about fake stuff',
  question: 'What is the meaning of this and that'
});

/* 
      1. poll active question 
      2. chart 
      3. voting buttons 
      4. active users (bottom right or something) */

export default function Vote(props) {
  const [questionTitle, setQuestionTitle] = useState('');
  const [poll, setPoll] = useState(fakePoll);
  const chartReference = useRef({});

  const updateChart = barNumber => {
    const currentChart = chartReference.current.chartInstance;

    currentChart.data.datasets[0].data[barNumber] += 1;
    currentChart.update();
  };

  const fetchData = () => exampleData();

  return (
    <div className='container voting'>
      <h1>{poll.question}</h1>
      <Doughnut ref={chartReference} data={fetchData} />
      <div className='voting__btn_wrapper'>
        <button
          className='voting__btn voting__btn--red'
          onClick={() => updateChart(0)}
        >
          Add red
        </button>
        <button
          className='voting__btn voting__btn--blue'
          onClick={() => updateChart(1)}
        >
          Add blue
        </button>
        <button
          className='voting__btn voting__btn--yellow'
          onClick={() => updateChart(2)}
        >
          Add yellow
        </button>
      </div>
    </div>
  );
}
