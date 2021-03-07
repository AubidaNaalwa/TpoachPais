import React from 'react';
import Moment from 'react-moment';
import PageNotFound from '../PageNotFound';

export default function ExperimentInfo(props) {
    const item = props.eInfo;

    return (
        item ?
        <div style={{textAlign: 'right'}}>
            <h1>{item.name}</h1>
            <h3 style={{ color: 'gray', marginTop: -20 }}><Moment format="YYYY/MM/DD">{item.date}</Moment></h3>
            <iframe title="experiment" width="560" height="315" src={item.img} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div>{item.longDescription}</div>
        </div>
        : <PageNotFound />
    );
}