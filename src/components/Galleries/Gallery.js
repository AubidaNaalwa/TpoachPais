import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Gallery(props) {
    const help = function() {
        let id;
        props.path === 's' ? id = 'space' : props.path === 't' ? id = 'tpais' : id = null;
        return id;
    }

    return (
        <div>
            <Link to={`/${help()}/gallery/${props.gallery._id}`}>
                <img src={`${props.gallery.imgUrl}`} alt='img' />
            </Link>
            <p>{props.gallery._id}</p>
        </div>
    );
}