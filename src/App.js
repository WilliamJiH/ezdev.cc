import React, { Component } from 'react';
import Auth from './Components/SignIn/Auth';
import Dashboard from './Components/CMS/Dashboard';
import Home from './Components/Home/Home.tsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    )
  }
}

export default App;
