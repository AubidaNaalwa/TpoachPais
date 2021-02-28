import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState } from "react";

export default function SpaceEvent(props) {
    const [err, setErr] = useState(0);

    return (
        <div className="feedItem">
            <span className="spaceHeader">{props.event.name}</span>
            <img className="feedIcon" src={!err ? props.event.img : "https://elearningindustry.com/wp-content/uploads/2020/01/designing-effective-elearning-courses.jpg"} alt='img' onError={() => setErr(1)} ></img>
            <div className="content2">
                <div className='subTitle'>{props.event.shortDescription}</div>{props.event.longDescription}
            </div>
        </div>
    )
}