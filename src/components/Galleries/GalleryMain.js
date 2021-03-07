import React from "react";
import { Link, useLocation } from 'react-router-dom';

export default function GalleryMain() {
    const getSitePath = useLocation().pathname.includes('/space') ? "space" :  "tpais";

    return (
        <div className="videos-images-container">
            <div className="card">
                <Link to={`/${getSitePath}/gallery/images`}>
                    <img alt="images" src={`./images/${getSitePath}_images.jpg`} />
                </Link>
                <div className="card_head">صور</div>
            </div>
            <div className="card">
                <Link to={`/${getSitePath}/gallery/videos`}>
                    <img alt="videos" src={`./images/${getSitePath}_videos.jpg`} />
                </Link>
                <div className="card_head">فيديو</div>
            </div>
        </div>
    );
}