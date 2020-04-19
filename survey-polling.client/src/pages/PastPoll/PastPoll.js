import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import config from '../../config';

import './PastPoll.scss';

export default function PastPoll(props){

    const [pastPolls, setPastPolls] = useState([{}]);

    return(
        <div className="pastpoll">
        Past Polls page
        </div>
    );
}