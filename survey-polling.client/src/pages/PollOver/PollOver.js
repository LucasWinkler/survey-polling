import React, { useEffect } from 'react';

import './PollOver.scss';

export default function PollOver(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <div className='pollover'>
    <div className="container pollover">
    <section className="pollover__title">
      <h1>The poll is over</h1>
      <p>Thanks for participating in the poll!</p>
    </section>
    </div>
    </div>
  );
}
