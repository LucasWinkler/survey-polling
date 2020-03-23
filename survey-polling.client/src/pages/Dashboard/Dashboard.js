import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Dashboard.scss';

export default function Dashboard(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        blanditiis, eius ab corrupti cumque fugit?
      </p>
      {/* Temp id for testing */}
      <Link className='btn btn--colour-blue' to='/dashboard/poll/1'>
        Create Poll
      </Link>
    </div>
  );
}
