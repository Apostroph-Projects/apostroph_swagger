import React, { Component } from 'react';
import './App.css';
import SwaggerUI from './components/swagger'

class App extends Component {
  render() {
    return (
      <div style={{textAlign: 'left'}} className="App">
        <SwaggerUI />
      </div>
    );
  }
}

export default App;