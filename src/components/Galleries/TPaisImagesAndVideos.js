import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function TPaisImagesAndVideos() {
    return (
        <div>
            <div className="video-container">
                <div className="card">
                    <Link to={`/tpais/gallery/images`}>
                        <img alt="img" src="./images/tpais_images.jpg" />
                        <div className="card__head">صور</div>
                    </Link>
                </div>
                <div className="card">
                    <Link to={`/tpais/gallery/videos`}>
                        <img alt="img" src="./images/tpais_videos.jpg" />
                    </Link>
                    <div className="card__head">فيديوز</div>
                </div>
            </div>
        </div>
    );
}