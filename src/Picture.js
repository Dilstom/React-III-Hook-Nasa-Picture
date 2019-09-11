import React from 'react';

export default function Picture(props) {
 console.log('in picture component');
 if (!props.pic) return <h3>Loading...</h3>;
 return (
  <div>
   {' '}
   {props.pic.media_type === 'video' ? (
    <div>
     <h1>{props.pic.title}</h1>
     <p>{props.pic.explanation}</p>
     <iframe width="420" height="315" src={props.pic.url}></iframe>
    </div>
   ) : (
    <div>
     <h1>{props.pic.title}</h1>
     <p>{props.pic.explanation}</p>
     <img src={props.pic.url} alt="nasa picture of the day" />
    </div>
   )}
  </div>
 );
}
