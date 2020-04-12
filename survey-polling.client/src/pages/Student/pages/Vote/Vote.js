import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr';
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

const fakevote = () => ({
  title: 'vote about fake stuff',
  question: 'MorumOSS Voting Prototype'
});

/* 
      1. vote active question 
      2. chart 
      3. voting buttons 
      4. active users (bottom right or something) */

export default function Vote(props) {
    const [hubConnection, setHubConnection] = useState(null);
    const [vote, setvote] = useState(fakevote);

  useEffect(() => {
    const createHubConnection = async () => {
      const hub = new HubConnectionBuilder()
        .withUrl('http://localhost:5000/vote')
        .configureLogging(LogLevel.Information)
        .build();

      try {
        await hub.start();
        console.log('Connection successful!');

        hub.on('voteStarted', vote => {
          console.log(vote);
          setvote(vote);
        });
      } catch (err) {
        console.log('Error while establishing connection: ' + { err });
      }

      setHubConnection(hub);
    };

    createHubConnection();
  }, []);

  const [questionTitle, setQuestionTitle] = useState('');
    const chartReference = useRef({});

  const updateChart = barNumber => {
    const currentChart = chartReference.current.chartInstance;

    currentChart.data.datasets[0].data[barNumber] += 1;
    currentChart.update();
    };

    const fetchData = () => exampleData();

    const updatePoll = () => {
        hubConnection
            .invoke('SendPoll', 'Fake poll started')
            .catch(err => console.error(err));
    };

    //// POST request using fetch with error handling
    //const requestOptions = {
    //    method: 'POST',
    //    headers: { 'Content-Type': 'application/json' },
    //    //Make pollId equivalent to the dataset
    //    body: JSON.stringify({ /*pollId: '0', questionId: updateNumber*/ })
    //};
    //fetch('localhost:5000/api/vote', requestOptions)
    //    .then(async response => {
    //        const data = await response.json();

    //        // check for error response
    //        if (!response.ok) {
    //            // get error message from body or default to response status
    //            const error = (data && data.message) || response.status;
    //            return Promise.reject(error);
    //        }

    //        this.setState({ postId: data.id })
    //    })
    //    .catch(error => {
    //        this.setState({ errorMessage: error });
    //        console.error('There was an error!', error);
    //    });

  return (
    <div className='container voting'>
      <h1>{vote.question}</h1>
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
      //Pass value from button to the JSON? 
  );
}
