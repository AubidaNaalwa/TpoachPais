import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: './images/tpais1.jpg',
        thumbnail: './images/tpais_thumb1.jpg'
    },
    {
        original: './images/tpais2.jpg',
        thumbnail: './images/tpais_thumb2.jpg'
    },
    {
        original: './images/tpais3.jpg',
        thumbnail: './images/tpais_thumb3.jpg'
    }
];

export default function TPaisQuickGallery() {
    return (
        <ImageGallery isRTL={true} autoPlay={true} showBullets={true} items={images} />
    );
}