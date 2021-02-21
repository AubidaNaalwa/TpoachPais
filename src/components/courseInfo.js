import React from 'react';
import { Redirect  } from 'react-router-dom';
import Moment from 'react-moment';

export default function CourseInfo(props) {
    const item = props.cInfo;

    if (!item) {
        return (<Redirect to="/tpais/courses"/>)
    }

    return (
        <div style={{textAlign: 'right', marginRight: '20%'}}>
            <h1 style={{textAlign: 'right'}}>{item.name}</h1>
            <img src={item.img} alt='img' style={{width:'80%', height:'75%'}}></img>
            <p>{item.longDescription}</p>
            <p>{item.availabaility}</p>
            <p>{<Moment date={item.date} format="DD/MM/YYYY"/>}</p>
            <p>{item.toDate}</p>
            <p>{item.courseLink}</p>
        </div>
    )
}