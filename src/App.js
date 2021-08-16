import React, {Component} from 'react';
import './App.css';
import {Project} from '../src/components/project/project.jsx'
import {Header} from '../src/components/header/header.component.jsx'
import { Footer } from './components/footer/footer';
import {Body} from '../src/components/body/body.jsx';
import {allProjects} from './projects';

class App extends Component {


  render() {
    return (
      <div className="App">
          <Header/>
        <body>

          <Body/>
        
          <Footer/>
        </body>
      </div>
    );
  }
}
export default App;
