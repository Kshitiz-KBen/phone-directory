import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  render () {
    return (
      <div>
        <Header/>
        <button>add</button>
        <div>
          <span>Name</span><br/>
          <span>Phone</span><br/>
        </div>
      </div>
    );
  }
}

export default App;