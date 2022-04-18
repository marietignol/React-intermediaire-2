import './App.css';
import React, {useEffect, useState} from 'react';
import { Simpson } from './Simpson';
import axios from 'axios';

function App() {
  const [simpson, setSimpson] = useState([])

  const citation = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
    .then((response)=> setSimpson(response.data[0]))
  };
  
  useEffect(() => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
    .then(res => setSimpson(res.data[0]))
    }, [])
  return (
    <div className="App">
       <Simpson simpson={simpson} />
       <button onClick={() => citation()}
       >Random Quote</button>
       </div>
  );
}

export default App;
