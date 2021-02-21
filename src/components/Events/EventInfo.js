import React from 'react';
import { Redirect } from 'react-router-dom';
import Moment from 'react-moment';

export default function EventInfo(props) {
    const item = props.eInfo;

    if (!item)
        return (<Redirect to="/tpais/events" />);

    return (
        <div style={{textAlign: 'center'}}>
            <h3>{item.name}</h3>
            <p><Moment format="YYYY/MM/DD">{item.date}</Moment></p>
            <img src={item.img} alt='img' style={{ width:'80%', height:'75%' }}></img>
            <p>{item.longDescription}</p>
        </div>
    );
}