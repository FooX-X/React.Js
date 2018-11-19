import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Labas/>
      </div>
    );
  }
}

function Labas () {
    let rows = [];
    let kiekis = Number(prompt("Type a number", ""));
    let skaicius = 0
    for (let i = 0; i < kiekis; i++) {
      rows.push(<div>Labas {++skaicius}</div>)
    }
    return rows;
}
export default App;