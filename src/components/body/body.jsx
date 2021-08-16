import React from 'react';
import allProjects from '../../projects';
import './body.styles.css'

export const Body = (props) => (
    <div className ="body">
        <div class= "project">
        <a href= {allProjects[0].url} target="_blank">{allProjects[0].name}</a><br/>
        <p>{allProjects[0].description}</p>
        </div>        
        <div class= "project">
        <a href= {allProjects[1].url} target="_blank">{allProjects[1].name}</a><br/>
        <p>{allProjects[1].description}</p>
        </div>       
        <div class= "project">
        <a href= {allProjects[2].url} target="_blank">{allProjects[2].name}</a><br/>
        <p>{allProjects[2].description}</p>
        </div>
        <div class= "project">      
        <a href= {allProjects[3].url} target="_blank">{allProjects[3].name}</a><br/>
        <p>{allProjects[3].description}</p>
        </div> 
        <div class= "project">   
        <a href= {allProjects[4].url} target="_blank">{allProjects[4].name}</a><br/>
        <p>{allProjects[4].description}</p>
        </div>   
        <div class= "project">
        <a href= {allProjects[5].url} target="_blank">{allProjects[5].name}</a><br/>
        <p>{allProjects[5].description}</p>
        </div>
    </div>
)