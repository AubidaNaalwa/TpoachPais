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
            <img id='image' src={item.img}></img>
            <p>{item.longDescription}</p>
           
        </div>
    )
}