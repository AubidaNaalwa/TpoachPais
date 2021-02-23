import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: './images/space1.jpg',
        thumbnail: './images/space_thumb1.jpg'
    },
    {
        original: './images/space2.jpg',
        thumbnail: './images/space_thumb2.jpg'
    },
    {
        original: './images/space3.jpg',
        thumbnail: './images/space_thumb3.jpg'
    },
    {
        original: './images/space4.jpg',
        thumbnail: './images/space_thumb4.jpg'
    },
    {
        original: './images/space5.jpg',
        thumbnail: './images/space_thumb5.jpg'
    },
    {
        original: './images/space6.jpg',
        thumbnail: './images/space_thumb6.jpg'
    },
    {
        original: './images/space7.jpg',
        thumbnail: './images/space_thumb7.jpg'
    },
    {
        original: './images/space8.jpg',
        thumbnail: './images/space_thumb8.jpg'
    },
    {
        original: './images/space9.jpg',
        thumbnail: './images/space_thumb9.jpg'
    }
];

export default function SpaceQuickGallery() {
    return (
        <ImageGallery isRTL={true} autoPlay={true} showBullets={true} items={images} />
    );
}