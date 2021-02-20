import '../styles/gallery.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

let id = ''
function Gallery(props) {
    return (
        <div>
            {()=>{props.gallery._id == "رواد فضاء" ? id='astronauts/evenings' 
            : props.gallery._id == 'أمسيات فلكية' ? id='astronomical/evenings' : id= props.gallery._id }}     
            <Link to={`/space/gallery/${id}`}>
                <img  src={`${props.gallery.imgUrl}`} alt='img' />
            </Link>
            <p>{props.gallery._id}</p>
        </div>
    )

}

export default Gallery