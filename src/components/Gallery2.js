import '../styles/gallery.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

let id = ''
function Gallery2(props) {

    const helper = () => {
        let id;
        props.gallery.category == "رواد فضاء" 
        ? id =`${props.gallery.category}` 
        : props.gallery.category == "أمسيات فلكية" ? id =`${props.gallery.category}` 
        : id= props.gallery.category 
        return id; 

    }
    return (
        <div>     
            <Link to={`/space/gallery/astronauts/evenings/${props.gallery.name}/${helper()}`}>
                <img  src={`${props.gallery.img}`} alt='img' />
            </Link>
            <p>{props.gallery.name}</p>
        </div>
    )

}

export default Gallery2