import React from 'react';
import PageNotFound from '../PageNotFound';

export default function ExperimentInfo(props) {
    const item = props.eInfo;

    return (
        item ?
        <div style={{textAlign: 'right'}}>
            <h3>{item.name}</h3>
            <iframe title="experiment" width="560" height="315" src={item.img} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p>{item.longDescription}</p>
        </div>
        : <PageNotFound />
    );
}