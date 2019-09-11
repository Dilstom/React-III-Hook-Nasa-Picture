import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Picture from './Picture';
import './App.css';

function App() {
 const [pic, setPic] = useState('');

 useEffect(() => {
  axios
   .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
   .then(res => {
    console.log(res);
    setPic(res.data);
   })
   .catch(err => console.log('err: ', err));
 }, []);

 console.log('pic', pic);
 return (
  <div className="App">
   <Picture pic={pic} />
  </div>
 );
}

export default App;
