import React from 'react';
import ReactDOM from 'react-dom';
import Poll from './Poll';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Poll />, div);
});
