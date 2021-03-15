import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState } from "react";
import Moment from 'react-moment';

export default function StickyCourse(props) {
    const [err, setErr] = useState(0);

    return (
        <div className='card'>
        <div class='set-image'><p>{props.course.name}</p></div>
        <span className='set-date'><Moment format="LLL">{props.course.createdAt}</Moment></span>
        <div class='set-text'>{props.course.longDescription}</div>
        

        <div class='ribbon-wrapper-1' dir='ltr'>

            <div className='ribbon-1'>دورات</div>
        </div>

    </div>

    )
}