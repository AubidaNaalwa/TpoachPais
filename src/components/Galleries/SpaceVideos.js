import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import Videos from "./Videos";
import { API_PATH } from '../../Constants';

export default function SpaceVideos() {
	const [videos, setVideos] = useState([]);

	const getVideosFromDb = async () => {
		const videosArray = await axios.get(`${API_PATH}/space/videos`);
		setVideos(videosArray.data);
	}

	useEffect(() => { getVideosFromDb() }, []);

	return (
		<div className="videos">
			<div className="video" id="vid-grid">
				{videos.map(v => <Videos video={v} key={v._id} />)}
			</div>
		</div>
	)
}