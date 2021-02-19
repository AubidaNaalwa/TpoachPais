import React from 'react';
import { Redirect } from 'react-router-dom';

export default function ExperimentInfo(props) {
    const item = props.eInfo;

    if (!item) {
        return (<Redirect to="/tpais/experiments"/>);
    }

    return (
        <div style={{textAlign: 'right', marginRight: '20%'}}>
            <h1>{item.name}</h1>
            <iframe title="experiment" width="560" height="315" src={item.img} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>{item.longDescription}</p>
        </div>
    )
}