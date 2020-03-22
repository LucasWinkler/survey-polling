import React from 'react';
import { Link } from 'react-router-dom';

import './Dashboard.scss';

export default function Dashboard() {
  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        blanditiis, eius ab corrupti cumque fugit?
      </p>
      {/* This button is for testing the manage poll page */}
      <Link className='btn btn--colour-blue' to='/dashboard/poll/1'>
        Create Poll
      </Link>
    </div>
  );
}
