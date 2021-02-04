import React, {Component} from 'react';
import './App.css';
import {Header} from '../src/components/header/header.component.jsx'


class App extends Component {

  constructor() {
    super();

    this.state = {
      welcome: "Welcome to my developer portfolio!"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to my developer portfolio!
          </p>
          <img src= "https://avatars.githubusercontent.com/u/68625109?s=460&u=18d6fc86f9c6140410da8e59d7bb1b23a7125546&v=4" alt="logo" />
  
          <a
            className="App-link"
            href="https://github.com/ArgentPur"
            target="_blank"
            rel="noopener noreferrer"
          >
            ArgentPur @ Github
          </a>
        </header>
        <body>
          <div class= "container">
  
            <p> { this.state.welcome } </p>
            
  
          </div>
        </body>
      </div>
    );
  }
}
export default App;
