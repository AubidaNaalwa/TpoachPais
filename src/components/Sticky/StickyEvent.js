import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState } from "react";
import Moment from 'react-moment';

export default function StickyEvent(props) {
    const [err, setErr] = useState(0);


    return (

        <div className='card'>
        <div class='set-image'><p>{props.event.name}</p></div>
        <span className='set-date'><Moment format="LLL">{props.event.createdAt}</Moment></span>
        <div class='set-text'>{props.event.longDescription}</div>


        <div class='ribbon-wrapper-1' dir='ltr'>
            <div className='ribbon-1'>احداث</div>
           

        </div>
    </div>







    )
}