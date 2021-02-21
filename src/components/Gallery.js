import '../styles/gallery.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function Gallery(props) {

    return (
        <div>
            <Link to={`/space/gallery/${props.gallery._id}`}>
                <img  src={`${props.gallery.imgUrl}`} alt='img' />
            </Link>
            <p>{props.gallery._id}</p>
        </div>
    )

}

export default Gallery