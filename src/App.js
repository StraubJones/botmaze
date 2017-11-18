import React, { Component } from 'react';
import './App.css';

import ApiHelpers from './lib/api-helpers'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    this.updateCanvas();
  }

  updateCanvas () {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillRect(0,0, 100, 100);
  }

  handleSubmit (event) {
    console.log(this.state.value)
    event.preventDefault();
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Botmaze</h1>
        </header>
        <p className="App-intro">
          Type in a command to move the sprite through the maze. <br />
        </p>

        <form onSubmit={this.handleSubmit}>
          <label>
            <input className="App-input" type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        
        <canvas ref="canvas" width={800} height={500}/>
      </div>
    );
  }
}

export default App;
