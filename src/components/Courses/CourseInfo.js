import React from 'react';
import { Redirect } from 'react-router-dom';
import Moment from 'react-moment';

export default function CourseInfo(props) {
    const item = props.cInfo;

    if (!item)
        return (<Redirect to="/tpais/courses" />);

    return (
        <div style={{textAlign: 'center'}}>
            <h3>{item.name}</h3>
            <img src={item.img} alt='img' style={{width:'80%', height:'75%'}}></img>
            <p>{item.longDescription}</p>
            <p>{<Moment date={item.date} format="DD/MM/YYYY"/>}</p>
            <p>{item.toDate}</p>
            <p>{item.teacher}</p>
            <p>{item.class}</p>
            <p>{item.available ? `للاشتراك والتسجيل :${item.courseLink}` : "الدورة غير متوفرة حاليا"}</p>
        </div>
    );
}