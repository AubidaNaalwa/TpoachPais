import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import GalleryVideo from "./GalleryVideo";
import { API_PATH } from '../../Constants';

export default function GalleryVideos() {
	const [videos, setVideos] = useState([]),
	getSitePath = useLocation().pathname.includes('/space') ? "space" :  "tpais";

	useEffect(() => {
		const getVideosFromDb = async () => {
			const videosArray = await axios.get(`${API_PATH}/${getSitePath}/videos`);
			setVideos(videosArray.data);
		}
		getVideosFromDb();
	}, [getSitePath]);

	return (
		<Grid container direction="row" justify="space-evenly" spacing={3}>
		{
			videos.map(v =>
				<Grid item key={v._id} style={{width: 314, display: 'inline-table'}}>
					<GalleryVideo video={v} />
				</Grid>
			)
		}
		</Grid>
	);
}