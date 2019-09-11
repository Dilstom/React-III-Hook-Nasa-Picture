import React from 'react';

export default function Picture(props) {
 console.log('in picture component');
 if (!props.pic) return <h3>Loading...</h3>;
 return (
  <div>
   {' '}
   <h1>{props.pic.title}</h1>
   <p>{props.pic.explanation}</p>
   <img src={props.pic.url} alt="nasa picture of the day" />
  </div>
 );
}
