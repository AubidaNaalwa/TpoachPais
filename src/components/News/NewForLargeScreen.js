import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState } from "react";

export default function NewForLargeScreen(props) {
    const [err, setErr] = useState(0);

    const checkCategory = () => {
        let category = ''
        props.new.available != null ? category = 'courses' : props.new.category ? category = 'experiments' : category= 'events'
        return category;
    }


    return (
        <div className="feedItem">
            <div className="largeScreenHeader">{props.new.name}</div>
            <div className='laptop-subTitle'>{props.new.shortDescription}</div>
            <Link to={`/tpais/${checkCategory()}/${props.new._id}`}>
                <div className='readMore'>اقرا المزيد..</div>
            </Link>
            <hr className="hr hr_margins" />
        </div>

    )
}