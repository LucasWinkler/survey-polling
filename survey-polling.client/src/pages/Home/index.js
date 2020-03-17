import React from 'react';

import './styles.scss';

export default function Home() {
  return (
    <div className='home'>
      <h1>Home Page</h1>
      <h2>Select a Role</h2>
      <button>Teacher</button>
      <button>Student</button>
    </div>
  );
}
