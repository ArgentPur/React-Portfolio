import React from 'react';
import './header.styles.css'

export const Header = (props) => (
    <div className= 'header'>
        <header className="header">
        <h1>
          Welcome to my developer portfolio.
        </h1>
        <img src= "https://avatars.githubusercontent.com/u/68625109?s=460&u=18d6fc86f9c6140410da8e59d7bb1b23a7125546&v=4" alt="logo" />
        <h2>Zachary Lynn</h2>
        <a
          //className="App-link"
          href="https://github.com/ArgentPur"
          target="_blank"
          rel="noopener noreferrer"
          class= "link"
        >
          ArgentPur @ Github
        </a>

        <p class='link'>||</p>

        <a
          //className="App-link"
          href="https://www.linkedin.com/in/zachary-lynn-4032bb62"
          target="_blank"
          rel="noopener noreferrer"
          class= "link"
        >
           @ LinkedIn
        </a>
      </header>
    </div>
)
