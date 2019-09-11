import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Picture from './Picture';
import moment from 'moment';
import './App.css';

function App() {
 const dateNow = moment().format('YYYY-MM-D');
 const [pic, setPic] = useState('');
 const [query, setQuery] = useState(dateNow);

 console.log('dateNow', dateNow);
 useEffect(() => {
  axios
   .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${query}`)
   .then(res => {
    console.log(res);
    setPic(res.data);
   })
   .catch(err => console.log('err: ', err));
 }, [query]);

 console.log('pic', pic);
 console.log('query', query);
 return (
  <div className="App">
   <input
    type="date"
    value={query}
    name="Date"
    onChange={e => setQuery(e.target.value)}
   />
   <Picture pic={pic} />
  </div>
 );
}

export default App;
