import React, {Component} from 'react';
import './App.css';
import {Project} from '../src/components/project/project.jsx'
import {Header} from '../src/components/header/header.component.jsx'
import { Footer } from './components/footer/footer';


class App extends Component {

  constructor() {
    super();

    this.state = {
      name: "Zachary Lynn",
      projects: [
        'project1', 
        'project2', 
        'project3', 
        'project4', 
        'project5', 
        'project6']
    }
  }
  render() {
    return (
      <div className="App">
          <Header/>
        <body>
          <div class= "container">
  
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
          </div>

          <Footer/>
        </body>
      </div>
    );
  }
}
export default App;
