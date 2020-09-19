import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as firebase from 'firebase';
import SignIn from './Components/Auth/SignIn';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <SignIn />
      </div>
    )
  }
}

export default App;
