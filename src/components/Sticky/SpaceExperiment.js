import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState } from "react";

export default function SpaceExperiment(props) {
    const [err, setErr] = useState(0);
    return (

        <div className="feedItem">
            <span className="spaceHeader">{props.experiment.name}</span>
            <img alt="img" className="feedIcon" src={!err ? props.experiment.img : props.experiment.defaultImg} onError={() => setErr(1)} />
            <div className="content2">
                <div className='subTitle'>{props.experiment.shortDescription}</div>{props.experiment.longDescription}
            </div>
        </div>
    )
}