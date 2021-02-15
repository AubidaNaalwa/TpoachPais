import '../styles/gallery.css';
import React, { Component, useState } from "react";
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css'
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];


function Images(props) {

    let id = props.match.params.id;

    return (
        <div>
            
            {<ImageGallery items={images} />}

        </div>
    )

}

export default Images