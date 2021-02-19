import React, { useEffect, useState } from 'react';
import { Redirect  } from 'react-router-dom'
import '../styles/experimentInfo.css'

export default function ExperimentInfo(props) {
    const item = props.eInfo
    
    if (!item) {
        return (<Redirect to="/tpais/experiments"/>)
    }

    return (
        <div className="experimentsInfo">
            <h1>{item.name}</h1>
            <iframe width="560" height="315" src={item.img} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>{item.longDescription}</p>
           
        </div>
    )
}