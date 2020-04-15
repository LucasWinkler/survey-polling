import React, { useState, useEffect, Component } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/images/morum_logo.png';
import config from '../../config';
import 'semantic-ui-css/semantic.min.css';

import './Manager.scss';
import MorumNavBar from '../../components/NavBar/NavBar';



export default function Manager(props) {
    const history = useHistory();
    const [polls, setPolls] = useState([{}]);

    useEffect(() => {
        document.title = props.title;
    }, [props.title]);

    useEffect(() => {
        (async () => {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };

            await fetch(
                config.apiUrl +
                'poll/GetPollsByHostId/' +
                localStorage.getItem('userId'),
                requestOptions
            )
                .then(async (response) => {
                    const data = await response.json(null);

                    if (!response.ok) {
                        const error = (data && data.message) || response.status;
                        return Promise.reject(error);
                    }

                    let pollArray = [];
                    data.forEach((poll, i) => {
                        pollArray[i] = {
                            id: poll.id,
                            title: poll.title,
                            questionCount: poll.questions.length,
                        };
                    });

                    setPolls(pollArray);
                })
                .catch((error) => {
                    console.error('There was an error!', error);
                });
        })();
    }, []);

    const startPoll = () => { };

    const editPoll = () => { };

    const deletePoll = () => { };

    const PollsTable = () => {
        if (!polls) {
            return null;
        }

        if (polls.length > 0) {
            return (
                <>
                    {polls.map((poll, i) => (
                        <tr key={++i}>
                            <td>{i}</td>
                            <td>{poll.title}</td>
                            <td>{poll.questionCount}</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>
                                <input
                                    type='button'
                                    value='Start'
                                    className='btn btn--colour-blue'
                                    onClick={startPoll}
                                />
                                <input
                                    type='button'
                                    value='Edit'
                                    className='btn btn--colour-orange'
                                    onClick={editPoll}
                                />
                                <input
                                    type='button'
                                    value='Delete'
                                    className='btn btn--colour-red'
                                    onClick={deletePoll}
                                />
                            </td>
                        </tr>
                    ))}
                </>
            );
        }
    };

    return (
        <div className='container manager'>
            <MorumNavBar />
            <nav className='nav'>
                <div className='nav__items'>
                    <img className='img__logo' src={logo}></img>
                    <div className='nav__items_left'>
                        <h2 className='title'>Morum OSS | Poll Manager</h2>
                    </div>
                </div>
            </nav>
            <br></br>
            <table className='manager__polls_table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Responses</th>
                        <th>Date Created</th>
                        <th>Date Modified</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{PollsTable()}</tbody>
            </table>
        </div>
    );
}
