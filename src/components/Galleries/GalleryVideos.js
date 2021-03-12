import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import GalleryVideo from "./GalleryVideo";
import { API_PATH, SNACKBAR_PROPS } from '../../Constants';
import SnackBar from '../SnackBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	gridItem: {
		width: 314,
		display: 'inline-table'
	}
}));

export default function GalleryVideos() {
	const classes = useStyles(),
	[videos, setVideos] = useState([]),
	getSitePath = useLocation().pathname.includes('/space') ? "space" :  "tpais",
	[snack, setSnack] = useState('');

	useEffect(() => {
		const getVideosFromDb = async () => {
			try {
				const videosArray = await axios.get(`${API_PATH}/${getSitePath}/videos`);
				setVideos(videosArray.data);
			}
			catch {
				setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
			}
		}
		getVideosFromDb();
	}, [getSitePath]);

	return (
		<>
			<Grid container direction="row" justify="space-evenly" spacing={3}>
			{
				videos.map(v =>
					<Grid item key={v._id} className={classes.gridItem}>
						<GalleryVideo video={v} />
					</Grid>
				)
			}
			</Grid>
			<SnackBar open={setSnack} message={snack.message} severity={snack.severity} />
		</>
	);
}