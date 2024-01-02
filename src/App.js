import {useState } from 'react';
import React from 'react';
import './App.css';

function App() { 
  const [data,setData]=useState('jimi')
  function updateData(){
    setData('Mehsud')
  }
  return (
    <div className="App">
     <h1>State in {data} </h1>
     <button onClick={updateData}>Update the Date</button>
     
    </div>
  );
}



export default App;


