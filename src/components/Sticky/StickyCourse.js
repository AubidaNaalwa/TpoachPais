import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState } from "react";
import Moment from 'react-moment';

export default function StickyCourse(props) {
    const [err, setErr] = useState(0);

    return (
        <div className='card'>
        <div class='set-image'> <img  src={!err ? props.course.img : "https://elearningindustry.com/wp-content/uploads/2020/01/designing-effective-elearning-courses.jpg"} alt='img' onError={() => setErr(1)} ></img></div>
        <div className='set-headline'>{props.course.name}</div>
        <div className='set-date'><Moment format="LLL">{props.course.createdAt}</Moment></div>
        <div class='set-text'>{props.course.longDescription}</div>
        <div class='set-text'></div>
        <div class='set-text'></div>
        <div class='set-text'></div>
        <div class='set-text'></div>
        <div class='set-text'></div>
        

        <div class='ribbon-wrapper-1'>
            <div className='ribbon-1'>دورات</div>
           
            
        </div>

    </div>

    )
}