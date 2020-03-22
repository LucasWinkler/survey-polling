import React, { useEffect } from 'react';

import './PollOver.scss';

export default function PollOver(props) {
  useEffect(() => {
    document.title = props.title;
  }, []);

  return (
    <div>
      <h1>The poll is over</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        blanditiis, eius ab corrupti cumque fugit?
      </p>
    </div>
  );
}
