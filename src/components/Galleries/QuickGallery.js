import React from 'react';
import ImageGallery from 'react-image-gallery';
import { useLocation } from 'react-router-dom';

const tpaisImages = [
    {
        original: './images/quick_gallery/tpais1.jpg',
        thumbnail: './images/quick_gallery/tpais_thumb1.jpg'
    },
    {
        original: './images/quick_gallery/tpais2.jpg',
        thumbnail: './images/quick_gallery/tpais_thumb2.jpg'
    },
    {
        original: './images/quick_gallery/tpais3.jpg',
        thumbnail: './images/quick_gallery/tpais_thumb3.jpg'
    }
];

const spaceImages = [
    {
        original: './images/quick_gallery/space1.jpg',
        thumbnail: './images/quick_gallery/space_thumb1.jpg'
    },
    {
        original: './images/quick_gallery/space2.jpg',
        thumbnail: './images/quick_gallery/space_thumb2.jpg'
    },
    {
        original: './images/quick_gallery/space3.jpg',
        thumbnail: './images/quick_gallery/space_thumb3.jpg'
    },
    {
        original: './images/quick_gallery/space4.jpg',
        thumbnail: './images/quick_gallery/space_thumb4.jpg'
    },
    {
        original: './images/quick_gallery/space5.jpg',
        thumbnail: './images/quick_gallery/space_thumb5.jpg'
    },
    {
        original: './images/quick_gallery/space6.jpg',
        thumbnail: './images/quick_gallery/space_thumb6.jpg'
    },
    {
        original: './images/quick_gallery/space7.jpg',
        thumbnail: './images/quick_gallery/space_thumb7.jpg'
    },
    {
        original: './images/quick_gallery/space8.jpg',
        thumbnail: './images/quick_gallery/space_thumb8.jpg'
    },
    {
        original: './images/quick_gallery/space9.jpg',
        thumbnail: './images/quick_gallery/space_thumb9.jpg'
    }
];

export default function QuickGallery() {
    const isSpace = useLocation().pathname.includes('/space');

    return (
        <ImageGallery isRTL={true} autoPlay={true} showBullets={true} items={isSpace ? spaceImages : tpaisImages} showThumbnails={false} showNav={false} slideInterval={7000} />
    );
}