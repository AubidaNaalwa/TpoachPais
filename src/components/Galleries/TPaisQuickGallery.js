import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: './images/main_gallery/tpais1.jpg',
        thumbnail: './images/main_gallery/tpais_thumb1.jpg'
    },
    {
        original: './images/main_gallery/tpais2.jpg',
        thumbnail: './images/main_gallery/tpais_thumb2.jpg'
    },
    {
        original: './images/main_gallery/tpais3.jpg',
        thumbnail: './images/main_gallery/tpais_thumb3.jpg'
    }
];

export default function TPaisQuickGallery() {
    return (
        <ImageGallery isRTL={true} autoPlay={true} showBullets={true} items={images} showThumbnails={false} showNav={false} slideInterval={7000} />
    );
}