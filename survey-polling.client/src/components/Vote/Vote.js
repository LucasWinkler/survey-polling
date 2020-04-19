import React, { useState, useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Vote.scss';
import MorumNavBar from '../NavBar/NavBar';
import logo from '../../assets/images/morum_logo.png';

export default function Vote(props) {
  const chartReference = useRef({});
  const [question, setQuestion] = useState({
    id: 0,
    pollId: 0,
    content: '',
    options: [{ id: 0, content: '', votes: 0 }]
  });

  useEffect(() => {
    setQuestion(
      props.question ?? {
        id: 1,
        pollId: 1,
        content: 'Question title',
        options: [
          { id: 1, content: 'Option 1', votes: 4 },
          { id: 2, content: 'Option 2', votes: 7 },
          { id: 3, content: 'Option 3', votes: 2 },
          { id: 4, content: 'Option 4', votes: 2 }
        ]
      }
    );
  }, []);

  const chooseOption = barNumber => {
    const currentChart = chartReference.current.chartInstance;

    currentChart.data.datasets[0].data[barNumber] += 1;
    currentChart.update();
  };

  const chartOptions = {
    legend: {
      display: false
    }
    };

    const getPin = {

    }

  const chartData = () => {
    const labelArray = [];
    const dataArray = [];

    for (let i = 0; i < question.options.length; i++) {
      labelArray[i] = question.options[i].content;
      dataArray[i] = question.options[i].votes;
    }

    return {
      labels: labelArray,
      datasets: [
        {
          data: dataArray,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#55BE41'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#55BE41']
        }
      ]
    };
  };

  return (
    <div className='container vote'>
      <h1>{question.content}</h1>
      <Doughnut ref={chartReference} data={chartData} options={chartOptions} />
      <div className='vote__btn_wrapper'>
        {question.options.map((option, index) => (
          <button
            className='vote__btn vote__btn--colour-dynamic'
            onClick={() => chooseOption(index)}
            key={index}
          >
            {option.content}
          </button>
        ))}
          </div>
          <div className="lobbyPin">
              <img src={logo} name="voteLogo" />
              Your Lobby PIN:
          </div>

    </div>
  );
}
