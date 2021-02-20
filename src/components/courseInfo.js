import React from 'react';
import { Redirect  } from 'react-router-dom';

export default function CourseInfo(props) {
    const item = props.cInfo;

    if (!item) {
        return (<Redirect to="/tpais/courses"/>)
    }

    return (
        <div style={{textAlign: 'right', marginRight: '20%'}}>
            <h1>{item.name}</h1>
            <img src={item.img} alt='img' style={{width:'80%', height:'75%'}}></img>
            <p>{item.longDescription}</p>
            <p>{item.availabaility}</p>
            <p>{item.date}</p>
            <p>{item.toDate}</p>
            <p>{item.courseLink}</p>
        </div>
    )
}