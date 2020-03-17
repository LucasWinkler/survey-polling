import React from 'react';
import { useLocation } from 'react-router-dom';

import './styles.scss';

export default function NotFound() {
  const location = useLocation();

  return (
    <div className='not_found'>
      <h1>
        The page <code>{location.pathname}</code> was not found.
      </h1>
    </div>
  );
}
