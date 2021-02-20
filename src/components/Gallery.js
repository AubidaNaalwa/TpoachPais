import '../styles/gallery.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function Gallery(props) {

    const helper = () => {
        let id;
        props.gallery._id == "رواد فضاء" 
        ? id=`astronauts/evenings/${props.gallery._id}` 
        : props.gallery._id == 'أمسيات فلكية' 
        ? id=`astronomical/evenings/${props.gallery._id}` 
        : id= props.gallery._id    
        return id;
    }

    return (
        <div>
            <Link to={`/space/gallery/${helper()}`}>
                <img  src={`${props.gallery.imgUrl}`} alt='img' />
            </Link>
            <p>{props.gallery._id}</p>
        </div>
    )

}

export default Gallery