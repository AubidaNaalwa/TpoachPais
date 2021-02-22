import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Moment from 'react-moment';

export default function CourseInfo(props) {
    const item = props.cInfo;
    const [err, setErr] = useState(0)
    if (!item)
        return (<Redirect to="/tpais/courses" />);

    return (
        <div style={{textAlign: 'center'}}>
            <h3>{item.name}</h3>
            <img src={!err ? item.img : "https://elearningindustry.com/wp-content/uploads/2020/01/designing-effective-elearning-courses.jpg" } alt='img' style={{width:'80%', height:'75%'}} onError={()=>setErr(1)} ></img>
            <p>{item.longDescription}</p>
            <p>{<Moment date={item.date} format="DD/MM/YYYY"/>}</p>
            <p>{item.toDate}</p>
            <p>{item.teacher}</p>
            <p>{item.class}</p>
            <p>{item.available ? `للاشتراك والتسجيل :${item.courseLink}` : "الدورة غير متوفرة حاليا"}</p>
        </div>
    );
}