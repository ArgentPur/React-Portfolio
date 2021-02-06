import React, {Component} from 'react';
import './App.css';
import {Project} from '../src/components/project/project.jsx'
import {Header} from '../src/components/header/header.component.jsx'
import { Footer } from './components/footer/footer';


class App extends Component {

  constructor() {
    super();

    this.state = {
      name: ["NoteBook", "Profile", "Company Organizer", "Budget Tracker", "BurgerApp", "WeatherApp"],
      url: [
        'https://git.heroku.com/notebook-argentpur.git', 
        'https://argentpur.github.io/Personal-Portfolio/', 
        'https://github.com/ArgentPur/Company-Organizer', 
        'https://git.heroku.com/budget-tracker84.git', 
        'https://git.heroku.com/desolate-falls-35342.git', 
        'https://argentpur.github.io/WeatherAPI/'],
      picture: [],
      description: []  
    }
  }
  render() {
    return (
      <div className="App">
          <Header/>
        <body>
          <div class= "container">

            {this.state.name.map(item => (
              <Project/>
            ))}
             
          </div>

          <Footer/>
        </body>
      </div>
    );
  }
}
export default App;
