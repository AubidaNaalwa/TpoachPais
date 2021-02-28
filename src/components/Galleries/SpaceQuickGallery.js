import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: './images/main_gallery/space1.jpg',
        thumbnail: './images/main_gallery/space_thumb1.jpg'
    },
    {
        original: './images/main_gallery/space2.jpg',
        thumbnail: './images/main_gallery/space_thumb2.jpg'
    },
    {
        original: './images/main_gallery/space3.jpg',
        thumbnail: './images/main_gallery/space_thumb3.jpg'
    },
    {
        original: './images/main_gallery/space4.jpg',
        thumbnail: './images/main_gallery/space_thumb4.jpg'
    },
    {
        original: './images/main_gallery/space5.jpg',
        thumbnail: './images/main_gallery/space_thumb5.jpg'
    },
    {
        original: './images/main_gallery/space6.jpg',
        thumbnail: './images/main_gallery/space_thumb6.jpg'
    },
    {
        original: './images/main_gallery/space7.jpg',
        thumbnail: './images/main_gallery/space_thumb7.jpg'
    },
    {
        original: './images/main_gallery/space8.jpg',
        thumbnail: './images/main_gallery/space_thumb8.jpg'
    },
    {
        original: './images/main_gallery/space9.jpg',
        thumbnail: './images/main_gallery/space_thumb9.jpg'
    }
];

export default function SpaceQuickGallery() {
    return (
        <ImageGallery isRTL={true} autoPlay={true} showBullets={true} items={images} showThumbnails={false} showNav={false} slideInterval={7000} />
    );
}