import React, { useState, useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Vote.scss';
import {
    HubConnectionBuilder,
    HubConnectionState,
    LogLevel,
} from '@microsoft/signalr';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import config from '../../config';
import logo from '../../assets/images/morum_logo.png';

export default function Vote(props) {

    //preliminary websocket instantiations
    const location = useLocation();
    const history = useHistory();
    const didMountRef = useRef(false);
    const [hubConnection, setHubConnection] = useState({});

    //prepping votes to use with websocket
    const [vote, setVote] = useState(0);
    const [answer, setAnswer] = useState(0);

    //test submitter
    useEffect(() => {
        const updateVotes = async (optionId) => {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    optionId: optionId,
                }),
            };

            fetch(
                config.apiUrl + 'user/' + localStorage.getItem('userId'),
                requestOptions
            )
                .then(async (response) => {
                    if (!response.ok) {
                        const error = response.status;
                        return Promise.reject(error);
                    }

                    hubConnection
                        .invoke('SendVote', optionId)
                        .catch((err) => console.log(err));
                })
                .catch((error) => {
                    console.error('There was an error!', error);
                });
        };

        if (didMountRef.current) {
            hubConnection.on('voteSent', (optionId) => {
                updateVotes(optionId);
            });
        } else {
            didMountRef.current = true;
        }
    }, [hubConnection]);

    //connection builder
    useEffect(() => {
        const createHubConnection = async () => {
            const connection = new HubConnectionBuilder()
                .withUrl(config.hubUrl)
                .withAutomaticReconnect()
                .configureLogging(LogLevel.Information)
                .build();

            const startHubConnection = async () => {
                try {
                    await connection.start();
                    console.assert(connection.state === HubConnectionState.Connected);
                    console.log('Connection successful');

                    setHubConnection(connection);
                } catch (err) {
                    console.assert(connection.state === HubConnectionState.Disconnected);
                    console.log('Error while establishing connection: ' + err);
                    setTimeout(() => startHubConnection(), 5000);
                }
            };

            await startHubConnection();
        };

        if (didMountRef.current) {
            createHubConnection();
        }
    }, [vote]);

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
          { id: 4, content: 'Option 4', votes: 2 },
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
      <h1 className="vote__poll_title">{question.content}</h1>
      <div className="vote__diagram">
      <Doughnut ref={chartReference} data={chartData} options={chartOptions} />
      </div>
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
