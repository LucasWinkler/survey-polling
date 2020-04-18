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
      <h1 className="pollover__over">The poll is over</h1>
      <br></br>
      <p className="pollover__thanks">Thanks for participating in the poll!</p>
    </section>
    </div>
    </div>
  );
}
