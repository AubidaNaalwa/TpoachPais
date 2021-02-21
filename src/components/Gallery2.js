import '../styles/gallery.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

let id = ''
function Gallery2(props) {

    const helper = () => {
        let id;
        props.gallery.category == "رواد فضاء" 
        ? id =`astronauts/evenings/${props.gallery.category}` 
        : props.gallery.category == "أمسيات فلكية" ? id =`astronomical/evenings/${props.gallery.category}` 
        : id= props.gallery.category 
        return id; 

    }
    return (
        <div>     
            <Link to={`/space/gallery/${helper()}/${props.gallery.name}`}>
                <img  src={`${props.gallery.img}`} alt='img' />
            </Link>
            <p>{props.gallery.name}</p>
        </div>
    )

}

export default Gallery2