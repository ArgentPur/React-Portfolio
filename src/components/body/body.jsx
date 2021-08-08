import React from 'react';
import allProjects from '../../projects';
import './body.styles.css'

export const Body = (props) => (
    <div className ="body">
        <a href= {allProjects[0].url}>{allProjects[0].name}</a><br/>        
        <a href= {allProjects[1].url}>{allProjects[1].name}</a><br/>       
        <a href= {allProjects[2].url}>{allProjects[2].name}</a><br/>      
        <a href= {allProjects[3].url}>{allProjects[3].name}</a><br/>       
        <a href= {allProjects[4].url}>{allProjects[4].name}</a><br/>
        <a href= {allProjects[5].url}>{allProjects[5].name}</a><br/>
    </div>
)