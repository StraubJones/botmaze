import React, { Component } from 'react';
import './App.css';

import ApiHelpers from './lib/api-helpers'

class App extends Component {
  constructor () {
    super()
    this.state = {
      inputValue: 'Cheese'
    }
  }

  componentDidMount () {
    this.updateCanvas();
  }

  updateCanvas () {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillRect(0,0, 100, 100);
  }

  commandEntered (value) {
    console.log(value)
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Botmaze</h1>
        </header>
        <p className="App-intro">
          Type in a command to move the sprite through the maze. <br />
          <input className="App-input" value="" type="text" placeholder="Enter a command"></input>
        </p>
        
        <canvas ref="canvas" width={800} height={500}/>
      </div>
    );
  }
}

export default App;
