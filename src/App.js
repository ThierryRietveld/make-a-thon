import React, { Component } from 'react';
import './styles/index.css';

// pages
import Home from './containers/home';
import Info from './containers/info';
import Contact from './containers/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Info />
        <Contact />
      </div>
    );
  }
}

export default App;
