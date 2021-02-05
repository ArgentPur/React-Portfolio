import React from 'react';

export const Project = (props) => (
    <div className= 'project'>
        <h2>Project Name</h2>
        <h4>Project Link</h4>
        <img alt="project screen shot"/>
        <button href={props.url} target= "_blank">ProjectX</button>
        
    </div>
)