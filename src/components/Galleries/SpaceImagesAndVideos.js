import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function SpaceImagesAndVideos() {

    return (
        <div className="video-container">
            <div className="card">
                <Link to={`/space/gallery/images`}>
                    <img alt="img" src="./images/space_images.jpg" />
                </Link>
                <div className="card__head">صور</div>
            </div>
            <div className="card">
                <Link to={`/space/gallery/videos`}>

                    <img alt="img" src="./images/space_videos.webp" />
                </Link>
                <div className="card__head">فيديوز</div>
            </div>
        </div>
    );
}