import React from 'react';
import Moment from 'react-moment';
import PageNotFound from '../PageNotFound';

export default function EventInfo(props) {
    const item = props.eInfo;

    return (
        item ?
        <div style={{ textAlign: 'right' }}>
            <h1>{item.name}</h1>
            <h3 style={{ color: 'gray', marginTop: -20 }}><Moment format="YYYY/MM/DD">{item.date}</Moment></h3>
            <div>{item.longDescription}</div>
        </div>
        : <PageNotFound />
    );
}