import React from 'react';
import { Redirect } from 'react-router-dom';
import Moment from 'react-moment';

export default function ExperimentInfo(props) {
    const item = props.eInfo;

    if (!item)
        return (<Redirect to="/tpais/experiments" />);

    return (
        <div style={{textAlign: 'center'}}>
            <h3>{item.name}</h3>
            <p><Moment format="YYYY/MM/DD">{item.date}</Moment></p>
            <iframe title="experiment" width="560" height="315" src={item.img} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>{item.longDescription}</p>
        </div>
    );
}